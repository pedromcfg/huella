const express = require('express');
const router = express.Router();

// Rota Reviews
router.get('/', (req, res) => {
  res.render('reviews', {
    title: 'Avaliações dos Clientes - Huella',
    page: 'reviews',
    stats: {
      totalReviews: 1247,
      averageRating: 4.8,
      fiveStar: 89,
      fourStar: 8,
      threeStar: 2,
      twoStar: 1,
      oneStar: 0
    },
    featuredReviews: [
      {
        name: 'Maria Santos',
        rating: 5,
        date: '2024-01-15',
        comment: 'Os cookies da Huella são simplesmente divinais! O sabor do Chocolate Chip é incomparável. A embalagem ecológica é um plus fantástico.',
        verified: true,
        cookie: 'Chocolate Chip Clássico'
      },
      {
        name: 'João Silva',
        rating: 5,
        date: '2024-01-12',
        comment: 'Encomendei a caixa grande para a empresa e todos ficaram encantados. Qualidade excecional e entrega super rápida!',
        verified: true,
        cookie: 'Caixa Grande'
      },
      {
        name: 'Ana Costa',
        rating: 5,
        date: '2024-01-10',
        comment: 'O cookie de Lavanda e Limão é uma experiência única! Nunca tinha provado nada assim. Recomendo vivamente.',
        verified: true,
        cookie: 'Lavanda e Limão'
      },
      {
        name: 'Pedro Mendes',
        rating: 4,
        date: '2024-01-08',
        comment: 'Excelente qualidade e sabor. A única coisa que mudaria seria ter mais opções sem glúten, mas os que têm são fantásticos.',
        verified: true,
        cookie: 'Matcha e Chocolate Branco'
      },
      {
        name: 'Carla Rodrigues',
        rating: 5,
        date: '2024-01-05',
        comment: 'Atenção ao cliente excecional! Tive um problema com a encomenda e resolveram tudo rapidamente. Os cookies são deliciosos!',
        verified: true,
        cookie: 'Avelã e Caramelo'
      },
      {
        name: 'Miguel Fernandes',
        rating: 5,
        date: '2024-01-03',
        comment: 'Compro regularmente para a família. Os meus filhos adoram e eu também! A embalagem sustentável é um detalhe que valorizo muito.',
        verified: true,
        cookie: 'Coco e Lima'
      }
    ],
    recentReviews: [
      {
        name: 'Sofia Almeida',
        rating: 5,
        date: '2024-01-20',
        comment: 'Primeira encomenda e não será a última! Cookies frescos e deliciosos.',
        verified: true
      },
      {
        name: 'Ricardo Pereira',
        rating: 5,
        date: '2024-01-19',
        comment: 'Entrega rápida e cookies perfeitos. O Pumpkin Spice está incrível!',
        verified: true
      },
      {
        name: 'Teresa Oliveira',
        rating: 4,
        date: '2024-01-18',
        comment: 'Muito bons! Gostaria de ver mais opções veganas.',
        verified: true
      },
      {
        name: 'António Sousa',
        rating: 5,
        date: '2024-01-17',
        comment: 'Qualidade premium. Vale cada cêntimo!',
        verified: true
      }
    ]
  });
});

module.exports = router;

