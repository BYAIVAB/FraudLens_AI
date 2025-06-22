# Fraud Detection Application

A full-stack web application for detecting fraudulent transactions using machine learning. Built with React (frontend) and FastAPI (backend).

## 🚀 Features

- **Real-time Fraud Detection**: Upload transaction data and get instant fraud predictions
- **Machine Learning Model**: Pre-trained Random Forest classifier for transaction analysis
- **Interactive Dashboard**: Visualize transaction data and prediction results(to be implemented)
- **Responsive Design**: Modern UI that works on desktop and mobile devices
- **Dark/Light Theme**: Toggle between different color schemes

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download here](https://python.org/)
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd HackFest
```

### 2. Backend Setup

Navigate to the backend directory and set up the Python environment:

```bash
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Train the machine learning model (if not already trained)
python models/train_model.py
```

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend

# Install Node.js dependencies
npm install
```

## 🚀 Running the Application

### Start the Backend Server

In the backend directory (with virtual environment activated):

```bash
# Make sure you're in the backend directory
cd backend

# Activate virtual environment (if not already activated)
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Start the FastAPI server
python main.py
```

The backend server will start on `http://localhost:8000`

### Start the Frontend Development Server

In a new terminal, navigate to the frontend directory:

```bash
cd frontend

# Start the development server
npm run dev
```

The frontend application will start on `http://localhost:5173`

## 📁 Project Structure

```
HackFest/
├── backend/
│   ├── api/
│   │   ├── routes.py          # API endpoints
│   │   └── schemas.py         # Pydantic models
│   ├── data/                  # Model files and data
│   ├── models/
│   │   ├── predictor.py       # Prediction logic
│   │   └── train_model.py     # Model training script
│   ├── main.py               # FastAPI application entry point
│   └── requirements.txt      # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service functions
│   │   └── theme/           # Theme configuration
│   ├── package.json         # Node.js dependencies
│   └── vite.config.ts       # Vite configuration
└── README.md
```

## 🔧 Available Scripts

### Backend Scripts

- `python main.py` - Start the FastAPI development server
- `python models/train_model.py` - Train the machine learning model
-`uvicorn main:app --reload --port 8000`- Start the FastAPI development server

### Frontend Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🌐 API Endpoints

The backend provides the following API endpoints:

- `POST /predict` - Predict fraud for transaction data
- `GET /explain/{transaction_id}` - Get explanation for a prediction
- `GET /health` - Health check endpoint

## 🎨 Customization

### Adding New Features

1. **Backend**: Add new endpoints in `backend/api/routes.py`
2. **Frontend**: Create new components in `frontend/src/components/`
3. **Styling**: Modify theme in `frontend/src/theme/`

### Modifying the ML Model

1. Update the training script in `backend/models/train_model.py`
2. Retrain the model: `python models/train_model.py`
3. The new model will be automatically used by the predictor

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `main.py` or kill the process using the port
2. **Module not found**: Make sure all dependencies are installed and virtual environment is activated
3. **CORS errors**: Check that the frontend is making requests to the correct backend URL

### Getting Help

If you encounter any issues:

1. Check that all prerequisites are installed correctly
2. Ensure virtual environment is activated for backend
3. Verify all dependencies are installed
4. Check the console for error messages

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

