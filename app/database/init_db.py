from sqlalchemy import text
from app.database.base import Base
from app.database.session import engine

from app.models import *


def init_database():

    Base.metadata.create_all(
        bind=engine
    )
    
    with engine.connect() as connection:
        connection.execute(text("ALTER TABLE bills ADD COLUMN IF NOT EXISTS gst_type VARCHAR(30) DEFAULT 'none';"))
        connection.execute(text("ALTER TABLE bills ADD COLUMN IF NOT EXISTS cgst_pct NUMERIC(12, 2) DEFAULT 0;"))
        connection.execute(text("ALTER TABLE bills ADD COLUMN IF NOT EXISTS sgst_pct NUMERIC(12, 2) DEFAULT 0;"))
        connection.execute(text("ALTER TABLE bills ADD COLUMN IF NOT EXISTS igst_pct NUMERIC(12, 2) DEFAULT 0;"))
        connection.commit()