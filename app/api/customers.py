from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.customer import (
    CustomerCreate,
    CustomerUpdate,
    CustomerResponse
)

from app.services.customer_service import (
    CustomerService
)
from app.api.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/customers",
    tags=["Customers"]
)


@router.post(
    "",
    response_model=CustomerResponse
)
def create_customer(
    payload: CustomerCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return CustomerService.create_customer(
        db,
        payload,
        current_user.id
    )


@router.get(
    "",
    response_model=list[CustomerResponse]
)
def get_customers(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return CustomerService.get_all_customers(
        db,
        current_user.id
    )


@router.get(
    "/{customer_id}",
    response_model=CustomerResponse
)
def get_customer(
    customer_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    customer = (
        CustomerService.get_customer(
            db,
            customer_id,
            current_user.id
        )
    )

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    return customer


@router.put(
    "/{customer_id}",
    response_model=CustomerResponse
)
def update_customer(
    customer_id: int,
    payload: CustomerUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    customer = (
        CustomerService.update_customer(
            db,
            customer_id,
            payload,
            current_user.id
        )
    )

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    return customer

@router.get(
    "/search/{search_text}",
    response_model=list[CustomerResponse]
)
def search_customer(
    search_text: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    return (
        CustomerService.search_customer(
            db,
            search_text,
            current_user.id
        )
    )