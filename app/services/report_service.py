from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.bill import Bill
from app.models.customer import Customer
from app.models.payment import Payment


class ReportService:

    @staticmethod
    def get_tracker_report(
        db: Session,
        user_id: int
    ):

        bills = (
            db.query(Bill)
            .join(Customer)
            .filter(Bill.user_id == user_id)
            .order_by(Bill.bill_no.desc())
            .all()
        )

        response = []

        for bill in bills:

            paid_amount = (
                db.query(
                    func.coalesce(
                        func.sum(
                            Payment.amount_received
                        ),
                        0
                    )
                )
                .filter(
                    Payment.customer_id
                    == bill.customer_id,
                    Payment.user_id
                    == user_id
                )
                .scalar()
            )

            balance = (
                bill.grand_total
                - paid_amount
            )

            response.append(
                {
                    "bill_no": bill.bill_no,
                    "customer_name":
                        bill.customer.customer_name,
                    "bill_amount":
                        bill.grand_total,
                    "paid_amount":
                        paid_amount,
                    "balance_amount":
                        balance
                }
            )

        return response

    @staticmethod
    def get_dashboard_summary(
        db: Session,
        user_id: int
    ):

        total_bills = (
            db.query(
                func.count(Bill.id)
            )
            .filter(Bill.user_id == user_id)
            .scalar()
        )

        total_customers = (
            db.query(
                func.count(Customer.id)
            )
            .filter(Customer.user_id == user_id)
            .scalar()
        )

        total_revenue = (
            db.query(
                func.coalesce(
                    func.sum(Bill.grand_total),
                    0
                )
            )
            .filter(Bill.user_id == user_id)
            .scalar()
        )

        total_payments = (
            db.query(
                func.coalesce(
                    func.sum(
                        Payment.amount_received
                    ),
                    0
                )
            )
            .filter(Payment.user_id == user_id)
            .scalar()
        )

        outstanding = (
            total_revenue
            - total_payments
        )

        return {
            "total_bills": total_bills,
            "total_customers": total_customers,
            "total_revenue": total_revenue,
            "total_payments": total_payments,
            "outstanding": outstanding
        }