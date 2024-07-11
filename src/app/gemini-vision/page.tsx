"use client";
import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI("AIzaSyAwdlG3NvgU-Rnl085H10__l2Kwjh1Ra9k");

function filesToGenerativeParts(files) {
  const filePromises = Array.from(files).map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve({
          inlineData: {
            data: reader.result.split(",")[1],
            mimeType: file.type,
          },
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  });

  return Promise.all(filePromises);
}

export default function GeminiPro() {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [prompt, setPrompt] = useState("");

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    setFiles(fileList);
  };

  const handlePromptChange = (event) => {
    const newPrompt = event.target.value;
    setPrompt(newPrompt);
  };

  const handleButtonClick = async () => {
    if (files.length === 0) {
      console.error("No files selected.");
      return;
    }

    const imageParts = await filesToGenerativeParts(files);

    const model = await genAI.getGenerativeModel({
      model: "gemini-pro-vision",
    });

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const generatedText = response.text();
    console.log(generatedText);
    setText(generatedText);
  };

  return (
    <div>
      <input type="file" id="file-input" multiple onChange={handleFileChange} />
      <input
        type="text"
        id="prompt"
        value={prompt}
        onChange={handlePromptChange}
      />
      <button onClick={handleButtonClick}>Submit</button>
      <h1>{text}</h1>
    </div>
  );
}
