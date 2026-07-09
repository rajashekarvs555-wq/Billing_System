from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey, UniqueConstraint
from sqlalchemy.sql import func

from app.database.base import Base


class Material(Base):
    __tablename__ = "materials"
    __table_args__ = (UniqueConstraint("user_id", "material_name", name="uq_user_material_name"),)

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    material_name = Column(String(200), nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )
