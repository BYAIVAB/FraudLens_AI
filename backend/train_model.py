#!/usr/bin/env python3
"""
Script to train the fraud detection model.
Run this script to generate and train a fraud detection model.
"""

import sys
import os

# Add the current directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from models.train_model import train_fraud_detection_model

if __name__ == "__main__":
    print("Starting fraud detection model training...")
    print("=" * 50)
    
    try:
        model, scaler, label_encoder, feature_names = train_fraud_detection_model()
        print("\n" + "=" * 50)
        print("Training completed successfully!")
        print("The model is now ready to use with the API.")
        print("\nTo start the API server, run:")
        print("python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000")
        
    except Exception as e:
        print(f"\nError during training: {e}")
        print("Please check that all required dependencies are installed:")
        print("pip install -r requirements.txt")
        sys.exit(1) 