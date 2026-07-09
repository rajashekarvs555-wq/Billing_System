from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.models.vehicle import Vehicle
from app.schemas.vehicle import VehicleCreate


class VehicleService:

    @staticmethod
    def create_vehicle(
        db: Session,
        payload: VehicleCreate,
        user_id: int
    ):
        normalized_no = payload.vehicle_no.strip().upper()
        existing = db.query(Vehicle).filter(
            Vehicle.vehicle_no == normalized_no,
            Vehicle.user_id == user_id
        ).first()

        if existing:
            raise HTTPException(
                status_code=400,
                detail=f"Vehicle number '{payload.vehicle_no}' already exists."
            )

        vehicle = Vehicle(
            user_id=user_id,
            vehicle_no=normalized_no
        )
        db.add(vehicle)
        db.commit()
        db.refresh(vehicle)
        return vehicle

    @staticmethod
    def get_all_vehicles(db: Session, user_id: int):
        return (
            db.query(Vehicle)
            .filter(Vehicle.user_id == user_id)
            .order_by(Vehicle.vehicle_no)
            .all()
        )

    @staticmethod
    def delete_vehicle(db: Session, vehicle_id: int, user_id: int) -> bool:
        vehicle = db.query(Vehicle).filter(
            Vehicle.id == vehicle_id,
            Vehicle.user_id == user_id
        ).first()
        if not vehicle:
            return False
        db.delete(vehicle)
        db.commit()
        return True
