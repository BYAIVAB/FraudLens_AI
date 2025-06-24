import joblib
import numpy as np
import pandas as pd
from api.schemas import TransactionInput
import os
import lightgbm as lgb

# Global variables to store loaded components
model = None
location_encoder = None
feature_names = None

def load_model_components():
    """
    Load the trained LightGBM model and location encoder from the GitHub repository.
    """
    global model, location_encoder, feature_names
    
    try:
        # Load the LightGBM model
        model = joblib.load('models_data/lightgbm_model.pkl')
        
        # Load the location encoder
        location_encoder = joblib.load('models_data/customer_loc.pkl')
        
        # Define feature names based on the model's expected input
        feature_names = [
            'amount', 'customer_age', 'transaction_date_ordinal', 
            'transaction_hour', 'account_age', 'customer_location_encoded'
        ]
        
        print("LightGBM model and location encoder loaded successfully!")
        print(f"Available locations: {len(location_encoder.classes_)} cities")
        return True
        
    except FileNotFoundError as e:
        print(f"Model files not found: {e}")
        print("Please ensure the model files are downloaded from the GitHub repository")
        return False
    except Exception as e:
        print(f"Error loading model: {e}")
        return False

def get_sample_locations():
    """
    Get a list of sample city names that work with the model.
    """
    if location_encoder is None:
        return []
    
    # Return first 10 cities as examples
    return location_encoder.classes_[:10].tolist()

def preprocess_transaction(data: TransactionInput):
    """
    Preprocess a single transaction for prediction using the real model.
    """
    # Convert transaction_date to ordinal
    transaction_date_ordinal = data.transaction_date.toordinal()
    
    # Encode customer_location using the real encoder
    try:
        customer_location_encoded = location_encoder.transform([data.customer_location])[0]
    except ValueError:
        # If location not seen during training, use a default encoding (0)
        print(f"Warning: Location '{data.customer_location}' not found in encoder.")
        print(f"Available sample locations: {get_sample_locations()}")
        print("Using default encoding (0).")
        customer_location_encoded = 0
    
    # Create feature vector matching the model's expected input
    features = np.array([[
        data.amount,
        data.customer_age,
        transaction_date_ordinal,
        data.transaction_hour,
        data.account_age,
        customer_location_encoded
    ]])
    
    return features

def predict_fraud(data: TransactionInput):
    """
    Predict fraud for a given transaction using the real LightGBM model.
    """
    global model, location_encoder
    
    # Load model components if not already loaded
    if model is None:
        if not load_model_components():
            return {"error": "Model not loaded. Please ensure model files are available."}
    
    try:
        # Preprocess the input data
        features = preprocess_transaction(data)
        
        # Get prediction and probability
        prediction = model.predict(features)[0]
        probabilities = model.predict_proba(features)[0]
        
        # Get fraud probability (class 1)
        fraud_probability = float(probabilities[1])
        is_fraudulent = bool(prediction)
        
        # Get sample locations for reference
        sample_locations = get_sample_locations()
        
        return {
            "fraudulent": is_fraudulent,
            "probability": fraud_probability,
            "confidence": max(probabilities),  # Confidence of the prediction
            "features_used": feature_names if feature_names else [],
            "model_type": "LightGBM",
            "model_source": "FraudLens-XAI GitHub Repository",
            "sample_locations": sample_locations,
            "location_note": "Model expects city names, not country codes"
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
    

