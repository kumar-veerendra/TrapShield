from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/predict/url", methods=["POST"])
def predict_url():
    data = request.json

    return jsonify({
        "prediction": "Phishing",
        "confidence": 92
    })

@app.route("/predict/sms", methods=["POST"])
def predict_sms():
    return jsonify({
        "prediction": "Safe",
        "confidence": 88
    })

@app.route("/predict/email", methods=["POST"])
def predict_email():
    return jsonify({
        "prediction": "Phishing",
        "confidence": 95
    })

if __name__ == "__main__":
    app.run(port=8000, debug=True)