from pydantic import BaseModel
from datetime import date

class TransactionInput(BaseModel):
    amount: float
    customer_age: int
    transaction_date: date
    transaction_hour: int
    account_age: int
    customer_location: str 