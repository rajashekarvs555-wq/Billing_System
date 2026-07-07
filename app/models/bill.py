from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Numeric
from sqlalchemy import Date
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime

from sqlalchemy.orm import relationship

from sqlalchemy.sql import func

from app.database.base import Base


from sqlalchemy import UniqueConstraint

class Bill(Base):
    __tablename__ = "bills"
    __table_args__ = (UniqueConstraint("user_id", "bill_no", name="uq_user_bill_no"),)

    id = Column(Integer, primary_key=True)

    bill_no = Column(
        Integer,
        nullable=False,
        index=True
    )

    bill_date = Column(
        Date,
        nullable=False
    )

    customer_id = Column(
        Integer,
        ForeignKey("customers.id"),
        nullable=False
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    subtotal = Column(
        Numeric(12, 2),
        nullable=False
    )

    cgst = Column(
        Numeric(12, 2),
        default=0
    )

    sgst = Column(
        Numeric(12, 2),
        default=0
    )

    igst = Column(
        Numeric(12, 2),
        default=0
    )

    tax_amount = Column(
        Numeric(12, 2),
        nullable=False
    )

    grand_total = Column(
        Numeric(12, 2),
        nullable=False
    )

    notes = Column(String(500))

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    customer = relationship(
        "Customer",
        lazy="joined"
    )

    items = relationship(
        "BillItem",
        cascade="all, delete-orphan",
        back_populates="bill"
    )