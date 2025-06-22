import joblib
import numpy as np
import pandas as pd
from api.schemas import TransactionInput
import os

# Global variables to store loaded components
model = None
scaler = None
label_encoder = None
feature_names = None

def load_model_components():
    """
    Load the trained model and preprocessing components.
    """
    global model, scaler, label_encoder, feature_names
    
    try:
        # Load the trained model
        model = joblib.load('data/fraud_detection_model.pkl')
        
        # Load the scaler
        scaler = joblib.load('data/scaler.pkl')
        
        # Load the label encoder
        label_encoder = joblib.load('data/label_encoder.pkl')
        
        # Load feature names
        feature_names = joblib.load('data/feature_names.pkl')
        
        print("Model and preprocessing components loaded successfully!")
        return True
        
    except FileNotFoundError as e:
        print(f"Model files not found: {e}")
        print("Please run the training script first: python models/train_model.py")
        return False
    except Exception as e:
        print(f"Error loading model: {e}")
        return False

def preprocess_transaction(data: TransactionInput):
    """
    Preprocess a single transaction for prediction.
    """
    # Convert transaction_date to ordinal
    transaction_date_ordinal = data.transaction_date.toordinal()
    
    # Encode customer_location - handle unseen locations
    try:
        customer_location_encoded = label_encoder.transform([data.customer_location])[0]
    except ValueError:
        # If location not seen during training, use a default encoding (0)
        print(f"Warning: Location '{data.customer_location}' not seen during training. Using default encoding.")
        customer_location_encoded = 0
    
    # Create feature vector
    features = np.array([[
        data.amount,
        data.customer_age,
        transaction_date_ordinal,
        data.transaction_hour,
        data.account_age,
        customer_location_encoded
    ]])
    
    # Scale the features
    features_scaled = scaler.transform(features)
    
    return features_scaled

def predict_fraud(data: TransactionInput):
    """
    Predict fraud for a given transaction using the trained model.
    """
    global model, scaler, label_encoder
    
    # Load model components if not already loaded
    if model is None:
        if not load_model_components():
            return {"error": "Model not loaded. Please run the training script first."}
    
    try:
        # Preprocess the input data
        features_scaled = preprocess_transaction(data)
        
        # Get prediction and probability
        prediction = model.predict(features_scaled)[0]
        probabilities = model.predict_proba(features_scaled)[0]
        
        # Get fraud probability (class 1)
        fraud_probability = float(probabilities[1])
        is_fraudulent = bool(prediction)
        
        return {
            "fraudulent": is_fraudulent,
            "probability": fraud_probability,
            "confidence": max(probabilities),  # Confidence of the prediction
            "features_used": feature_names if feature_names else []
        }
        
    except Exception as e:
        return {"error": f"Prediction failed: {str(e)}"}

def get_explanation(transaction_id: str):
    """
    Returns detailed explanation data for a transaction.
    In a real implementation, this would use SHAP, LIME, or other interpretability tools.
    """
    # TODO: Implement actual explainability tools
    # This would typically involve:
    # 1. Loading the transaction data for the given ID
    # 2. Computing SHAP values using shap.Explainer
    # 3. Generating counterfactuals using libraries like alibi
    # 4. Finding similar cases in the training data
    # 5. Extracting surrogate rules from the model
    
    return {
        "error": "Explanation functionality not yet implemented",
        "message": "This endpoint requires integration with explainability libraries like SHAP, LIME, or alibi",
        "transaction_id": transaction_id
    }

# Try to load model components when the module is imported
if __name__ != "__main__":
    load_model_components()
    

