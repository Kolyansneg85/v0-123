"use client"

import type React from "react"
import { useEffect, useState } from "react"

const ChatWidgetConfig = {
  webhook: {
    url: "https://n8n.getsync.ru/webhook/8bcaf948-ac52-4b24-860d-69fa70980a29/chat",
    route: "general",
  },
  style: {
    primaryColor: "#dcc397",
    secondaryColor: "#c7af84",
    position: "right",
    backgroundColor: "#ffffff",
    fontColor: "#333333",
  },
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Здравствуйте ✨ Я располагаю всеми данными об этом доме в режиме онлайн. Какой у Вас вопрос?",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Функция для генерации или получения уникального ID чата
  const getChatId = () => {
    let chatId = sessionStorage.getItem("chatId")
    if (!chatId) {
      chatId = "chat_" + Math.random().toString(36).substr(2, 9)
      sessionStorage.setItem("chatId", chatId)
    }
    return chatId
  }

  // Автоматическое изменение размера текстового поля
  const autoResizeTextarea = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = "auto"
    const newHeight = Math.min(textarea.scrollHeight, 120)
    textarea.style.height = newHeight + "px"
  }

  const sendMessage = async () => {
    if (inputValue.trim() === "") return

    const newMessage = { type: "user", text: inputValue }
    setMessages((prev) => [...prev, newMessage])
    setIsLoading(true)

    const chatId = getChatId()

    try {
      console.log("[v0] Sending request to n8n:", {
        chatId: chatId,
        chatInput: inputValue,
        route: ChatWidgetConfig.webhook.route,
      })

      const response = await fetch(ChatWidgetConfig.webhook.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatId: chatId,
          chatInput: inputValue,
          route: ChatWidgetConfig.webhook.route,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("[v0] Received response from n8n:", data)
      console.log("[v0] Response type:", typeof data)
      console.log("[v0] Response keys:", Object.keys(data))

      let botResponseText = ""

      if (typeof data === "string") {
        botResponseText = data
      } else if (data && typeof data === "object") {
        // Проверяем различные возможные поля ответа
        botResponseText =
          data.message ||
          data.output ||
          data.response ||
          data.result ||
          data.text ||
          data.content ||
          (data.data && data.data.message) ||
          (data.data && data.data.output) ||
          ""
      }

      if (!botResponseText || botResponseText.trim() === "") {
        console.log("[v0] Empty response received, using fallback message")
        botResponseText =
          "Я получил ваше сообщение, но не смог сформировать ответ. Попробуйте переформулировать вопрос."
      }

      const botMessage = { type: "bot", text: botResponseText }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("[v0] Error details:", error)
      const errorMessage = {
        type: "bot",
        text: "Извините, произошла ошибка при обработке вашего сообщения. Попробуйте еще раз.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }

    setInputValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  useEffect(() => {
    if (isOpen) {
      const textarea = document.getElementById("chat-input") as HTMLTextAreaElement
      if (textarea) {
        setTimeout(() => textarea.focus(), 100)
      }
    }
  }, [isOpen])

  return (
    <>
      {/* Декоративные блобы */}
      <div className="chat-widget-wrapper">
        <div className="decorative-blob blob-1"></div>
        <div className="decorative-blob blob-2"></div>
        <div className="decorative-blob blob-3"></div>

        {/* Кнопка чат-виджета */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-5 w-[60px] h-[60px] rounded-full cursor-pointer z-[1001] flex items-center justify-center transition-all duration-300 animate-slowPulse hover:animate-hoverPulse"
            id="chat-widget-button"
            data-chat-widget-button
          >
            <div className="siri-sphere-container">
              <div className="siri-sphere-main">
                <div className="siri-sphere-inner"></div>
                <div className="siri-wave-ring ring-1"></div>
                <div className="siri-wave-ring ring-2"></div>
                <div className="siri-wave-ring ring-3"></div>
              </div>
            </div>
          </button>
        )}

        {/* Окно чат-виджета */}
        {isOpen && (
          <div
            className="fixed bottom-5 right-5 w-[350px] h-[500px] glassmorphism flex flex-col z-[1000]"
            id="chat-widget-container"
          >
            {/* Заголовок */}
            <div className="p-5 font-medium flex justify-between items-center text-base" id="chat-widget-header">
              <span className="text-white flex items-center gap-2">
                <div className="siri-icon-mini">
                  <div className="siri-sphere"></div>
                </div>
                ИИ помощник Коллекционер
              </span>
              <button onClick={() => setIsOpen(false)} className="close-button">
                <i className="bx bx-x text-xl"></i>
              </button>
            </div>

            {/* Тело чата */}
            <div className="flex-1 p-5 overflow-y-auto" id="chat-widget-body">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl mb-4 text-sm break-words shadow-lg ${
                    message.type === "user" ? "user-message ml-auto" : "bot-message"
                  }`}
                >
                  {message.type === "bot" ? <span dangerouslySetInnerHTML={{ __html: message.text }} /> : message.text}
                </div>
              ))}

              {/* Индикатор загрузки */}
              {isLoading && (
                <div className="flex items-center space-x-3 p-4 rounded-2xl mb-4 bot-message shadow-md">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                  <span>Печатает...</span>
                </div>
              )}
            </div>

            {/* Подвал с полем ввода */}
            <div className="p-4 flex gap-3 items-end" id="chat-widget-footer">
              <div className="input-wrapper">
                <textarea
                  id="chat-input"
                  className="expandable-input"
                  placeholder="Введите сообщение..."
                  rows={1}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value)
                    autoResizeTextarea(e.target)
                  }}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <button onClick={sendMessage} className="send-button">
                <i className="bx bxs-send"></i>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Стили для чат-виджета */}
      <style jsx global>{`
        /* Подключение Boxicons */
        @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');

        /* CSS-переменные для светлой и темной темы */
        :root {
          --bg-gradient-start: #f5f7fa;
          --bg-gradient-end: #e4e8f0;
          --glass-border: rgba(255, 255, 255, 0.2);
          --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          --footer-border: rgba(255, 255, 255, 0.1);
          --input-color: #fff;
          --blob-opacity: 0.6;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --bg-gradient-start: #1a1a1a;
            --bg-gradient-end: #2d2d2d;
            --glass-border: rgba(80, 80, 80, 0.2);
            --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
            --footer-border: rgba(80, 80, 80, 0.1);
            --input-color: #fff;
            --blob-opacity: 0.4;
          }
        }

        .chat-widget-wrapper .decorative-blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          z-index: -1;
          opacity: var(--blob-opacity);
          transition: background 0.5s ease, opacity 0.5s ease;
        }

        .chat-widget-wrapper .blob-1 {
          width: 300px;
          height: 300px;
          background: rgba(220, 195, 151, 0.35);
          bottom: -100px;
          right: -50px;
        }

        .chat-widget-wrapper .blob-2 {
          width: 250px;
          height: 250px;
          background: rgba(229, 208, 166, 0.25);
          top: -50px;
          left: -50px;
        }

        .chat-widget-wrapper .blob-3 {
          width: 200px;
          height: 200px;
          background: rgba(160, 139, 93, 0.2);
          top: 40%;
          right: 30%;
        }

        .chat-widget-wrapper .glassmorphism {
          background: rgba(40, 40, 40, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          border-radius: 24px;
          overflow: hidden;
        }

        .chat-widget-wrapper #chat-widget-header {
          background: linear-gradient(135deg, rgba(220, 195, 151, 0.7) 0%, rgba(192, 172, 133, 0.7) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px 24px 0 0;
        }

        .chat-widget-wrapper #chat-widget-body {
          background: rgba(40, 40, 40, 0.2);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: background 0.3s ease;
        }

        .chat-widget-wrapper #chat-widget-footer {
          background: rgba(40, 40, 40, 0.3);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--footer-border);
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .chat-widget-wrapper .user-message {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          word-break: break-word;
          max-width: 85%;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .chat-widget-wrapper .bot-message {
          background: linear-gradient(135deg, rgba(220, 195, 151, 0.5) 0%, rgba(192, 172, 133, 0.5) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(220, 195, 151, 0.2);
          color: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          word-break: break-word;
          max-width: 85%;
        }

        .chat-widget-wrapper #chat-widget-button {
          background: linear-gradient(135deg, rgba(220, 195, 151, 0.75) 0%, rgba(192, 172, 133, 0.75) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 25px -5px rgba(220, 195, 151, 0.5), 0 8px 10px -6px rgba(220, 195, 151, 0.3);
        }

        /* Переработанная многослойная анимация Siri с более тонкими эффектами */
        .chat-widget-wrapper .siri-sphere-container {
          position: relative;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-widget-wrapper .siri-sphere-main {
          position: relative;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 35% 25%, 
            rgba(240, 220, 180, 0.85) 0%,
            rgba(220, 195, 151, 0.7) 25%,
            rgba(200, 175, 130, 0.5) 50%,
            rgba(180, 155, 110, 0.3) 75%,
            rgba(160, 135, 90, 0.15) 100%
          );
          box-shadow: 
            0 0 8px rgba(220, 195, 151, 0.3),
            inset 0 1px 3px rgba(240, 220, 180, 0.4),
            inset 0 -1px 2px rgba(160, 135, 90, 0.1);
          animation: siriSphereFloat 6s ease-in-out infinite;
          filter: blur(0.3px);
        }

        .chat-widget-wrapper .siri-sphere-inner {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 230, 190, 0.6) 0%, rgba(220, 195, 151, 0.4) 100%);
          box-shadow: 0 0 2px rgba(240, 220, 180, 0.3);
          animation: siriInnerGlow 4s ease-in-out infinite alternate;
          filter: blur(0.2px);
        }

        .chat-widget-wrapper .siri-wave-ring {
          position: absolute;
          border: 0.5px solid rgba(220, 195, 151, 0.08);
          border-radius: 50%;
          animation: siriRingPulse 8s ease-in-out infinite;
          opacity: 0;
          filter: blur(0.5px);
        }

        .chat-widget-wrapper .ring-1 {
          width: 22px;
          height: 22px;
          animation-delay: 0s;
          border-color: rgba(220, 195, 151, 0.12);
        }

        .chat-widget-wrapper .ring-2 {
          width: 26px;
          height: 26px;
          animation-delay: -2.5s;
          border-color: rgba(220, 195, 151, 0.08);
        }

        .chat-widget-wrapper .ring-3 {
          width: 30px;
          height: 30px;
          animation-delay: -5s;
          border-color: rgba(220, 195, 151, 0.05);
        }

        .chat-widget-wrapper .siri-icon-mini {
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-widget-wrapper .siri-icon-mini .siri-sphere {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 35% 25%, 
            rgba(240, 220, 180, 0.8) 0%,
            rgba(220, 195, 151, 0.6) 50%,
            rgba(200, 175, 130, 0.3) 100%
          );
          box-shadow: 
            0 0 3px rgba(220, 195, 151, 0.2),
            inset 0 1px 2px rgba(240, 220, 180, 0.3);
          animation: siriMiniPulse 5s ease-in-out infinite;
          filter: blur(0.2px);
        }

        .chat-widget-wrapper .close-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .chat-widget-wrapper .close-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: rotate(90deg);
        }

        .chat-widget-wrapper .input-wrapper {
          position: relative;
          display: flex;
          flex: 1;
          max-height: 120px;
          overflow: hidden;
          border-radius: 18px;
          background: rgba(60, 60, 60, 0.3);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .chat-widget-wrapper .input-wrapper:focus-within {
          border-color: rgba(220, 195, 151, 0.4);
          box-shadow: 0 0 0 2px rgba(220, 195, 151, 0.15);
        }

        .chat-widget-wrapper .expandable-input {
          width: 100%;
          min-height: 40px;
          max-height: 120px;
          padding: 10px 12px;
          border: none;
          background: transparent;
          outline: none;
          resize: none;
          overflow-y: auto;
          line-height: 1.4;
          color: var(--input-color);
          transition: color 0.3s ease;
        }

        .chat-widget-wrapper .send-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(220, 195, 151, 0.75) 0%, rgba(192, 172, 133, 0.75) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .chat-widget-wrapper .send-button:hover {
          transform: scale(1.05) rotate(10deg);
          box-shadow: 0 4px 12px rgba(220, 195, 151, 0.4);
        }

        .chat-widget-wrapper .send-button i {
          font-size: 20px;
        }

        /* Обновленные анимации с более плавными и тонкими эффектами */
        @keyframes slowPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes siriSphereFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            box-shadow: 
              0 0 8px rgba(220, 195, 151, 0.3),
              inset 0 1px 3px rgba(240, 220, 180, 0.4),
              inset 0 -1px 2px rgba(160, 135, 90, 0.1);
          }
          33% { 
            transform: translateY(-1px) scale(1.02);
            box-shadow: 
              0 0 10px rgba(220, 195, 151, 0.4),
              inset 0 1px 3px rgba(240, 220, 180, 0.5),
              inset 0 -1px 2px rgba(160, 135, 90, 0.08);
          }
          66% { 
            transform: translateY(1px) scale(0.98);
            box-shadow: 
              0 0 6px rgba(220, 195, 151, 0.25),
              inset 0 1px 3px rgba(240, 220, 180, 0.35),
              inset 0 -1px 2px rgba(160, 135, 90, 0.12);
          }
        }

        @keyframes siriInnerGlow {
          0% { 
            opacity: 0.3;
            transform: scale(0.9);
            box-shadow: 0 0 1px rgba(240, 220, 180, 0.2);
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.1);
            box-shadow: 0 0 2px rgba(240, 220, 180, 0.3);
          }
          100% { 
            opacity: 0.4;
            transform: scale(1);
            box-shadow: 0 0 1.5px rgba(240, 220, 180, 0.25);
          }
        }

        @keyframes siriRingPulse {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          25% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.12;
            transform: scale(1.05);
          }
          75% {
            opacity: 0.06;
            transform: scale(1.1);
          }
          100% {
            opacity: 0;
            transform: scale(1.15);
          }
        }

        @keyframes siriMiniPulse {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
            box-shadow: 
              0 0 2px rgba(220, 195, 151, 0.15),
              inset 0 1px 2px rgba(240, 220, 180, 0.2);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.05);
            box-shadow: 
              0 0 3px rgba(220, 195, 151, 0.25),
              inset 0 1px 2px rgba(240, 220, 180, 0.3);
          }
        }

        @keyframes hoverPulse {
          0% { box-shadow: 0 0 0 0 rgba(220, 195, 151, 0.9); }
          70% { box-shadow: 0 0 0 15px rgba(220, 195, 151, 0); }
          100% { box-shadow: 0 0 0 0 rgba(220, 195, 151, 0); }
        }

        .animate-slowPulse { animation: slowPulse 3s infinite ease-in-out; }
        .animate-hoverPulse { animation: hoverPulse 4s infinite; }
      `}</style>
    </>
  )
}
