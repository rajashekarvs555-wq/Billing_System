from sqlalchemy.orm import Session

from app.models.payment import Payment
from app.schemas.payment import PaymentCreate


class PaymentService:

    @staticmethod
    def create_payment(
        db: Session,
        payload: PaymentCreate,
        user_id: int
    ):

        payment = Payment(
            customer_id=payload.customer_id,
            user_id=user_id,
            payment_date=payload.payment_date,
            amount_received=payload.amount_received,
            remarks=payload.remarks
        )

        db.add(payment)

        db.commit()

        db.refresh(payment)

        return payment

    @staticmethod
    def get_all_payments(db: Session, user_id: int):

        return (
            db.query(Payment)
            .filter(Payment.user_id == user_id)
            .order_by(Payment.payment_date.desc())
            .all()
        )

    @staticmethod
    def get_customer_payments(
        db: Session,
        customer_id: int,
        user_id: int
    ):

        return (
            db.query(Payment)
            .filter(Payment.customer_id == customer_id, Payment.user_id == user_id)
            .order_by(Payment.payment_date.desc())
            .all()
        )