import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });
  const [isAskingName, setIsAskingName] = useState(() => !localStorage.getItem('userName'));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
  const API_KEY = "AIzaSyAuFi5KtPsMJI5IC8c5FjvYD5IbuBdwH_U";

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage = {
        role: 'assistant',
        content: 'Olá! Para começarmos, qual é o seu nome?'
      };
      setMessages([initialMessage]);
      speak(initialMessage.content);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNameSubmission = async (name: string) => {
    setUserName(name);
    localStorage.setItem('userName', name);
    setIsAskingName(false);
    const welcomeMessage = `Oi ${name}! 😊 Nosso pacote para Istambul: 7 dias em hotel 5 estrelas por 1200 reais mensais em 10x. Você já conhece Istambul?`;
    
    setMessages(prev => [...prev,
      { role: 'user', content: name },
      { role: 'assistant', content: welcomeMessage }
    ]);

    speak(welcomeMessage);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    if (isAskingName) {
      await handleNameSubmission(userMessage);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Você é Julio Campos Machado, guia especializado em Turquia. Use respostas curtas e objetivas, sem caracteres especiais. Foque no roteiro de 7 dias em Istambul por 1200 reais mensais em 10x. Para reservas, sugira chamar o Julio no email juliocamposmachado@gmail.com ou os telefones disponiveis no site.

Nome do cliente: ${userName}
Mensagem: ${userMessage}`
            }]
          }]
        })
      });

      const data = await response.json();
      const assistantResponse = data.candidates[0].content.parts[0].text;

      setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }]);
      speak(assistantResponse);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = 'Desculpe, tive um problema técnico. Me chama no WhatsApp 11992946628 ou 11970603441.';
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: errorMessage
      }]);
      speak(errorMessage);
    }

    setIsLoading(false);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl z-50">
          <div className="flex items-center justify-between bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Chat com Julio - Like Look Viagens</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-blue-50 rounded-lg p-3 text-blue-800">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={isAskingName ? "Digite seu nome..." : "Digite sua mensagem..."}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
