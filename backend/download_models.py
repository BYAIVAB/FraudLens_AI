#!/usr/bin/env python3
"""
Script to download the LightGBM model and location encoder from the FraudLens-XAI GitHub repository.
"""

import os
import urllib.request
import sys

def download_file(url, filename):
    """Download a file from URL to filename."""
    try:
        print(f"Downloading {filename}...")
        urllib.request.urlretrieve(url, filename)
        print(f"Successfully downloaded {filename}")
        return True
    except Exception as e:
        print(f"Error downloading {filename}: {e}")
        return False

def main():
    """Download the model files from GitHub."""
    
    # Create models_data directory if it doesn't exist
    os.makedirs('models_data', exist_ok=True)
    
    # GitHub repository URLs
    base_url = "https://github.com/sourize/FraudLens-XAI/raw/main/"
    files_to_download = [
        ("lightgbm_model.pkl", "models_data/lightgbm_model.pkl"),
        ("customer_loc.pkl", "models_data/customer_loc.pkl")
    ]
    
    print("Downloading model files from FraudLens-XAI GitHub repository...")
    print("=" * 60)
    
    success_count = 0
    for filename, local_path in files_to_download:
        url = base_url + filename
        if download_file(url, local_path):
            success_count += 1
    
    print("=" * 60)
    if success_count == len(files_to_download):
        print("✅ All model files downloaded successfully!")
        print("\nFiles downloaded:")
        for _, local_path in files_to_download:
            print(f"  - {local_path}")
        print("\nYou can now run the backend with the real model!")
    else:
        print(f"❌ Only {success_count}/{len(files_to_download)} files downloaded successfully.")
        print("Please check the errors above and try again.")
        sys.exit(1)

if __name__ == "__main__":
    main() 