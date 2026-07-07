from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.services.report_service import (
    ReportService
)
from app.api.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)


@router.get(
    "/tracker"
)
def tracker_report(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    return (
        ReportService.get_tracker_report(
            db,
            current_user.id
        )
    )

@router.get(
    "/dashboard"
)
def dashboard_summary(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    return (
        ReportService
        .get_dashboard_summary(
            db,
            current_user.id
        )
    )