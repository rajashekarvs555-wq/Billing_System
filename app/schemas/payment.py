from datetime import date
from decimal import Decimal

from pydantic import BaseModel


class PaymentCreate(BaseModel):
    customer_id: int
    payment_date: date
    amount_received: Decimal
    remarks: str | None = None


class PaymentResponse(BaseModel):
    id: int
    customer_id: int
    payment_date: date
    amount_received: Decimal
    remarks: str | None

    class Config:
        from_attributes = True