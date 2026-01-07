const express = require('express');
const router = express.Router();

// Rota principal - Home
router.get('/', (req, res) => {
  res.render('home', {
    title: 'Huella - Cookies Artesanais',
    page: 'home',
    featuredCookies: [
      {
        name: 'Cookie Tradicional',
        description: 'Um cookie chocolate chip com uma massa cremosa, pepitas de chocolate e uma pitada de canela e sal.',
        price: '2.50€',
        image: '/img/cookies/cookies/Tradicional/1.jpg',
        slug: 'cookie-tradicional'
      },
      {
        name: 'Cookie de Laranja e Chocolate',
        description: 'Um cookie com a massa mais macia e equilibrada, com um toque especial.',
        price: '2.50€',
        image: '/img/cookies/cookies/Laranja e Chocolate/1.jpg',
        slug: 'cookie-de-laranja-e-chocolate'
      },
      {
        name: 'Cookie de Duplo Chocolate',
        description: 'Com a massa perfeita de chocolate, para quem adora um verdadeiro docinho.',
        price: '2.50€',
        image: '/img/cookies/cookies/Duplo Chocolate/1.jpg',
        slug: 'cookie-de-duplo-chocolate'
      }
    ],
    seasonalCookies: [
      {
        name: 'Pumpkin Spice',
        description: 'Edição limitada de outono com especiarias quentes',
        price: '3.20€',
        image: '/img/cookies/pumpkin-spice.jpg'
      },
      {
        name: 'Gingerbread',
        description: 'Sabor natalício com gengibre e mel',
        price: '3.50€',
        image: '/img/cookies/gingerbread.jpg'
      }
    ]
  });
});

module.exports = router;

