export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Carla Mendes",
    location: "São Paulo",
    rating: 5,
    text: "A viagem à Turquia organizada pela Like Look foi simplesmente perfeita! O roteiro muito bem planejado nos permitiu conhecer todos os pontos principais de Istambul sem correria. O guia era extremamente conhecedor e apaixonado pela cultura local. Cada dia foi uma descoberta fascinante.",
    image: "https://images.pexels.com/photos/3290883/pexels-photo-3290883.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Roberto e Ana Paula",
    location: "Rio de Janeiro",
    rating: 5,
    text: "Comemoramos nosso aniversário de casamento com esta viagem e não poderíamos ter escolhido melhor! A Turquia é deslumbrante e a organização da Like Look foi impecável. Hotéis excelentes, transfers pontuais, e o roteiro perfeitamente equilibrado entre atividades e tempo livre.",
    image: "https://images.pexels.com/photos/4557376/pexels-photo-4557376.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Marcelo Santos",
    location: "Belo Horizonte",
    rating: 5,
    text: "Istambul superou todas as minhas expectativas! A cidade onde dois continentes se encontram é verdadeiramente mágica. A equipe da Like Look cuidou de cada detalhe, desde a escolha dos restaurantes até as visitas guiadas. O cruzeiro pelo Bósforo foi um ponto alto da viagem.",
    image: "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Juliana Costa",
    location: "Brasília",
    rating: 4,
    text: "Como viajante solo, sempre procuro agências que ofereçam segurança e bom atendimento. A Like Look superou minhas expectativas! Me senti completamente segura e bem atendida durante toda a viagem. O roteiro pela Turquia foi incrível, com tempo suficiente para apreciar cada atração.",
    image: "https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Família Almeida",
    location: "Curitiba",
    rating: 5,
    text: "Viajamos com nossos dois filhos adolescentes e todos ficaram encantados! A Turquia é um destino perfeito para famílias, com história, cultura, gastronomia e compras. A Like Look montou um roteiro que agradou a todos, com atividades interessantes e bem organizadas.",
    image: "https://images.pexels.com/photos/7005162/pexels-photo-7005162.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];