#!/usr/bin/env python3
"""
Script to check the location encoder and see what locations are available.
"""

import joblib

def check_location_encoder():
    """Check what locations are available in the encoder."""
    
    try:
        # Load the location encoder
        location_encoder = joblib.load('models_data/customer_loc.pkl')
        
        print("Location Encoder Information")
        print("=" * 40)
        
        # Get the classes (locations) that the encoder knows about
        if hasattr(location_encoder, 'classes_'):
            print(f"Available locations ({len(location_encoder.classes_)}):")
            for i, location in enumerate(location_encoder.classes_):
                print(f"  {i}: {location}")
        else:
            print("Encoder doesn't have classes_ attribute")
            print(f"Encoder type: {type(location_encoder)}")
            print(f"Encoder attributes: {dir(location_encoder)}")
        
        # Test encoding some sample locations
        print("\nTesting encoding:")
        test_locations = ['US', 'UK', 'CA', 'AU', 'DE', 'FR', 'JP', 'BR', 'IN', 'MX']
        
        for location in test_locations:
            try:
                encoded = location_encoder.transform([location])[0]
                print(f"  '{location}' -> {encoded}")
            except ValueError:
                print(f"  '{location}' -> NOT FOUND")
        
    except Exception as e:
        print(f"Error loading encoder: {e}")

if __name__ == "__main__":
    check_location_encoder() 