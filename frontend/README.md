# FraudLens AI Frontend

A modern React frontend for the FraudLens AI application, providing real-time fraud detection using a production-grade LightGBM model.

---

## 🚀 Features
- **Real-time Fraud Detection**: Submit transaction data and get instant predictions
- **Production Model**: Uses a real LightGBM model (see backend setup)
- **City-based Location**: Enter city names for customer location (e.g., "Aaronberg")
- **Modern UI**: Responsive, dark/light theme, beautiful UX
- **Proxy Support**: All `/api` calls are proxied to the backend

---

## 🛠️ Prerequisites
- **Node.js** (v18 or higher)
- **Backend**: See backend/README.md for setup (Python 3.8+, model download required)

---

## ⚡ Quick Start

### 1. Backend Setup (Required)
- Follow the instructions in `../backend/README.md` or the project root `README.md`:
  - Install Python dependencies
  - Run `python download_models.py` to fetch the real LightGBM model and encoder
  - Start the backend: `python main.py` (runs on port 8000)

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
- The frontend will run on `http://localhost:8080` (or `8081` if 8080 is busy)
- All API calls to `/api` are automatically proxied to the backend (see `vite.config.ts`)

---

## 🌐 API Proxy
- The Vite dev server is configured to proxy `/api` requests to the backend (`http://localhost:8000`)
- No CORS issues in development
- **Do not** hardcode backend URLs—use `/api` in your code

---

## 📝 Usage Notes
- **Customer Location**: Enter a city name (e.g., "Aaronberg", "Aaronborough", etc.)
- **Favicon 404**: If you see a 404 for `/favicon.ico`, it's harmless. Add a `favicon.ico` to `public/` to remove the warning.
- **Port in use**: If 8080 is busy, Vite will use 8081. The proxy will still work.

---

## 🧩 Project Structure
```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── theme/
├── public/
├── vite.config.ts   # Proxy config for /api
├── package.json
└── README.md
```

---

## 🔧 Troubleshooting
- **404 on /predict**: Make sure the backend is running and you are POSTing to `/api/predict`.
- **CORS errors**: The proxy handles CORS. If you see CORS errors, check your proxy config and backend status.
- **Model not found**: Run `python download_models.py` in the backend directory.
- **Frontend not updating**: Restart the dev server after changing `vite.config.ts`.

---

## 📚 Documentation
- **Integration details**: See [`../INTEGRATION_COMPLETE.md`](../INTEGRATION_COMPLETE.md)
- **Backend setup**: See [`../backend/README.md`](../backend/README.md)
- **API docs**: http://localhost:8000/docs

---

## 🎉 Enjoy using FraudLens AI!

