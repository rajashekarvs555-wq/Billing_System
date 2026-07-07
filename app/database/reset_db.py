from app.database.base import Base
from app.database.session import engine
from app.models import *

def reset_db():
    print("Dropping all tables to reset schema...")
    Base.metadata.drop_all(bind=engine)
    print("All tables dropped successfully. Schema will be recreated on next startup.")

if __name__ == "__main__":
    reset_db()
