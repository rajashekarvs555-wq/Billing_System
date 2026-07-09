from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.vehicle import VehicleCreate, VehicleResponse
from app.services.vehicle_service import VehicleService
from app.api.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/vehicles",
    tags=["Vehicles"]
)


@router.post("", response_model=VehicleResponse)
def create_vehicle(
    payload: VehicleCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return VehicleService.create_vehicle(db, payload, current_user.id)


@router.get("", response_model=list[VehicleResponse])
def get_vehicles(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return VehicleService.get_all_vehicles(db, current_user.id)


@router.delete("/{vehicle_id}", response_model=dict)
def delete_vehicle(
    vehicle_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    success = VehicleService.delete_vehicle(db, vehicle_id, current_user.id)
    if not success:
        raise HTTPException(status_code=404, detail="Vehicle not found")
    return {"message": "Vehicle deleted successfully"}
