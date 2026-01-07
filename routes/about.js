const express = require('express');
const router = express.Router();

// Rota Quem Somos
router.get('/', (req, res) => {
  res.render('about', {
    title: 'Quem Somos - Huella',
    page: 'about',
    team: [
      {
        name: 'Ana Silva',
        role: 'Fundadora & Chef',
        description: 'Apaixonada por criar experiências únicas através dos sabores',
        image: '/img/team/ana-silva.jpg'
      },
      {
        name: 'Carlos Mendes',
        role: 'Co-fundador & Marketing',
        description: 'Responsável por trazer a Huella até si',
        image: '/img/team/carlos-mendes.jpg'
      },
      {
        name: 'Maria Santos',
        role: 'Desenvolvimento de Produtos',
        description: 'Criadora dos nossos sabores mais inovadores',
        image: '/img/team/maria-santos.jpg'
      }
    ],
    values: [
      {
        title: 'Qualidade',
        description: 'Usamos apenas ingredientes premium e técnicas artesanais'
      },
      {
        title: 'Sustentabilidade',
        description: 'Comprometidos com embalagens ecológicas e práticas responsáveis'
      },
      {
        title: 'Inovação',
        description: 'Criamos constantemente novos sabores e experiências únicas'
      },
      {
        title: 'Comunidade',
        description: 'Apoiamos produtores locais e construímos laços com a nossa comunidade'
      }
    ]
  });
});

module.exports = router;

