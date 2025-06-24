# FraudLens AI Backend

This is the backend for the FraudLens AI application. It provides a FastAPI-based REST API for real-time fraud detection using a production-grade LightGBM model.

---

## 🚀 Features
- **Real LightGBM Model**: Downloaded from [FraudLens-XAI GitHub](https://github.com/sourize/FraudLens-XAI.git)
- **City-based Location Encoding**: Supports 99,135 cities
- **Easy Model Download**: One command to fetch model and encoder
- **Test/Demo Model**: Option to train a dummy model for testing
- **API Endpoints**: `/api/predict`, `/api/explain/{id}`

---

## ⚡ Quick Start

### 1. Prerequisites
- **Python 3.8+**
- **pip**

### 2. Install Dependencies
```bash
cd backend
python -m venv venv
# Activate venv (Windows: venv\Scripts\activate, macOS/Linux: source venv/bin/activate)
pip install -r requirements.txt
```

### 3. Download the Real Model and Encoder
This will fetch the production LightGBM model and city encoder from the official GitHub repo:
```bash
python download_models.py
```
- Downloads `models_data/lightgbm_model.pkl` and `models_data/customer_loc.pkl`

### 4. Start the Backend Server
```bash
python main.py
```
- Runs on `http://localhost:8000`
- API docs at `http://localhost:8000/docs`

---

## 🧪 (Optional) Train a Dummy Model for Testing
If you want to test the pipeline with a synthetic model (not for production):
```bash
python models/train_model.py
```
- Saves a dummy model and encoder in `data/`
- **Note:** The real model in `models_data/` is used by default for predictions

---

## 🧩 Project Structure
```
backend/
├── api/
│   ├── routes.py
│   └── schemas.py
├── models/
│   ├── predictor.py
│   └── train_model.py
├── models_data/           # Real model files (auto-downloaded)
│   ├── lightgbm_model.pkl
│   └── customer_loc.pkl
├── download_models.py     # Script to fetch model files from GitHub
├── main.py                # FastAPI app entry point
├── requirements.txt
└── README.md
```

---

## 🔗 How Model Import Works
- The script `download_models.py` downloads the latest production model and encoder from [FraudLens-XAI GitHub](https://github.com/sourize/FraudLens-XAI.git).
- These files are loaded by `models/predictor.py` for all predictions.
- The model expects **city names** for the `customer_location` field.
- If you want to update the model, replace the files in `models_data/`.

---

## 🧪 Testing the Model
- Use `test_model.py` to run sample predictions and verify the setup:
```bash
python test_model.py
```
- You can also use the `/api/predict` endpoint via Swagger UI at `http://localhost:8000/docs`.

---

## 🐙 Upload Backend as a New GitHub Repository

1. **Create a new repo on GitHub** ([github.com/new](https://github.com/new))
2. **Initialize git (if needed):**
   ```bash
   git init
   ```
3. **Add all files and commit:**
   ```bash
   git add .
   git commit -m "Initial commit: Upload FraudLens AI backend"
   ```
4. **Add your new GitHub remote:**
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   ```
5. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

---

## 🛠️ Troubleshooting
- **Model not found:** Run `python download_models.py` to fetch the model files.
- **CORS errors:** Handled by FastAPI CORS middleware (see `main.py`).
- **404 on /predict:** Make sure you POST to `/api/predict` and not `/predict`.
- **Location encoding errors:** Use valid city names (see sample locations in API response).

---

## 📚 More Info
- **Integration details:** See `../INTEGRATION_COMPLETE.md`
- **Frontend setup:** See `../frontend/README.md`
- **API docs:** http://localhost:8000/docs

---

## 🎉 Enjoy using FraudLens AI Backend! 