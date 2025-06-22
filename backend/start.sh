#!/usr/bin/env bash
# exit on error
set -o errexit

# Get the port from Render environment variable
PORT=$PORT

# Start the FastAPI application
uvicorn main:app --host 0.0.0.0 --port $PORT 