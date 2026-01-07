const express = require('express');
const router = express.Router();

// Rota Os Meus Valores
router.get('/', (req, res) => {
  res.render('about', {
    title: 'Os Meus Valores - Huella',
    page: 'about',
    ana: {
      name: 'Ana Ribeiro',
      role: 'Fundadora & Criadora',
      image: '/img/ana-ribeiro.jpg',
      biography: 'Sou a Ana Ribeiro, a criadora por trás da Huella. A minha paixão pela culinária começou na cozinha da minha avó, onde aprendi que cada receita conta uma história. Com formação em nutrição e um amor profundo pela pastelaria artesanal, decidi criar algo único: cookies que não só sabem bem, mas que também respeitam o planeta e todos os seres vivos. Cada cookie que crio é feito com dedicação, ingredientes cuidadosamente selecionados e, acima de tudo, muito amor. A Huella é mais do que um negócio para mim - é uma forma de partilhar os meus valores e criar momentos especiais para quem prova os meus cookies.'
    },
    mission: {
      title: 'Missão',
      description: 'A minha missão é criar cookies artesanais excecionais que não comprometam os valores éticos e ambientais. Cada receita é desenvolvida com o objetivo de proporcionar uma experiência única, utilizando apenas ingredientes de origem vegetal e processos sustentáveis. Quero que cada mordida seja uma celebração do sabor e da consciência ambiental.',
      points: [
        'Criar produtos deliciosos sem ingredientes de origem animal',
        'Utilizar apenas ingredientes premium e naturais',
        'Manter processos artesanais e cuidadosos',
        'Contribuir para um futuro mais sustentável'
      ]
    },
    values: [
      {
        title: 'Ética',
        description: 'Acredito que podemos criar produtos deliciosos sem causar sofrimento animal. Cada escolha que faço reflete os meus valores éticos e o respeito por todos os seres vivos.'
      },
      {
        title: 'Sustentabilidade',
        description: 'Comprometo-me com práticas que respeitam o planeta. Desde a escolha dos ingredientes até à embalagem, cada decisão é tomada com consciência ambiental.'
      },
      {
        title: 'Qualidade',
        description: 'Não comprometo a qualidade. Cada cookie é feito com ingredientes premium, selecionados cuidadosamente para garantir o melhor sabor e textura.'
      },
      {
        title: 'Autenticidade',
        description: 'A Huella é uma extensão de quem sou. Cada receita, cada sabor, cada decisão reflete os meus valores pessoais e a minha paixão pela culinária.'
      }
    ],
    veganReason: {
      title: 'Porquê Cookies Veganos?',
      description: 'A escolha de criar cookies 100% veganos não é apenas uma tendência - é uma decisão fundamentada em valores profundos e na busca por uma alternativa mais ética e sustentável.',
      reasons: [
        {
          title: 'Respeito pelos Animais',
          text: 'Acredito que podemos criar produtos deliciosos sem utilizar ingredientes de origem animal. Cada cookie vegano é uma escolha consciente que respeita a vida de todos os seres.'
        },
        {
          title: 'Sustentabilidade Ambiental',
          text: 'A produção de ingredientes de origem vegetal tem um impacto ambiental significativamente menor. Ao escolher ingredientes veganos, contribuo para um planeta mais saudável e sustentável.'
        },
        {
          title: 'Inclusividade',
          text: 'Os cookies veganos podem ser apreciados por todos, independentemente de restrições alimentares, crenças ou escolhas de estilo de vida. Quero que todos possam desfrutar dos meus cookies.'
        },
        {
          title: 'Inovação e Criatividade',
          text: 'Criar cookies veganos desafia-me a ser mais criativa e a explorar ingredientes únicos. Esta limitação tornou-se uma oportunidade de inovação e descoberta de sabores extraordinários.'
        }
      ]
    }
  });
});

module.exports = router;

