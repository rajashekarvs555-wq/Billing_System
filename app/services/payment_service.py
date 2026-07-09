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

    @staticmethod
    def update_payment(
        db: Session,
        payment_id: int,
        payload: PaymentCreate,
        user_id: int
    ):
        payment = (
            db.query(Payment)
            .filter(Payment.id == payment_id, Payment.user_id == user_id)
            .first()
        )
        if not payment:
            return None

        payment.customer_id = payload.customer_id
        payment.payment_date = payload.payment_date
        payment.amount_received = payload.amount_received
        payment.remarks = payload.remarks

        db.commit()
        db.refresh(payment)
        return payment

    @staticmethod
    def delete_payment(
        db: Session,
        payment_id: int,
        user_id: int
    ) -> bool:
        payment = (
            db.query(Payment)
            .filter(Payment.id == payment_id, Payment.user_id == user_id)
            .first()
        )
        if not payment:
            return False

        db.delete(payment)
        db.commit()
        return True