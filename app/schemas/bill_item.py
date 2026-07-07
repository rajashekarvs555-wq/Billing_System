from datetime import date
from decimal import Decimal

from pydantic import BaseModel


class BillItemBase(BaseModel):
    item_date: date | None = None
    vehicle: str | None = None
    material: str | None = None
    dc_no: str | None = None
    qty: Decimal
    rate: Decimal
    amount: Decimal


class BillItemCreate(BillItemBase):
    pass


class BillItemResponse(BillItemBase):
    id: int

    class Config:
        from_attributes = True