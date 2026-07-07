import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.api.customers import router as customer_router
from app.api.bills import router as bill_router
from app.api.payments import router as payment_router
from app.api.reports import router as report_router
from app.api.auth import router as auth_router

from app.database.init_db import (
    init_database
)

app = FastAPI(
    title="Billing Management System"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200", "http://127.0.0.1:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(auth_router, prefix="/api")
app.include_router(customer_router, prefix="/api")
app.include_router(bill_router, prefix="/api")
app.include_router(payment_router, prefix="/api")
app.include_router(report_router, prefix="/api")

class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        try:
            return await super().get_response(path, scope)
        except (StarletteHTTPException, Exception) as exc:
            index_path = os.path.join(self.directory, "index.html")
            if os.path.exists(index_path):
                return FileResponse(index_path)
            raise exc

@app.on_event("startup")
def startup():
    init_database()

@app.get("/health")
def health_check():
    return {
        "status": "running"
    }

# Serve the compiled frontend static files
app.mount("/", SPAStaticFiles(directory="static", html=True), name="static")