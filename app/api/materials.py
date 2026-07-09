from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.material import MaterialCreate, MaterialResponse
from app.services.material_service import MaterialService
from app.api.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/materials",
    tags=["Materials"]
)


@router.post("", response_model=MaterialResponse)
def create_material(
    payload: MaterialCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return MaterialService.create_material(db, payload, current_user.id)


@router.get("", response_model=list[MaterialResponse])
def get_materials(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return MaterialService.get_all_materials(db, current_user.id)


@router.delete("/{material_id}", response_model=dict)
def delete_material(
    material_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    success = MaterialService.delete_material(db, material_id, current_user.id)
    if not success:
        raise HTTPException(status_code=404, detail="Material not found")
    return {"message": "Material deleted successfully"}
