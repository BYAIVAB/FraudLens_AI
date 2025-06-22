#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt

# Only train the model if it doesn't exist
if [ ! -f "data/fraud_detection_model.pkl" ]; then
    echo "Training machine learning model..."
    python models/train_model.py
else
    echo "Model already exists, skipping training..."
fi 