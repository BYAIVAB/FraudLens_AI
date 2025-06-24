# 🚀 FraudLens AI - Real Model Integration

A modern full-stack web application for detecting fraudulent transactions using machine learning. Built with React (frontend) and FastAPI (backend).

![Fraud Detection App](https://img.shields.io/badge/Status-Production%20Ready-green)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![React](https://img.shields.io/badge/React-18+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-green)

---

## 🎯 Overview

FraudLens AI now uses a **real LightGBM model** (from [FraudLens-XAI](https://github.com/sourize/FraudLens-XAI.git)) for production-grade fraud detection. The backend expects **city names** (not country codes) for the `customer_location` field.

- **City-based location encoding**: 99,135 supported cities
- **Production-ready LightGBM model**: Downloaded automatically
- **Easy setup**: One command to fetch model files

---

## ✨ Key Features
- 🔎 **Real-time Fraud Detection**: Instant analysis of transaction data
- 🤖 **LightGBM Model**: Real, production-grade model
- 🏙️ **City-based Location**: Use city names for location encoding
- 📊 **Probability Scores**: Risk assessment for each transaction
- 🎨 **Modern UI/UX**: Responsive, dark/light theme
- 🔒 **Secure API**: RESTful, CORS-enabled, proxy support

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **Python** (v3.8 or higher)
- **Git**

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd FraudLens_AI
```

### 2. Backend Setup
```bash
cd backend
python -m venv venv
# Activate venv (Windows: venv\Scripts\activate, macOS/Linux: source venv/bin/activate)
pip install -r requirements.txt
# Download the real LightGBM model and encoder
ython download_models.py
# Start the backend
python main.py
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

- The frontend will run on `http://localhost:8080` (or `8081` if 8080 is busy)
- The backend will run on `http://localhost:8000`

---

## 🏗️ Architecture

```
Frontend (React, Vite, Port 8080/8081) --/api--> Vite Proxy --> Backend (FastAPI, Port 8000) --> LightGBM Model
```
- All API calls use `/api` prefix and are proxied to the backend
- **Location field**: Use city names (e.g., "Aaronberg", "Aaronborough", ...)

---

## 🛠️ Troubleshooting

- **404 on /predict**: Make sure you POST to `/api/predict`, not `/predict`.
- **CORS errors**: The Vite proxy (see `frontend/vite.config.ts`) routes `/api` to the backend, avoiding CORS issues.
- **Port in use**: If 8080 is busy, Vite will use 8081. The proxy will still work.
- **Favicon 404**: This is harmless. Add a `favicon.ico` to `frontend/public/` to remove the warning.
- **Model not found**: Run `python download_models.py` in the backend directory.

---

## 📚 Documentation
- **Integration details**: See [`INTEGRATION_COMPLETE.md`](./INTEGRATION_COMPLETE.md)
- **Backend API docs**: http://localhost:8000/docs
- **Frontend usage**: See `frontend/README.md`

---

## 🧩 Project Structure

```
FraudLens_AI/
├── backend/
│   ├── api/
│   ├── models/
│   ├── models_data/         # Real model files (auto-downloaded)
│   ├── main.py
│   ├── download_models.py   # Download script for model files
│   └── requirements.txt
├── frontend/
│   ├── src/
│   ├── public/
│   ├── vite.config.ts       # Proxy config for /api
│   └── package.json
├── INTEGRATION_COMPLETE.md  # Full integration summary
└── README.md
```

---

## 🐙 GitHub Workflow

### 1. Fork the Repository
- Click the **Fork** button at the top right of the [GitHub repo](https://github.com/sourize/FraudLens_AI.git) page.

### 2. Clone Your Fork
```bash
git clone https://github.com/<your-username>/FraudLens_AI.git
cd FraudLens_AI
```

### 3. Set Up Remotes
```bash
git remote add upstream https://github.com/sourize/FraudLens_AI.git
```

### 4. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 5. Make Your Changes
- Follow the setup instructions in the README to run the backend and frontend locally.
- Make your code or documentation changes.

### 6. Commit and Push
```bash
git add .
git commit -m "Describe your changes"
git push origin feature/your-feature-name
```

### 7. Open a Pull Request
- Go to your fork on GitHub.
- Click **Compare & pull request**.
- Fill in the PR template and submit.

### 8. Sync with Upstream (Optional)
To keep your fork up to date:
```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

## 🎉 Congratulations!

FraudLens AI is now running with a **real, production-ready LightGBM model**. For full details, see [`INTEGRATION_COMPLETE.md`](./INTEGRATION_COMPLETE.md).







