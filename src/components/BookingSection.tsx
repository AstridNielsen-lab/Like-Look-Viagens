import React, { useState } from 'react';
import { Calendar, Users, Phone, Mail, Send } from 'lucide-react';

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '2',
    departureDate: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    try {
      // Create email content
      const emailContent = `
        Nova Solicitação de Reserva:
        
        Nome: ${formData.name}
        Email: ${formData.email}
        Telefone: ${formData.phone}
        Número de Viajantes: ${formData.travelers}
        Data de Partida: ${formData.departureDate}
        Mensagem: ${formData.message}
      `;

      // Send email using mailto
      const mailtoLink = `mailto:juliocamposmachado@gmail.com?subject=Nova Solicitação de Reserva - ${formData.name}&body=${encodeURIComponent(emailContent)}`;
      window.location.href = mailtoLink;
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          travelers: '2',
          departureDate: '',
          message: '',
        });
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reserve Sua Viagem</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Preencha o formulário abaixo para reservar seu lugar nesta experiência 
            inesquecível pela Turquia. Nossa equipe entrará em contato para finalizar os detalhes.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 bg-blue-600 text-white p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Por que reservar com a Like Look Viagens?</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Expertise em destinos internacionais há mais de 15 anos</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Roteiros exclusivos elaborados por especialistas locais</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Suporte 24 horas durante toda a sua viagem</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Hotéis cuidadosamente selecionados pelos nossos especialistas</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Opções de pagamento flexíveis e parcelamento em até 12x</p>
                </li>
              </ul>
              
              <div className="mt-12">
                <h4 className="font-semibold mb-3">Precisa de ajuda?</h4>
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 mr-3 text-blue-300" />
                  <div>
                    <p>(11) 3680-8030</p>
                    <p>WhatsApp: (11) 99294-6628</p>
                    <p>WhatsApp: (11) 97060-3441</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-300" />
                  <span>juliocamposmachado@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 lg:p-12">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitação Enviada!</h3>
                  <p className="text-gray-600 mb-6">
                    Recebemos sua solicitação e nossa equipe entrará em contato em breve 
                    para confirmar sua reserva e fornecer mais detalhes sobre a viagem.
                  </p>
                  <p className="text-sm text-gray-500">
                    Fique atento ao seu e-mail e telefone para nosso contato.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome Completo*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
                        Número de Viajantes*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Users className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          id="travelers"
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="1">1 Pessoa</option>
                          <option value="2">2 Pessoas</option>
                          <option value="3">3 Pessoas</option>
                          <option value="4">4 Pessoas</option>
                          <option value="5+">5+ Pessoas</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Data de Partida Desejada*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          id="departureDate"
                          name="departureDate"
                          value={formData.departureDate}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem (Opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Conte-nos sobre requisitos específicos ou perguntas sobre a viagem..."
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                        Concordo em receber informações sobre esta viagem e futuras promoções da Like Look Viagens. 
                        Leia nossa <a href="#" className="text-blue-600 hover:underline">Política de Privacidade</a>.
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    Solicitar Reserva
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
