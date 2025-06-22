#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt

# Train the model if it doesn't exist
python models/train_model.py 