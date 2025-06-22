# 🚀 Fraud Detection Application

A modern full-stack web application for detecting fraudulent transactions using machine learning. Built with React (frontend) and FastAPI (backend).

![Fraud Detection App](https://img.shields.io/badge/Status-Production%20Ready-green)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![React](https://img.shields.io/badge/React-18+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-green)

## 🎯 Overview

This application provides a comprehensive solution for fraud detection in financial transactions. It features a machine learning model trained on synthetic transaction data and provides an intuitive web interface for users to upload transaction data and receive real-time fraud predictions.

## ✨ Key Features

- 🔍 **Real-time Fraud Detection**: Instant analysis of transaction data
- 🤖 **Machine Learning Powered**: Pre-trained Random Forest classifier
- 📊 **Interactive Dashboard**: Visualize transaction data and results(to be implemented)
- 🎨 **Modern UI/UX**: Responsive design with dark/light theme support
- 📱 **Mobile Friendly**: Works seamlessly on all devices
- 🔒 **Secure API**: RESTful API with proper validation
- 📈 **Scalable Architecture**: Separate frontend and backend services

## 🏗️ Architecture

```
┌─────────────────┐    HTTP/JSON    ┌─────────────────┐
│   React Frontend │ ◄─────────────► │  FastAPI Backend │
│   (Port 5173)    │                 │   (Port 8000)    │
└─────────────────┘                 └─────────────────┘
                                              │
                                              ▼
                                    ┌─────────────────┐
                                    │  ML Model Files │
                                    │  (Pickle Files) │
                                    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.8 or higher)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd HackFest
   ```

2. **Set up the backend**
   ```bash
   cd backend
   python -m venv venv
   
   # Activate virtual environment
   # Windows:
   venv\Scripts\activate
   # macOS/Linux:
   source venv/bin/activate
   
   pip install -r requirements.txt
   python models/train_model.py
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Run the application**
   ```bash
   # Terminal 1 - Backend (from backend directory)
   python main.py
   
   # Terminal 2 - Frontend (from frontend directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## 📁 Project Structure

```
HackFest/
├── 📁 backend/                 # FastAPI backend
│   ├── 📁 api/                # API routes and schemas
│   ├── 📁 data/               # ML model files
│   ├── 📁 models/             # ML model logic
│   ├── main.py               # FastAPI app entry point
│   └── requirements.txt      # Python dependencies
├── 📁 frontend/              # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/    # React components
│   │   ├── 📁 pages/         # Page components
│   │   ├── 📁 services/      # API services
│   │   └── 📁 theme/         # UI theme config
│   ├── package.json          # Node.js dependencies
│   └── vite.config.ts        # Vite configuration
└── README.md                 # This file
```

## 🔧 Technology Stack

### Backend
- **FastAPI** - Modern Python web framework
- **Scikit-learn** - Machine learning library
- **Pandas** - Data manipulation
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Component library
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/predict` | Predict fraud for transaction data |
| `GET` | `/explain/{id}` | Get explanation for prediction |
| `GET` | `/health` | Health check endpoint |

## 🎨 UI Components

The application includes several custom components:
- **Dashboard** - Main transaction analysis interface(to be implemented)
- **Pricing Page** - Subscription plans with animations
- **Navigation** - Responsive navigation bar
- **Theme Switcher** - Dark/light mode toggle
- **Transaction Form** - Data input interface

## 🔒 Security Features

- Input validation using Pydantic models
- CORS configuration for cross-origin requests
- Secure file handling for model loading
- Error handling and logging

## 📊 Machine Learning Model

- **Algorithm**:  LightBGM
- **Features**: 10 synthetic transaction features
- **Training Data**: Generated synthetic dataset
- **Model Files**: Stored as pickle files for easy loading

## 🚀 Deployment

The application can be deployed to various platforms:

### Vercel (Recommended)
- Frontend: Automatic deployment from GitHub
- Backend: Serverless functions with Vercel

### Docker
```bash
# Build and run with Docker Compose
docker-compose up --build
```

### Manual Deployment
- Frontend: Build with `npm run build`
- Backend: Deploy to any Python hosting service

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request







