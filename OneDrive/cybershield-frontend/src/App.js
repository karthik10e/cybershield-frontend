import React, { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const checkWebsite = (e) => {
    e.preventDefault();

    if (!url.trim()) {
      setResult("Please enter a website URL.");
      return;
    }

    let website = url.trim();

    if (!/^https?:\/\//i.test(website)) {
      website = "https://" + website;
    }

    try {
      const parsedUrl = new URL(website);

      if (
        parsedUrl.protocol !== "https:" &&
        parsedUrl.protocol !== "http:"
      ) {
        setResult("Please enter a valid HTTP or HTTPS website.");
        return;
      }

      setResult(
        "URL format is valid. This does not confirm whether the website is safe."
      );
    } catch {
      setResult("Please enter a valid website URL.");
    }
  };

  return (
    <div className="cyber-app">
      <header className="navbar">
        <h2>🛡 Cyber Shield</h2>
        <span>Website Security Checker</span>
      </header>

      <main className="main-content">
        <div className="shield-icon">🛡️</div>
        <h1>Protect Yourself Online</h1>
        <p className="subtitle">
          Check a website URL's format before visiting it.
        </p>

        <form className="url-form" onSubmit={checkWebsite}>
          <label htmlFor="website">Enter website URL</label>
          <input
            id="website"
            type="text"
            placeholder="example.com"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setResult("");
            }}
          />
          <button type="submit">Check URL</button>
        </form>

        {result && (
          <div className="result" role="status">
            {result}
          </div>
        )}

        <section className="features">
          <div className="feature-card">
            <h3>🔐 Online Safety</h3>
            <p>Learn to identify suspicious website links.</p>
          </div>
          <div className="feature-card">
            <h3>🌐 URL Validation</h3>
            <p>Check whether a URL follows a valid format.</p>
          </div>
          <div className="feature-card">
            <h3>🛡️ Cyber Awareness</h3>
            <p>Think before clicking unfamiliar links.</p>
          </div>
        </section>

        <p className="disclaimer">
          Note: This demo checks URL formatting only. It does not detect
          phishing, malware, or guarantee website safety.
        </p>
      </main>
    </div>
  );
}

export default App;
