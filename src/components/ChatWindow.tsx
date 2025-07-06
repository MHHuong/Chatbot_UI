import React, { useState, useRef, useEffect } from "react";
import Chatbubble from "./Chatbubble";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = () => {
    if (message.trim() === "") return;
    const newMessage: Message = { text: message, isUser: true };
    setMessages([...messages, newMessage]);
    setMessage("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Tin30cm " + message, isUser: false },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-4xl mx-auto p-4">
      <div
        className="flex-1 overflow-y-auto space-y-2 p-2 bg-base-200 rounded-xl"
        ref={containerRef}
      >
        {messages.map((msg, idx) => (
          <Chatbubble key={idx} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>

      <div className="mt-4 relative">
        <textarea
          ref={textareaRef}
          className="textarea textarea-bordered w-full pr-16 resize-none overflow-hidden rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Nhập tin nhắn..."
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSubmit}
          className="btn btn-primary absolute bottom-2 right-2"
        >
          Gửi
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
