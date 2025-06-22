from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import router as api_router
import os
import uvicorn

app = FastAPI(title="Fraud Detection API")

# Get environment variables
ENVIRONMENT = os.environ.get("ENVIRONMENT", "development")
CORS_ORIGINS = os.environ.get("CORS_ORIGINS", "*")

# Parse CORS origins if provided
if CORS_ORIGINS != "*":
    origins = [origin.strip() for origin in CORS_ORIGINS.split(",")]
else:
    origins = ["*"]

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes with /api prefix
app.include_router(api_router, prefix="/api")

@app.get("/", summary="Root endpoint to check API status")
def read_root():
    return {
        "status": "API is running",
        "environment": ENVIRONMENT,
        "message": "Fraud Detection API is operational"
    }

if __name__ == "__main__":
    # Get port from environment variable (for Render) or default to 8000
    port = int(os.environ.get("PORT", 8000))
    
    # Run the application
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port,
        reload=(ENVIRONMENT == "development")  # Only reload in development
    ) 

