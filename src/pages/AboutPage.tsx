import React from 'react';
import { Building, Clock, Globe, Shield, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <main className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre a Like Look Viagens</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Especialistas em viagens internacionais humanizadas, com foco em destinos do Oriente Médio e Europa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-6">
                Somos uma empresa de turismo especializada em viagens internacionais humanizadas, 
                com ênfase e experiência em Israel, Egito, Jordânia, Turquia, Oriente Médio e Europa. 
                Com grande foco também em viagens a Terra Santa.
              </p>
              <p className="text-gray-600">
                Nosso diferencial é a humanização. Damos suporte na viagem 24 horas, em todos aspectos, 
                oferecendo aos clientes tranquilidade e segurança, fazendo com que sua viagem seja 
                incrível com a menor preocupação possível ao viajar conosco.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Globe className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Destinos Especializados</h3>
                <p className="text-gray-600">Terra Santa e Oriente Médio</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Suporte 24h</h3>
                <p className="text-gray-600">Assistência completa durante toda a viagem</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Atendimento Humanizado</h3>
                <p className="text-gray-600">Foco na experiência do cliente</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Segurança</h3>
                <p className="text-gray-600">Tranquilidade em toda a jornada</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-20">
            <div className="flex items-start mb-8">
              <Building className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Grupo Hadassa</h2>
                <p className="text-gray-600">
                  A Like Look Viagens é vinculada à marca Hadassa Viagens, que é de propriedade do GRUPO HADASSA. 
                  Todas as operações realizadas são executadas pelo grupo Hadassa, inscrita sob o 
                  CNPJ: 25.264.693/0001-50.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Onde Estamos</h3>
              <p className="text-gray-600">
                R. Vinte e Quatro de Dezembro, 687 - Centro<br />
                Marília - SP, 17500-060
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <h3 className="font-semibold text-gray-700 mb-2">Aviso Legal</h3>
            <p className="mb-4">
              Todos os direitos reservados. Toda comunicação através da rede mundial de computadores 
              está sujeita a interrupções ou atrasos, podendo impedir ou prejudicar o envio de ordens 
              ou a recepção de informações atualizadas.
            </p>
            <p>
              O grupo Hadassa exime-se de responsabilidade por danos sofridos por seus clientes, 
              por força de falha de serviços disponibilizados por terceiros.
            </p>
            <p className="mt-4">
              <a href="#" className="text-blue-600 hover:underline">Política de Privacidade</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};