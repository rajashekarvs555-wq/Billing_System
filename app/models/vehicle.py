from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey, UniqueConstraint
from sqlalchemy.sql import func

from app.database.base import Base


class Vehicle(Base):
    __tablename__ = "vehicles"
    __table_args__ = (UniqueConstraint("user_id", "vehicle_no", name="uq_user_vehicle_no"),)

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    vehicle_no = Column(String(100), nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )
