#!/usr/bin/env python3
"""
Test script to verify the real LightGBM model integration.
"""

from models.predictor import predict_fraud, get_sample_locations
from api.schemas import TransactionInput
from datetime import date

def test_model():
    """Test the model with sample transaction data."""
    
    print("Testing LightGBM Model Integration")
    print("=" * 40)
    
    # Get sample locations
    sample_locations = get_sample_locations()
    print(f"Sample locations available: {sample_locations}")
    
    # Test case 1: Normal transaction with valid city
    normal_transaction = TransactionInput(
        amount=500.0,
        customer_age=35,
        transaction_date=date(2024, 1, 15),
        transaction_hour=14,
        account_age=24,
        customer_location=sample_locations[0] if sample_locations else "New York"
    )
    
    print(f"\nTest Case 1: Normal Transaction")
    print(f"Amount: ${normal_transaction.amount}")
    print(f"Customer Age: {normal_transaction.customer_age}")
    print(f"Location: {normal_transaction.customer_location}")
    
    result1 = predict_fraud(normal_transaction)
    print(f"Result: {result1}")
    
    # Test case 2: Suspicious transaction with valid city
    suspicious_transaction = TransactionInput(
        amount=5000.0,
        customer_age=22,
        transaction_date=date(2024, 1, 15),
        transaction_hour=3,  # Late night
        account_age=2,  # New account
        customer_location=sample_locations[1] if len(sample_locations) > 1 else "Los Angeles"
    )
    
    print(f"\nTest Case 2: Suspicious Transaction")
    print(f"Amount: ${suspicious_transaction.amount}")
    print(f"Customer Age: {suspicious_transaction.customer_age}")
    print(f"Location: {suspicious_transaction.customer_location}")
    print(f"Transaction Hour: {suspicious_transaction.transaction_hour}")
    print(f"Account Age: {suspicious_transaction.account_age} months")
    
    result2 = predict_fraud(suspicious_transaction)
    print(f"Result: {result2}")
    
    # Test case 3: Unknown location (should use default encoding)
    unknown_location_transaction = TransactionInput(
        amount=1000.0,
        customer_age=45,
        transaction_date=date(2024, 1, 15),
        transaction_hour=10,
        account_age=60,
        customer_location="UNKNOWN_CITY"
    )
    
    print(f"\nTest Case 3: Unknown Location")
    print(f"Location: {unknown_location_transaction.customer_location}")
    
    result3 = predict_fraud(unknown_location_transaction)
    print(f"Result: {result3}")
    
    print("\n" + "=" * 40)
    print("Model Integration Test Complete!")
    
    return result1, result2, result3

if __name__ == "__main__":
    test_model() 