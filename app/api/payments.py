from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.payment import (
    PaymentCreate,
    PaymentResponse
)

from app.services.payment_service import (
    PaymentService
)
from app.api.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/payments",
    tags=["Payments"]
)


@router.post(
    "",
    response_model=PaymentResponse
)
def create_payment(
    payload: PaymentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    return (
        PaymentService.create_payment(
            db,
            payload,
            current_user.id
        )
    )


@router.get(
    "",
    response_model=list[PaymentResponse]
)
def get_payments(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    return (
        PaymentService.get_all_payments(
            db,
            current_user.id
        )
    )


@router.get(
    "/customer/{customer_id}",
    response_model=list[PaymentResponse]
)
def get_customer_payments(
    customer_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    return (
        PaymentService.get_customer_payments(
            db,
            customer_id,
            current_user.id
        )
    )