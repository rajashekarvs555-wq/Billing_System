from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "Billing Management System"

    DB_HOST: str = "localhost"
    DB_PORT: int = 5432
    DB_NAME: str = "billing_db"
    DB_USER: str = "postgres"
    DB_PASSWORD: str = "postgres"

    SECRET_KEY: str = "secret-key-change-in-production-123456"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_HOURS: int = 12

    @property
    def DATABASE_URL(self) -> str:
        return (
            f"postgresql+psycopg2://"
            f"{self.DB_USER}:{self.DB_PASSWORD}"
            f"@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        )

    class Config:
        env_file = ".env"


settings = Settings()