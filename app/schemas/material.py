from datetime import datetime
from pydantic import BaseModel


class MaterialCreate(BaseModel):
    material_name: str


class MaterialResponse(BaseModel):
    id: int
    user_id: int
    material_name: str
    created_at: datetime

    class Config:
        from_attributes = True
