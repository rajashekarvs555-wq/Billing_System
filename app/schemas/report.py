from decimal import Decimal

from pydantic import BaseModel


class TrackerResponse(BaseModel):
    bill_no: int
    customer_name: str

    bill_amount: Decimal
    paid_amount: Decimal
    balance_amount: Decimal