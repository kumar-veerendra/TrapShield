<div align="center">

# 🛡️ TrapShield

**AI-powered phishing detection for URLs, SMS, and Emails**

![License](https://img.shields.io/badge/license-Educational-blue.svg)
![Python](https://img.shields.io/badge/Python-3.10+-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-brightgreen.svg)
![React](https://img.shields.io/badge/React-Vite-61DAFB.svg)

> *"Protecting users from phishing attacks using AI and Machine Learning."*

</div>

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
  - [Frontend Setup](#-frontend-setup)
  - [Backend Setup](#️-backend-setup)
  - [ML Service Setup](#-ml-service-setup)
- [API Reference](#-api-reference)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Team](#-team)

---

## ✨ Features

- 🔗 **URL Phishing Detection** — Identify malicious links in real-time
- 💬 **SMS Scam Detection** — Flag suspicious text messages
- 📧 **Email Phishing Detection** — Analyze email content for threats
- 🤖 **ML-Based Detection** — Powered by trained Scikit-learn models
- 📊 **Confidence Scoring** — Get prediction confidence percentages
- 🧠 **Reason Explanation** — Understand why content was flagged
- ⚡ **Modern Stack** — React frontend + Node.js backend + Flask ML service

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **ML Service** | Python, Flask, Scikit-learn, NLTK, Pandas, NumPy |
| **Database** | MongoDB *(optional)* |

---

## 📁 Project Structure

```
TrapShield/                                 # Main Project Folder
│
├── frontend/                               # React Frontend
│   ├── public/                             # Static files
│   └── src/                               # Main React source code
│       ├── assets/                         # Images, icons, logos
│       ├── components/                     # Reusable UI components
│       │   ├── Navbar.jsx
│       │   ├── ResultCard.jsx
│       │   └── Loader.jsx
│       ├── pages/                          # Main pages
│       │   ├── Home.jsx
│       │   ├── UrlCheck.jsx
│       │   ├── SmsCheck.jsx
│       │   └── EmailCheck.jsx
│       ├── services/                       # API calling functions
│       │   └── api.js
│       ├── utils/                          # Helper functions
│       ├── App.jsx                         # Main App component
│       └── main.jsx                        # React entry point
│   ├── .env                                # Frontend environment variables
│   ├── package.json                        # Frontend dependencies
│   └── vite.config.js                      # Vite configuration
│
├── backend/                                # Node.js Backend
│   ├── controllers/                        # Request handling logic
│   │   ├── urlController.js
│   │   ├── smsController.js
│   │   └── emailController.js
│   ├── routes/                             # API routes
│   │   ├── urlRoutes.js
│   │   ├── smsRoutes.js
│   │   └── emailRoutes.js
│   ├── services/                           # External service communication
│   │   └── mlService.js                    # Calls ML Flask API
│   ├── middlewares/                        # Custom middleware
│   ├── utils/                              # Helper utilities
│   ├── uploads/                            # Uploaded files (if needed)
│   ├── .env                                # Backend environment variables
│   ├── app.js                              # Express app config
│   ├── server.js                           # Backend entry point
│   └── package.json                        # Backend dependencies
│
├── ml-service/                             # Python ML Service
│   ├── venv/                               # Shared virtual environment
│   ├── api/                                # Flask API
│   │   └── app.py                          # Main Flask server
│   ├── url-model/                          # URL phishing model
│   │   ├── features.py                     # URL feature extraction
│   │   ├── train.py                        # Train URL model
│   │   ├── predict.py                      # Prediction logic
│   │   ├── model.pkl                       # Trained model
│   │   └── vectorizer.pkl                  # Saved vectorizer
│   ├── sms-model/                          # SMS phishing model
│   │   ├── features.py
│   │   ├── train.py
│   │   ├── predict.py
│   │   ├── model.pkl
│   │   └── vectorizer.pkl
│   ├── email-model/                        # Email phishing model
│   │   ├── features.py
│   │   ├── train.py
│   │   ├── predict.py
│   │   ├── model.pkl
│   │   └── vectorizer.pkl
│   ├── requirements.txt                    # Python dependencies
│   ├── .env                                # ML environment variables
│   └── README.md                           # ML documentation
│
├── datasets/                               # Central datasets
│   ├── url/                                # URL datasets
│   ├── sms/                                # SMS datasets
│   └── email/                              # Email datasets
│
├── docs/                                   # Project documentation
│   ├── architecture/                       # Architecture diagrams
│   ├── screenshots/                        # UI screenshots
│   ├── report/                             # Project report
│   └── ppt/                                # Presentation
│
├── .gitignore                              # Ignore unnecessary files
├── README.md                               # Main project documentation
└── package.json                            # Optional root package file
```

---

## ⚙️ Prerequisites

Make sure the following are installed on your machine:

- [Node.js](https://nodejs.org/) (v18+)
- [Python](https://www.python.org/) (3.10+)
- [Git](https://git-scm.com/)

---

## 📥 Installation

### Clone the Repository

```bash
git clone <your-github-repo-link>
cd TrapShield
```

---

### 🎨 Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Install Tailwind CSS
npm install tailwindcss @tailwindcss/vite

# Start development server
npm run dev
```

> Frontend runs on **http://localhost:5173**

---

### ⚙️ Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Install required packages
npm install express cors dotenv axios multer

# Install nodemon (dev only)
npm install -D nodemon

# Start development server
npm run dev
# OR
node server.js
```

> Backend runs on **http://localhost:5000**

---

### 🤖 ML Service Setup

```bash
cd ml-service
```

**Create a virtual environment:**

```bash
# Windows
python -m venv venv

# Mac/Linux
python3 -m venv venv
```

**Activate the virtual environment:**

```bash
# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate
```

**Install Python dependencies:**

```bash
pip install flask pandas numpy scikit-learn nltk joblib

# Save dependencies
pip freeze > requirements.txt
```

**Start the Flask server:**

```bash
cd api
python app.py
```

> ML Service runs on **http://localhost:8000**

---

## 📡 API Reference

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/predict/url` | Detect phishing in a URL |
| `POST` | `/predict/sms` | Detect scam in an SMS message |
| `POST` | `/predict/email` | Detect phishing in an email |

### Example Request

```json
{
  "text": "Congratulations! You won a free iPhone. Click here to claim."
}
```

### Example Response

```json
{
  "prediction": "Phishing",
  "confidence": 96.4,
  "reasons": [
    "Suspicious keywords detected",
    "Urgent language found"
  ]
}
```

---

## 🔒 Environment Variables

**Frontend** — `frontend/.env`
```env
VITE_BACKEND_URL=http://localhost:5000
```

**Backend** — `backend/.env`
```env
PORT=5000
ML_SERVICE_URL=http://localhost:8000
```

**ML Service** — `ml-service/.env`
```env
PORT=8000
```

---

## 🚀 Deployment

| Service | Platform |
|---------|----------|
| Frontend | [Vercel](https://vercel.com) |
| Backend | [Render](https://render.com) |
| ML Service | [Render](https://render.com) / [Railway](https://railway.app) |

---

## 🧠 Model Workflow

```
Dataset
   ↓
Feature Extraction
   ↓
Model Training
   ↓
Save Model (.pkl)
   ↓
Prediction API
```

---

## 🚫 .gitignore

```gitignore
# Node
node_modules/

# Python
venv/
__pycache__/
*.pyc

# Environment
.env

# Build
dist/
build/

# OS
.DS_Store
```

---

## 🔮 Future Improvements

- [ ] Browser Extension for real-time detection
- [ ] Deep Learning models (BERT, LSTM)
- [ ] AI explanation system (explainable AI)
- [ ] User authentication & detection history
- [ ] Dashboard analytics & threat reports
- [ ] Real-time threat intelligence feeds

---

## 👥 Team

| Member |
|--------|
| Veerendra Kumar |
| Nayan Kumar |
| Ujjwal Kumar Singh |
| Om Shankar Madhwan |
| Shreysi Bharati |

---

## 📄 License

This project is for **educational purposes** only.

---

<div align="center">
Made with ❤️ by the TrapShield Team
</div>
