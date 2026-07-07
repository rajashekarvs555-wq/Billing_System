from app.database.base import Base
from app.database.session import engine

from app.models import *


def init_database():

    Base.metadata.create_all(
        bind=engine
    )