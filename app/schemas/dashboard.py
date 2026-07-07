from decimal import Decimal

from pydantic import BaseModel


class DashboardResponse(BaseModel):
    total_bills: int
    total_customers: int
    total_revenue: Decimal
    total_payments: Decimal
    outstanding: Decimal