import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import classification_report, confusion_matrix
import joblib
import os
from datetime import datetime, timedelta
import random

def generate_synthetic_fraud_data(n_samples=10000):
    """
    Generate synthetic fraud detection data for demonstration.
    In a real scenario, you would use actual transaction data.
    """
    np.random.seed(42)
    
    # Generate synthetic data
    data = []
    
    for i in range(n_samples):
        # Generate customer age (18-80)
        customer_age = np.random.randint(18, 81)
        
        # Generate transaction amount (1-10000)
        amount = np.random.exponential(500) + 1
        amount = min(amount, 10000)  # Cap at 10000
        
        # Generate transaction date (last 2 years)
        days_ago = np.random.randint(0, 730)
        transaction_date = datetime.now() - timedelta(days=days_ago)
        
        # Generate transaction hour (0-23)
        transaction_hour = np.random.randint(0, 24)
        
        # Generate account age in months (1-120)
        account_age = np.random.randint(1, 121)
        
        # Generate customer location (simplified)
        locations = ['US', 'UK', 'CA', 'AU', 'DE', 'FR', 'JP', 'BR', 'IN', 'MX']
        customer_location = np.random.choice(locations)
        
        # Generate fraud label based on patterns
        fraud_prob = 0.0
        
        # Higher fraud probability for:
        # - Large amounts
        if amount > 2000:
            fraud_prob += 0.3
        # - Late night transactions
        if transaction_hour < 6 or transaction_hour > 22:
            fraud_prob += 0.2
        # - Young customers with large amounts
        if customer_age < 25 and amount > 1000:
            fraud_prob += 0.3
        # - New accounts with large amounts
        if account_age < 6 and amount > 500:
            fraud_prob += 0.2
        # - Certain locations
        if customer_location in ['BR', 'MX']:
            fraud_prob += 0.1
            
        # Add some randomness
        fraud_prob += np.random.normal(0, 0.1)
        fraud_prob = max(0, min(1, fraud_prob))
        
        is_fraudulent = np.random.random() < fraud_prob
        
        data.append({
            'amount': amount,
            'customer_age': customer_age,
            'transaction_date': transaction_date,
            'transaction_hour': transaction_hour,
            'account_age': account_age,
            'customer_location': customer_location,
            'is_fraudulent': is_fraudulent
        })
    
    return pd.DataFrame(data)

def preprocess_data(df):
    """
    Preprocess the data for model training.
    """
    # Create a copy to avoid modifying original data
    df_processed = df.copy()
    
    # Convert transaction_date to ordinal (days since epoch)
    df_processed['transaction_date_ordinal'] = df_processed['transaction_date'].apply(lambda x: x.toordinal())
    
    # Encode customer_location
    le = LabelEncoder()
    df_processed['customer_location_encoded'] = le.fit_transform(df_processed['customer_location'])
    
    # Create feature matrix
    feature_columns = [
        'amount', 'customer_age', 'transaction_date_ordinal', 
        'transaction_hour', 'account_age', 'customer_location_encoded'
    ]
    
    X = df_processed[feature_columns]
    y = df_processed['is_fraudulent']
    
    return X, y, le

def train_fraud_detection_model():
    """
    Train a fraud detection model and save it along with preprocessing components.
    """
    print("Generating synthetic fraud detection data...")
    df = generate_synthetic_fraud_data(n_samples=10000)
    
    print("Preprocessing data...")
    X, y, label_encoder = preprocess_data(df)
    
    # Split the data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    # Scale the features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    print("Training Random Forest model...")
    # Train a Random Forest model
    model = RandomForestClassifier(
        n_estimators=100,
        max_depth=10,
        random_state=42,
        class_weight='balanced'  # Handle imbalanced classes
    )
    
    model.fit(X_train_scaled, y_train)
    
    # Evaluate the model
    y_pred = model.predict(X_test_scaled)
    y_pred_proba = model.predict_proba(X_test_scaled)
    
    print("\nModel Performance:")
    print("=" * 50)
    print(classification_report(y_test, y_pred))
    
    print("\nConfusion Matrix:")
    print(confusion_matrix(y_test, y_pred))
    
    # Save the model and preprocessing components
    print("\nSaving model and preprocessing components...")
    
    # Create data directory if it doesn't exist
    os.makedirs('data', exist_ok=True)
    
    # Save the model
    joblib.dump(model, 'data/fraud_detection_model.pkl')
    
    # Save the scaler
    joblib.dump(scaler, 'data/scaler.pkl')
    
    # Save the label encoder
    joblib.dump(label_encoder, 'data/label_encoder.pkl')
    
    # Save feature names for reference
    feature_names = X.columns.tolist()
    joblib.dump(feature_names, 'data/feature_names.pkl')
    
    print("Model and preprocessing components saved successfully!")
    print("Files saved:")
    print("- data/fraud_detection_model.pkl")
    print("- data/scaler.pkl") 
    print("- data/label_encoder.pkl")
    print("- data/feature_names.pkl")
    
    return model, scaler, label_encoder, feature_names

if __name__ == "__main__":
    train_fraud_detection_model() 