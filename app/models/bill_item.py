from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Numeric
from sqlalchemy import Date
from sqlalchemy import ForeignKey

from sqlalchemy.orm import relationship

from app.database.base import Base


class BillItem(Base):
    __tablename__ = "bill_items"

    id = Column(Integer, primary_key=True)

    bill_id = Column(
        Integer,
        ForeignKey("bills.id"),
        nullable=False
    )

    item_date = Column(
        Date,
        nullable=True
    )

    vehicle = Column(
        String(100)
    )

    material = Column(
        String(200)
    )

    dc_no = Column(
        String(100)
    )

    qty = Column(
        Numeric(12, 2)
    )

    rate = Column(
        Numeric(12, 2)
    )

    amount = Column(
        Numeric(12, 2)
    )

    bill = relationship(
        "Bill",
        back_populates="items"
    )