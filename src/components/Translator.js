import React, { useState } from "react";
import axios from "axios";

function Translator() {
  // State variables to manage language selection, input text, and translated content
  const [sourceLanguage, setSourceLanguage] = useState("en"); // Default source language: English
  const [targetLanguage, setTargetLanguage] = useState("fr"); // Default target language: French
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  // Function to handle language selection change
  const handleLanguageChange = (event) => {
    const { name, value } = event.target;
    if (name === "sourceLanguage") {
      setSourceLanguage(value);
    } else if (name === "targetLanguage") {
      setTargetLanguage(value);
    }
  };

  // Function to handle text input change
  const handleTextInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to handle translation
  const handleTranslate = async () => {
    try {
      const response = await axios.post("/translate", {
        sourceLanguage,
        targetLanguage,
        text: inputText,
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <div className="translator-container">
      {/* Language selection */}
      <div className="language-selection">
        <label htmlFor="sourceLanguage">Source Language:</label>
        <select
          id="sourceLanguage"
          name="sourceLanguage"
          value={sourceLanguage}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          {/* Add other supported languages */}
        </select>
        <label htmlFor="targetLanguage">Target Language:</label>
        <select
          id="targetLanguage"
          name="targetLanguage"
          value={targetLanguage}
          onChange={handleLanguageChange}
        >
          <option value="fr">French</option>
          {/* Add other supported languages */}
        </select>
      </div>

      {/* Text input */}
      <textarea
        className="text-input"
        placeholder="Enter text to translate..."
        value={inputText}
        onChange={handleTextInputChange}
      />

      {/* Translate button */}
      <button className="translate-button" onClick={handleTranslate}>
        Translate
      </button>

      {/* Translated content */}
      {translatedText && (
        <div className="translated-content">
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
}

export default Translator;
