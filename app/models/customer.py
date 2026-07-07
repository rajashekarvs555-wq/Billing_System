from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DateTime

from sqlalchemy.sql import func

from app.database.base import Base


from sqlalchemy import ForeignKey, UniqueConstraint

class Customer(Base):
    __tablename__ = "customers"
    __table_args__ = (UniqueConstraint("user_id", "customer_name", name="uq_user_customer_name"),)

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    customer_name = Column(
        String(200),
        nullable=False
    )

    contact_person = Column(
        String(100),
        nullable=True
    )

    mobile_number = Column(
        String(20),
        nullable=True
    )

    gst_number = Column(
        String(30),
        nullable=True
    )

    address = Column(
        Text,
        nullable=True
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )