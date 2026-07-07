from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from fastapi import Query

from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.bill import (
    BillCreate,
    BillUpdate,
    BillResponse
)

from app.services.bill_service import (
    BillService
)

from fastapi.responses import StreamingResponse

from app.services.excel_service import (
    ExcelService
)
from app.api.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/bills",
    tags=["Bills"]
)


@router.post(
    "",
    response_model=BillResponse
)
def create_bill(
    payload: BillCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    return BillService.create_bill(
        db,
        payload,
        current_user.id
    )


@router.get(
    "/next-number",
    response_model=dict
)
def get_next_bill_no(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    next_no = BillService.get_next_bill_no(db, current_user.id)
    return {"next_bill_no": next_no}


@router.get(
    "/{bill_no}",
    response_model=BillResponse
)
def get_bill(
    bill_no: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    bill = (
        BillService.get_bill_by_number(
            db,
            bill_no,
            current_user.id
        )
    )

    if not bill:
        raise HTTPException(
            status_code=404,
            detail="Bill not found"
        )

    return bill


@router.put(
    "/{bill_no}",
    response_model=BillResponse
)
def update_bill(
    bill_no: int,
    payload: BillUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    bill = (
        BillService.update_bill(
            db,
            bill_no,
            payload,
            current_user.id
        )
    )

    if not bill:
        raise HTTPException(
            status_code=404,
            detail="Bill not found"
        )

    return bill

@router.get(
    "",
    response_model=list[BillResponse]
)
def get_all_bills(
    skip: int = Query(
        default=0
    ),
    limit: int = Query(
        default=20
    ),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    return (
        BillService.get_all_bills(
            db,
            current_user.id,
            skip,
            limit
        )
    )

@router.get(
    "/{bill_no}/excel"
)
def download_excel(
    bill_no: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    bill = (
        BillService.get_bill_by_number(
            db,
            bill_no,
            current_user.id
        )
    )

    if not bill:
        raise HTTPException(
            status_code=404,
            detail="Bill not found"
        )

    excel_file = (
        ExcelService
        .generate_bill_excel(
            bill
        )
    )

    return StreamingResponse(
        excel_file,
        media_type=
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={
            "Content-Disposition":
            f"attachment; filename=Bill_{bill_no}.xlsx"
        }
    )

@router.delete(
    "/{bill_no}",
    status_code=200
)
def delete_bill(
    bill_no: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    success = BillService.delete_bill(
        db,
        bill_no,
        current_user.id
    )
    if not success:
        raise HTTPException(
            status_code=404,
            detail="Bill not found"
        )
    return {"detail": "Bill deleted successfully"}