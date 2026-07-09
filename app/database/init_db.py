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
        connection.execute(text("ALTER TABLE payments ADD COLUMN IF NOT EXISTS payment_no INTEGER;"))
        connection.commit()

    # Backfill sequential payment_no for existing payments
    from app.database.session import SessionLocal
    from app.models.payment import Payment
    from sqlalchemy import func
    
    db = SessionLocal()
    try:
        null_payments = db.query(Payment).filter(Payment.payment_no == None).order_by(Payment.id).all()
        if null_payments:
            user_max_nos = {}
            for pay in null_payments:
                uid = pay.user_id
                if uid not in user_max_nos:
                    max_no = db.query(func.max(Payment.payment_no)).filter(Payment.user_id == uid).scalar()
                    user_max_nos[uid] = max_no if max_no is not None else 0
                user_max_nos[uid] += 1
                pay.payment_no = user_max_nos[uid]
            db.commit()
    except Exception as e:
        print(f"Error backfilling payment_no: {e}")
        db.rollback()
    finally:
        db.close()