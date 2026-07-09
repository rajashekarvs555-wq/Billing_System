from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.payment import (
    PaymentCreate,
    PaymentUpdate,
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


@router.put(
    "/{payment_id}",
    response_model=PaymentResponse
)
def update_payment(
    payment_id: int,
    payload: PaymentUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    payment = PaymentService.update_payment(
        db,
        payment_id,
        payload,
        current_user.id
    )
    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")
    return payment


@router.delete(
    "/{payment_id}",
    response_model=dict
)
def delete_payment(
    payment_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    success = PaymentService.delete_payment(
        db,
        payment_id,
        current_user.id
    )
    if not success:
        raise HTTPException(status_code=404, detail="Payment not found")
    return {"message": "Payment deleted successfully"}