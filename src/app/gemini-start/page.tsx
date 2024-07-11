import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export default function GeminiStart() {
  const [text, setText] = useState("");

  useEffect(() => {
    async function run() {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt =
        "Write a sonnet about a programmer's life, but also make it rhyme.";

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const generatedText = response.text();
      console.log(generatedText);
      setText(generatedText);
    }

    run();
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
