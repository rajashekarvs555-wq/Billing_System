from decimal import Decimal
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.bill import Bill
from app.models.bill_item import BillItem
from app.schemas.bill import BillCreate
from app.schemas.bill import BillUpdate


class BillService:

    @staticmethod
    def get_next_bill_no(db: Session, user_id: int) -> int:

        latest_bill = (
            db.query(Bill)
            .filter(Bill.user_id == user_id)
            .order_by(Bill.bill_no.desc())
            .first()
        )

        if not latest_bill:
            return 1

        return latest_bill.bill_no + 1

    @staticmethod
    def calculate_totals(data: BillCreate | BillUpdate):

        subtotal = Decimal("0.00")

        for item in data.items:
            subtotal += item.amount

        tax_amount = (
            Decimal(data.cgst)
            + Decimal(data.sgst)
            + Decimal(data.igst)
        )

        grand_total = subtotal + tax_amount

        return subtotal, tax_amount, grand_total

    @staticmethod
    def create_bill(
        db: Session,
        payload: BillCreate,
        user_id: int
    ):
        # Check if bill_no already exists for this user
        existing_bill = db.query(Bill).filter(Bill.bill_no == payload.bill_no, Bill.user_id == user_id).first()
        if existing_bill:
            raise HTTPException(
                status_code=400,
                detail=f"Bill number {payload.bill_no} already exists"
            )

        subtotal, tax_amount, grand_total = (
            BillService.calculate_totals(payload)
        )

        bill = Bill(
            bill_no=payload.bill_no,
            bill_date=payload.bill_date,
            customer_id=payload.customer_id,
            user_id=user_id,
            subtotal=subtotal,
            cgst=payload.cgst,
            sgst=payload.sgst,
            igst=payload.igst,
            tax_amount=tax_amount,
            grand_total=grand_total,
            notes=payload.notes
        )

        db.add(bill)
        db.flush()

        for item in payload.items:

            bill_item = BillItem(
                bill_id=bill.id,
                item_date=item.item_date,
                vehicle=item.vehicle,
                material=item.material,
                dc_no=item.dc_no,
                qty=item.qty,
                rate=item.rate,
                amount=item.amount
            )

            db.add(bill_item)

        db.commit()
        db.refresh(bill)

        return bill

    @staticmethod
    def get_bill_by_number(
        db: Session,
        bill_no: int,
        user_id: int
    ):

        return (
            db.query(Bill)
            .filter(Bill.bill_no == bill_no, Bill.user_id == user_id)
            .first()
        )

    @staticmethod
    def update_bill(
        db: Session,
        bill_no: int,
        payload: BillUpdate,
        user_id: int
    ):

        bill = (
            db.query(Bill)
            .filter(Bill.bill_no == bill_no, Bill.user_id == user_id)
            .first()
        )

        if not bill:
            return None

        # Check if user changed the bill number and if the new number already exists
        if payload.bill_no != bill_no:
            existing_bill = db.query(Bill).filter(Bill.bill_no == payload.bill_no, Bill.user_id == user_id).first()
            if existing_bill:
                raise HTTPException(
                    status_code=400,
                    detail=f"Bill number {payload.bill_no} already exists"
                )

        subtotal, tax_amount, grand_total = (
            BillService.calculate_totals(payload)
        )

        bill.bill_no = payload.bill_no
        bill.bill_date = payload.bill_date
        bill.customer_id = payload.customer_id

        bill.cgst = payload.cgst
        bill.sgst = payload.sgst
        bill.igst = payload.igst

        bill.subtotal = subtotal
        bill.tax_amount = tax_amount
        bill.grand_total = grand_total

        bill.notes = payload.notes

        (
            db.query(BillItem)
            .filter(BillItem.bill_id == bill.id)
            .delete()
        )

        for item in payload.items:

            db.add(
                BillItem(
                    bill_id=bill.id,
                    item_date=item.item_date,
                    vehicle=item.vehicle,
                    material=item.material,
                    dc_no=item.dc_no,
                    qty=item.qty,
                    rate=item.rate,
                    amount=item.amount
                )
            )

        db.commit()
        db.refresh(bill)

        return bill
    
    @staticmethod
    def get_all_bills(
        db: Session,
        user_id: int,
        skip: int = 0,
        limit: int = 20
    ):

        return (
            db.query(Bill)
            .filter(Bill.user_id == user_id)
            .order_by(
                Bill.bill_no.desc()
            )
            .offset(skip)
            .limit(limit)
            .all()
        )

    @staticmethod
    def search_bill(
        db: Session,
        bill_no: int,
        user_id: int
    ):

        return (
            db.query(Bill)
            .filter(
                Bill.bill_no == bill_no,
                Bill.user_id == user_id
            )
            .first()
        )

    @staticmethod
    def delete_bill(
        db: Session,
        bill_no: int,
        user_id: int
    ) -> bool:
        bill = (
            db.query(Bill)
            .filter(
                Bill.bill_no == bill_no,
                Bill.user_id == user_id
            )
            .first()
        )
        if not bill:
            return False

        # Related BillItem records will be deleted automatically due to the cascade="all, delete-orphan" configuration in relationship
        db.delete(bill)
        db.commit()
        return True