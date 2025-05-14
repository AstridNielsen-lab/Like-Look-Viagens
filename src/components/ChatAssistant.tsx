import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface UserData {
  name: string;
  hasGreeted: boolean;
}

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData>(() => {
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : { name: '', hasGreeted: false };
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
  const API_KEY = "AIzaSyAuFi5KtPsMJI5IC8c5FjvYD5IbuBdwH_U";

  useEffect(() => {
    if (isOpen) {
      const savedMessages = localStorage.getItem('chatMessages');
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      } else if (!userData.hasGreeted) {
        const initialMessage = {
          role: 'assistant',
          content: 'Oi, eu sou Julio Campos Machado, especialista em viagens para Turquia. Para começarmos nossa conversa, qual é o seu nome?'
        };
        setMessages([initialMessage]);
        speak(initialMessage.content);
      }
    }
  }, [isOpen, userData.hasGreeted]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    scrollToBottom();
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
    setUserData({ name, hasGreeted: true });
    const welcomeMessage = `Que bom te conhecer, ${name}. Você já conhece Istambul?`;
    
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

    if (!userData.name) {
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
              text: ``Você é Julio Campos Machado, guia especializado em Turquia. Use linguagem natural e amigável, sem caracteres especiais. Foque no roteiro de 7 dias em Istambul:

Dia 1: Santa Sofia e jantar especial
Dia 2: Mesquita Azul e Palácio Topkapi
Dia 3: Cisterna da Basílica e Avenida Istiklal
Dia 4: Torre Galata e Museu de Arte Moderna
Dia 5: Cruzeiro pelo Bósforo e Grandes Bazares
Dia 6: Palácio Dolmabahce e Jardins de Gulhane
Dia 7: Praça Taksim e Ponte Galata

O pacote custa apenas 1200 reais por mês em 10x.

Sempre sugira que para fazer a reserva é melhor chamar no WhatsApp 1 1-9- 9 2 -9 4-6 6- 2 8 ou 1 1- 9 -7 0- 6 0 -3 4 -4 1.

IMPORTANTE: Nunca use caracteres especiais como asteriscos ou parênteses nas respostas. Use apenas pontuação simples como pontos e vírgulas para garantir uma leitura fluida.

Nome do cliente: ${userData.name}
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
      const errorMessage = 'Desculpe, estou com um probleminha técnico. Me chama no WhatsApp 11992946628.';
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
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 text-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
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
                placeholder={!userData.name ? "Digite seu nome" : "Digite sua mensagem"}
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
