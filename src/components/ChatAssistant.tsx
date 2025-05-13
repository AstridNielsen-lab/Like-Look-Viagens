import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [isAskingName, setIsAskingName] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
  const API_KEY = "AIzaSyAuFi5KtPsMJI5IC8c5FjvYD5IbuBdwH_U";

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage = {
        role: 'assistant',
        content: 'Olá! Sou Julio Campos Machado, especialista em viagens para Turquia. Antes de começarmos, poderia me dizer seu nome?'
      };
      setMessages([initialMessage]);
      speak(initialMessage.content);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 1;
      utterance.pitch = 1;

      // Get available voices and select a Portuguese voice if available
      const voices = window.speechSynthesis.getVoices();
      const portugueseVoice = voices.find(voice => voice.lang.includes('pt'));
      if (portugueseVoice) {
        utterance.voice = portugueseVoice;
      }

      window.speechSynthesis.speak(utterance);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNameSubmission = async (name: string) => {
    setUserName(name);
    setIsAskingName(false);
    const welcomeMessage = `Muito prazer, ${name}! Estou aqui para te ajudar a planejar uma experiência inesquecível em Istambul. Nosso pacote exclusivo de 7 dias começa a partir de R$ 12.000,00 por pessoa, incluindo hospedagem em hotéis 5 estrelas, passeios guiados e toda assistência necessária. Você já conhece Istambul ou será sua primeira vez visitando esta cidade mágica?`;
    
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
              text: `Você é Julio Campos Machado, um experiente agente de viagens especializado em Turquia.
                     Mantenha o foco no roteiro de 7 dias em Istambul que inclui:
                     - Dia 1: Santa Sofia e jantar de boas-vindas
                     - Dia 2: Mesquita Azul e Palácio Topkapi
                     - Dia 3: Cisterna da Basílica e Avenida İstiklal
                     - Dia 4: Torre Galata e Museu de Arte Moderna
                     - Dia 5: Cruzeiro pelo Bósforo e Grandes Bazares
                     - Dia 6: Palácio Dolmabahçe e Jardins de Gulhane
                     - Dia 7: Praça Taksim e Ponte Galata
                     
                     O pacote custa R$ 12.000,00 por pessoa.
                     
                     Sempre sugira que o cliente entre em contato pelo WhatsApp (11) 99294-6628 ou (11) 97060-3441 para finalizar a reserva.
                     
                     Nome do cliente: ${userName}
                     Mensagem do cliente: ${userMessage}`
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
      const errorMessage = 'Desculpe, estou com dificuldades técnicas no momento. Por favor, entre em contato diretamente pelo WhatsApp (11) 99294-6628 ou (11) 97060-3441 para conversarmos sobre sua viagem.';
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
