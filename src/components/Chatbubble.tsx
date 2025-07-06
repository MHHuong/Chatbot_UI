import React from "react";

interface ChatbubbleProps {
  message: string;
  isUser?: boolean;
}

const Chatbubble: React.FC<ChatbubbleProps> = ({ message, isUser = false }) => {
  return (
    <div className={`chat ${isUser ? "chat-end" : "chat-start"}`}>
      <div
        className={`chat-bubble ${
          isUser ? "chat-bubble-primary" : "chat-bubble-accent"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default Chatbubble;
