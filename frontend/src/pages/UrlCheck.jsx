import { useState } from "react";
import API from "../services/api";

function UrlCheck() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const response = await API.post("/url", { url });

    setResult(response.data);
  };

  return (
    <div>
      <h1>URL Phishing Detection</h1>

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={handleCheck}>
        Check
      </button>

      {result && (
        <div>
          <h2>{result.prediction}</h2>
          <p>Confidence: {result.confidence}%</p>
        </div>
      )}
    </div>
  );
}

export default UrlCheck;