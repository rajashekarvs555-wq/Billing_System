from sqlalchemy.orm import Session

from app.models.customer import Customer
from app.schemas.customer import CustomerCreate
from app.schemas.customer import CustomerUpdate


from fastapi import HTTPException

class CustomerService:

    @staticmethod
    def create_customer(
        db: Session,
        payload: CustomerCreate,
        user_id: int
    ):
        existing_customer = db.query(Customer).filter(
            Customer.customer_name == payload.customer_name,
            Customer.user_id == user_id
        ).first()
        if existing_customer:
            raise HTTPException(
                status_code=400,
                detail=f"Customer '{payload.customer_name}' already exists"
            )

        customer = Customer(
            user_id=user_id,
            **payload.model_dump()
        )

        db.add(customer)

        db.commit()

        db.refresh(customer)

        return customer

    @staticmethod
    def get_all_customers(db: Session, user_id: int):

        return (
            db.query(Customer)
            .filter(Customer.user_id == user_id)
            .order_by(Customer.customer_name)
            .all()
        )

    @staticmethod
    def get_customer(
        db: Session,
        customer_id: int,
        user_id: int
    ):

        return (
            db.query(Customer)
            .filter(Customer.id == customer_id, Customer.user_id == user_id)
            .first()
        )

    @staticmethod
    def update_customer(
        db: Session,
        customer_id: int,
        payload: CustomerUpdate,
        user_id: int
    ):

        customer = (
            db.query(Customer)
            .filter(Customer.id == customer_id, Customer.user_id == user_id)
            .first()
        )

        if not customer:
            return None

        # Check if updating to a name that already exists for another customer
        if payload.customer_name != customer.customer_name:
            existing = db.query(Customer).filter(
                Customer.customer_name == payload.customer_name,
                Customer.user_id == user_id
            ).first()
            if existing:
                raise HTTPException(
                    status_code=400,
                    detail=f"Customer '{payload.customer_name}' already exists"
                )

        for key, value in payload.model_dump().items():
            setattr(customer, key, value)

        db.commit()

        db.refresh(customer)

        return customer
    
    @staticmethod
    def search_customer(
        db: Session,
        search_text: str,
        user_id: int
    ):

        return (
            db.query(Customer)
            .filter(
                Customer.customer_name.ilike(
                    f"%{search_text}%"
                ),
                Customer.user_id == user_id
            )
            .order_by(
                Customer.customer_name
            )
            .all()
        )