"use client";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAwdlG3NvgU-Rnl085H10__l2Kwjh1Ra9k");

export default function GeminiChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [responseText, setResponseText] = useState("");

  async function handleSendMessage() {
    const inputElement = document.getElementById("chat");
    const message = inputElement.value.trim();

    if (message === "") {
      return;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = await response.text();

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", message },
      { role: "model", message: text },
    ]);
    setResponseText(text);

    inputElement.value = "";
  }

  return (
    <div>
      <div id="chatContainer">
        {chatHistory.map((message, index) => (
          <p key={index} className={message.role}>
            {message.message}
          </p>
        ))}
      </div>
      <input type="text" id="chat" />
      <button id="send" onClick={handleSendMessage}>
        Send
      </button>
      <h1>{responseText}</h1>
    </div>
  );
}
