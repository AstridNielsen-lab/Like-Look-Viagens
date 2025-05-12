export interface DayActivity {
  day: number;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

export const itineraryData: DayActivity[] = [
  {
    day: 1,
    title: "Chegada em Istambul e Visita à Basílica de Santa Sofia",
    description: "Chegada ao aeroporto de Istambul, recepção e transfer para o hotel. Após o check-in, começaremos nossa aventura visitando a majestosa Basílica de Santa Sofia (Hagia Sophia), uma obra-prima arquitetônica que já foi igreja, mesquita e hoje é um museu impressionante. Sua cúpula grandiosa e mosaicos bizantinos deslumbram visitantes há séculos.",
    highlights: [
      "Recepção no aeroporto e transfer privativo",
      "Check-in no hotel 5 estrelas no centro histórico",
      "Visita guiada à Basílica de Santa Sofia",
      "Jantar de boas-vindas com gastronomia tradicional turca"
    ],
    image: "https://raw.githubusercontent.com/AstridNielsen-lab/Like-Look-Viagens/refs/heads/index/src/data/basilica%20santa%20sofia%20istanbul.jpg"
  },
  {
    day: 2,
    title: "Mesquita Azul e Palácio de Topkapi",
    description: "Após um café da manhã tradicional, visitaremos a impressionante Mesquita Azul, famosa por seus seis minaretes e interior decorado com mais de 20.000 azulejos azuis de Iznik. Em seguida, exploraremos o Palácio de Topkapi, antiga residência dos sultões otomanos, com suas coleções de joias, relíquias e artefatos históricos. O palácio oferece vistas deslumbrantes do Bósforo e do Corno de Ouro.",
    highlights: [
      "Visita à Mesquita Azul (Sultanahmet Camii)",
      "Tour completo pelo Palácio de Topkapi",
      "Visita ao tesouro imperial e harém do palácio",
      "Almoço em restaurante com vista para o Bósforo"
    ],
    image: "https://images.pexels.com/photos/13904533/pexels-photo-13904533.jpeg"
  },
  {
    day: 3,
    title: "Cisterna da Basílica e Avenida İstiklal",
    description: "Pela manhã, desceremos à misteriosa Cisterna da Basílica, também conhecida como 'Palácio Submerso', uma maravilha da engenharia bizantina com 336 colunas e cabeças de Medusa. À tarde, exploraremos a vibrante Avenida İstiklal, centro cultural e comercial de Istambul, com suas lojas, cafés históricos, e arquitetura eclética que mistura elementos europeus e otomanos.",
    highlights: [
      "Exploração da Cisterna da Basílica",
      "Passeio pela histórica Avenida İstiklal",
      "Visita ao icônico bonde vermelho de Taksim",
      "Tempo livre para compras e experiência gastronômica local"
    ],
    image: "https://images.pexels.com/photos/10324767/pexels-photo-10324767.jpeg"
  },
  {
    day: 4,
    title: "Torre Galata e Museu de Arte Moderna",
    description: "Começaremos o dia subindo à Torre Galata para apreciar uma vista panorâmica de 360° da cidade. Construída pelos genoveses no século XIV, a torre oferece o mais belo panorama de Istambul. Em seguida, visitaremos o bairro de Beyoglu e o Museu de Arte Moderna de Istambul, onde conheceremos obras contemporâneas de artistas turcos e internacionais.",
    highlights: [
      "Vista panorâmica da Torre Galata",
      "Exploração do charmoso bairro de Beyoglu",
      "Visita ao Museu de Arte Moderna",
      "Jantar em restaurante com música tradicional turca"
    ],
    image: "https://images.pexels.com/photos/14896587/pexels-photo-14896587.jpeg"
  },
  {
    day: 5,
    title: "Cruzeiro pelo Estreito de Bósforo e Grandes Bazares",
    description: "Hoje embarcaremos em um relaxante cruzeiro pelo Estreito de Bósforo, que divide os continentes europeu e asiático. Admiraremos palácios à beira-mar, mansões de madeira (yalıs) e fortalezas históricas. À tarde, mergulharemos na atmosfera vibrante do Grande Bazar e do Bazar das Especiarias, labirintos de comércio com mais de 4.000 lojas oferecendo especiarias, tapetes, cerâmicas, joias e muito mais.",
    highlights: [
      "Cruzeiro pelo Estreito de Bósforo",
      "Visita ao Grande Bazar com mais de 4.000 lojas",
      "Experiência sensorial no Bazar das Especiarias",
      "Degustação de delícias turcas e chá de maçã"
    ],
    image: "https://images.pexels.com/photos/4153361/pexels-photo-4153361.jpeg"
  },
  {
    day: 6,
    title: "Palácio de Dolmabahçe e Jardins de Gulhane",
    description: "Visitaremos o luxuoso Palácio de Dolmabahçe, última residência dos sultões otomanos antes do fim do império. Seu estilo combina elementos da arquitetura barroca, rococó e neoclássica com tradições otomanas. À tarde, relaxaremos nos belos Jardins de Gulhane, antigos jardins reais que hoje oferecem um oásis de tranquilidade. Seguiremos para o Museu de Arqueologia de Istambul, com sua incrível coleção de artefatos da antiguidade.",
    highlights: [
      "Tour guiado pelo opulento Palácio de Dolmabahçe",
      "Passeio pelos tranquilos Jardins de Gulhane",
      "Visita ao Museu de Arqueologia de Istambul",
      "Compras em boutiques de designers turcos contemporâneos"
    ],
    image: "https://images.pexels.com/photos/2127673/pexels-photo-2127673.jpeg"
  },
  {
    day: 7,
    title: "Praça Taksim, Ponte Galata e Retorno",
    description: "Em nosso último dia, visitaremos a icônica Praça Taksim, coração da Istambul moderna e ponto de encontro da população local. Caminharemos pela histórica Ponte Galata, onde pescadores locais se alinham diariamente, e visitaremos a impressionante Mesquita Süleymaniye, obra-prima do arquiteto Sinan. Teremos tempo livre para últimas compras antes do transfer para o aeroporto e retorno, levando memórias inesquecíveis desta jornada mágica pela fascinante Istambul.",
    highlights: [
      "Visita à Praça Taksim e Memorial da República",
      "Caminhada pela histórica Ponte Galata",
      "Visita à Mesquita Süleymaniye",
      "Transfer para o aeroporto e assistência para embarque"
    ],
    image: "https://images.pexels.com/photos/17801743/pexels-photo-17801743/free-photo-of-lights-night-architecture-crowd.jpeg"
  }
];
