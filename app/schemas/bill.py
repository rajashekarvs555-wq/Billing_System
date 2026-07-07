from datetime import date
from decimal import Decimal

from pydantic import BaseModel

from app.schemas.bill_item import BillItemCreate
from app.schemas.bill_item import BillItemResponse
from app.schemas.customer import CustomerResponse


class BillCreate(BaseModel):
    bill_no: int
    bill_date: date
    customer_id: int
    notes: str | None = None

    cgst: Decimal = 0
    sgst: Decimal = 0
    igst: Decimal = 0

    items: list[BillItemCreate]


class BillUpdate(BaseModel):
    bill_no: int
    bill_date: date
    customer_id: int
    notes: str | None = None

    cgst: Decimal = 0
    sgst: Decimal = 0
    igst: Decimal = 0

    items: list[BillItemCreate]


class BillResponse(BaseModel):
    id: int
    bill_no: int

    bill_date: date

    subtotal: Decimal
    cgst: Decimal
    sgst: Decimal
    igst: Decimal

    tax_amount: Decimal
    grand_total: Decimal

    notes: str | None = None

    customer: CustomerResponse

    items: list[BillItemResponse]

    class Config:
        from_attributes = True