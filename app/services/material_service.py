from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.models.material import Material
from app.schemas.material import MaterialCreate


class MaterialService:

    @staticmethod
    def create_material(
        db: Session,
        payload: MaterialCreate,
        user_id: int
    ):
        normalized_name = payload.material_name.strip()
        existing = db.query(Material).filter(
            Material.material_name.ilike(normalized_name),
            Material.user_id == user_id
        ).first()

        if existing:
            raise HTTPException(
                status_code=400,
                detail=f"Material name '{payload.material_name}' already exists."
            )

        material = Material(
            user_id=user_id,
            material_name=payload.material_name.strip()
        )
        db.add(material)
        db.commit()
        db.refresh(material)
        return material

    @staticmethod
    def get_all_materials(db: Session, user_id: int):
        return (
            db.query(Material)
            .filter(Material.user_id == user_id)
            .order_by(Material.material_name)
            .all()
        )

    @staticmethod
    def delete_material(db: Session, material_id: int, user_id: int) -> bool:
        material = db.query(Material).filter(
            Material.id == material_id,
            Material.user_id == user_id
        ).first()
        if not material:
            return False
        db.delete(material)
        db.commit()
        return True
