from fastapi import APIRouter
from models.predictor import predict_fraud, get_explanation
from .schemas import TransactionInput

router = APIRouter()

@router.post("/predict", summary="Predict fraud for a single transaction")
async def predict(transaction: TransactionInput):
    """
    Receives transaction data and returns a fraud prediction.
    """
    prediction = predict_fraud(transaction)
    return prediction

@router.get("/explain/{transaction_id}", summary="Get detailed explanation for a transaction")
async def explain_transaction(transaction_id: str):
    """
    Returns detailed explanation data for a transaction including SHAP values,
    counterfactuals, and other interpretability features.
    """
    explanation = get_explanation(transaction_id)
    return explanation 