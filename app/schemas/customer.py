from datetime import datetime

from pydantic import BaseModel


class CustomerBase(BaseModel):
    customer_name: str
    contact_person: str | None = None
    mobile_number: str | None = None
    gst_number: str | None = None
    address: str | None = None


class CustomerCreate(CustomerBase):
    pass


class CustomerUpdate(CustomerBase):
    pass


class CustomerResponse(CustomerBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True