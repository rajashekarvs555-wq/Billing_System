from datetime import datetime
from pydantic import BaseModel


class VehicleCreate(BaseModel):
    vehicle_no: str


class VehicleResponse(BaseModel):
    id: int
    user_id: int
    vehicle_no: str
    created_at: datetime

    class Config:
        from_attributes = True
