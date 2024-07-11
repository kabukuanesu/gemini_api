"use client";
import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI("AIzaSyAwdlG3NvgU-Rnl085H10__l2Kwjh1Ra9k");

function fileToGenerativePart(file) {
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
}

export default function GeminiPro() {
  const [text, setText] = useState("");

  const handleButtonClick = async () => {
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (!file) {
      console.error("No file selected.");
      return;
    }

    const imagePart = await fileToGenerativePart(file);

    const model = await genAI.getGenerativeModel({
      model: "gemini-pro-vision",
    });

    const prompt = "";
    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const generatedText = response.text();
    console.log(generatedText);
    setText(generatedText);
  };

  return (
    <div>
      <input type="file" id="file-input" />
      <button onClick={handleButtonClick}>Submit</button>
      <h1>{text}</h1>
    </div>
  );
}
