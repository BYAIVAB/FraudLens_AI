# Model Integration Guide

This document explains how the real LightGBM model from the [FraudLens-XAI GitHub repository](https://github.com/sourize/FraudLens-XAI.git) is integrated into the backend.

## Model Files

The following files are downloaded from the GitHub repository:

- `models_data/lightgbm_model.pkl` - The trained LightGBM model
- `models_data/customer_loc.pkl` - Location encoder for customer locations

## Data Flow

### 1. Frontend Input
The frontend sends transaction data in the following format:
```json
{
  "amount": 1500.0,
  "customer_age": 35,
  "transaction_date": "2024-01-15",
  "transaction_hour": 14,
  "account_age": 24,
  "customer_location": "US"
}
```

### 2. Backend Preprocessing
The `predictor.py` module processes the input:

1. **Date Conversion**: Converts `transaction_date` to ordinal (days since epoch)
2. **Location Encoding**: Uses the location encoder to convert location strings to numeric codes
3. **Feature Vector Creation**: Creates a feature vector with the following order:
   - `amount`
   - `customer_age`
   - `transaction_date_ordinal`
   - `transaction_hour`
   - `account_age`
   - `customer_location_encoded`

### 3. Model Prediction
The LightGBM model predicts:
- **Fraudulent**: Boolean indicating if the transaction is fraudulent
- **Probability**: Confidence score for the prediction
- **Confidence**: Overall confidence of the model

### 4. Frontend Output
The response includes:
```json
{
  "fraudulent": false,
  "probability": 0.15,
  "confidence": 0.85,
  "features_used": ["amount", "customer_age", "transaction_date_ordinal", "transaction_hour", "account_age", "customer_location_encoded"],
  "model_type": "LightGBM",
  "model_source": "FraudLens-XAI GitHub Repository"
}
```

## Setup Instructions

### 1. Download Model Files
```bash
cd backend
python download_models.py
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the Backend
```bash
python main.py
```

## Model Features

The LightGBM model uses the following features:

1. **Amount**: Transaction amount in currency units
2. **Customer Age**: Age of the customer in years
3. **Transaction Date**: Date of the transaction (converted to ordinal)
4. **Transaction Hour**: Hour of the day (0-23)
5. **Account Age**: Age of the account in months
6. **Customer Location**: Encoded location of the customer

## Error Handling

- **Unknown Locations**: If a location is not in the encoder's vocabulary, it defaults to encoding 0
- **Model Loading**: If model files are missing, the system provides clear error messages
- **Prediction Errors**: Detailed error messages are returned for debugging

## Performance

The LightGBM model provides:
- Fast prediction times
- High accuracy on fraud detection
- Probability scores for risk assessment
- Interpretable feature importance

## Future Enhancements

1. **SHAP Explanations**: Add SHAP values for model interpretability
2. **Feature Engineering**: Add more sophisticated feature engineering
3. **Model Retraining**: Implement model retraining pipeline
4. **A/B Testing**: Support for multiple model versions 