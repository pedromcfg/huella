const express = require('express');
const router = express.Router();

// Rota Cookies
router.get('/', (req, res) => {
  res.render('cookies', {
    title: 'Os Nossos Cookies - Huella',
    page: 'cookies',
    fixedCookies: [
      {
        name: 'Cookie Tradicional',
        slug: 'cookie-tradicional',
        description: 'Um cookie chocolate chip com uma massa cremosa, pepitas de chocolate e uma pitada de canela e sal.',
        price: '2.50€',
        image: '/img/cookies/cookies/Tradicional/1.jpg',
        ingredients: ['🍫 Pepitas de Chocolate', '🌿 Canela', '🧂 Sal']
      },
      {
        name: 'Cookie de Laranja e Chocolate',
        slug: 'cookie-de-laranja-e-chocolate',
        description: 'Um cookie com a massa mais macia e equilibrada, com um toque especial.',
        price: '2.50€',
        image: '/img/cookies/cookies/Laranja e Chocolate/1.jpg',
        ingredients: ['🍊 Laranja', '🍫 Pepitas de Chocolate', '🌿 Canela']
      },
      {
        name: 'Cookie de Limão e Chia',
        slug: 'cookie-de-limao-e-chia',
        description: 'Uma massa com o equilíbrio perfeito entre doce e ácido, em versão crocante por fora e macia por dentro.',
        price: '2.50€',
        image: '/img/cookies/cookies/Limão e Chia/1.jpg',
        ingredients: ['🍋 Limão', '💚 Chia', '🍫 Pepitas de Chocolate']
      },
      {
        name: 'Cookie de Duplo Chocolate',
        slug: 'cookie-de-duplo-chocolate',
        description: 'Com a massa perfeita de chocolate, para quem adora um verdadeiro docinho.',
        price: '2.50€',
        image: '/img/cookies/cookies/Duplo Chocolate/1.jpg',
        ingredients: ['🍫 Cacau', '🍫 Pepitas de Chocolate', '🧂 Sal']
      },
      {
        name: 'Cookie de Grão-de-Bico e Manteiga de Amendoim',
        slug: 'cookie-de-grao-de-bico-e-manteiga-de-amendoim',
        description: 'Para quem gosta de algo diferente, mas igualmente delicioso. Uma massa cremosa, perfeita para acompanhar um copo de bebida vegetal!',
        price: '2.50€',
        image: '/img/cookies/5.jpg',
        ingredients: ['🍫 Pepitas de Chocolate', '🌰 Grão-de-Bico', '🌿 Canela', '🧂 Sal']
      }
    ],
    seasonalCookies: [
      {
        name: 'Cookie Red Velvet',
        description: 'Um cookie especial com sabor red velvet, cremoso e delicioso.',
        price: '3.25€',
        image: '/img/cookies/6.jpg',
        season: 'Edição Especial',
        available: true
      },
      {
        name: 'Cookie de Red Velvet e Avelãs',
        description: 'A combinação perfeita de red velvet com avelãs tostadas, uma experiência única.',
        price: '3.25€',
        image: '/img/cookies/7.jpg',
        season: 'Edição Especial',
        available: true
      },
      {
        name: 'Cookie de Avelãs e Cacau',
        description: 'Um cookie rico com avelãs e cacau, para os amantes de sabores intensos.',
        price: '3.25€',
        image: '/img/cookies/8.jpg',
        season: 'Edição Especial',
        available: true
      }
    ],
    mixedBoxes: [
      {
        name: 'Caixa Pequena',
        description: '6 cookies variados',
        price: '15.00€',
        savings: '0.00€'
      },
      {
        name: 'Caixa Média',
        description: '12 cookies variados',
        price: '28.00€',
        savings: '2.00€'
      },
      {
        name: 'Caixa Grande',
        description: '24 cookies variados',
        price: '52.00€',
        savings: '8.00€'
      }
    ]
  });
});

module.exports = router;

