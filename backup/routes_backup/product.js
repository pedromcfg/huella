const express = require('express');
const router = express.Router();

// Base de dados de todos os cookies
const allCookies = [
  {
    slug: 'cookie-tradicional',
    name: 'Cookie Tradicional',
    description: 'Um cookie chocolate chip com uma massa cremosa, pepitas de chocolate e uma pitada de canela e sal.',
    fullDescription: 'O nosso cookie tradicional é a base perfeita para quem adora o clássico sabor de chocolate chip. Com uma massa cremosa e suave, cada mordida revela pepitas generosas de chocolate que derretem na boca. A adição de canela e sal cria um equilíbrio perfeito entre doce e salgado, tornando este cookie irresistível.',
    price: '2.50€',
    priceValue: 2.50,
    image: '/img/cookies/cookies/Tradicional/1.jpg',
    images: [
      '/img/cookies/cookies/Tradicional/1.jpg',
      '/img/cookies/cookies/Tradicional/2.jpg'
    ],
    ingredients: ['🍫 Pepitas de Chocolate', '🌿 Canela', '🧂 Sal'],
    category: 'fixo',
    available: true,
    vegan: true,
    glutenFree: false
  },
  {
    slug: 'cookie-de-laranja-e-chocolate',
    name: 'Cookie de Laranja e Chocolate',
    description: 'Um cookie com a massa mais macia e equilibrada, com um toque especial.',
    fullDescription: 'Uma combinação única que surpreende o paladar! A frescura da laranja combina perfeitamente com a riqueza do chocolate, criando uma experiência de sabor inesquecível. A massa é especialmente macia e equilibrada, garantindo que cada mordida seja uma explosão de sabores harmoniosos.',
    price: '2.50€',
    priceValue: 2.50,
    image: '/img/cookies/cookies/Laranja e Chocolate/1.jpg',
    images: [
      '/img/cookies/cookies/Laranja e Chocolate/1.jpg',
      '/img/cookies/cookies/Laranja e Chocolate/2.jpg',
      '/img/cookies/cookies/Laranja e Chocolate/3.jpg',
      '/img/cookies/cookies/Laranja e Chocolate/4.jpg'
    ],
    ingredients: ['🍊 Laranja', '🍫 Pepitas de Chocolate', '🌿 Canela'],
    category: 'fixo',
    available: true,
    vegan: true,
    glutenFree: false
  },
  {
    slug: 'cookie-de-limao-e-chia',
    name: 'Cookie de Limão e Chia',
    description: 'Uma massa com o equilíbrio perfeito entre doce e ácido, em versão crocante por fora e macia por dentro.',
    fullDescription: 'Para os amantes de sabores refrescantes! Este cookie combina a acidez do limão com a textura única da chia, criando uma experiência sensorial única. Crocante por fora e macio por dentro, cada mordida é uma surpresa. Perfeito para quem procura algo diferente mas igualmente delicioso.',
    price: '2.50€',
    priceValue: 2.50,
    image: '/img/cookies/cookies/Limão e Chia/1.jpg',
    images: [
      '/img/cookies/cookies/Limão e Chia/1.jpg',
      '/img/cookies/cookies/Limão e Chia/2.jpg',
      '/img/cookies/cookies/Limão e Chia/3.jpg',
      '/img/cookies/cookies/Limão e Chia/4.jpg'
    ],
    ingredients: ['🍋 Limão', '💚 Chia', '🍫 Pepitas de Chocolate'],
    category: 'fixo',
    available: true,
    vegan: true,
    glutenFree: false
  },
  {
    slug: 'cookie-de-duplo-chocolate',
    name: 'Cookie de Duplo Chocolate',
    description: 'Com a massa perfeita de chocolate, para quem adora um verdadeiro docinho.',
    fullDescription: 'O paraíso para os chocólatras! Este cookie de duplo chocolate é feito com cacau de alta qualidade e pepitas generosas de chocolate, criando uma experiência intensa e indulgente. A massa é rica e cremosa, garantindo que cada mordida seja uma verdadeira celebração do sabor do chocolate.',
    price: '2.50€',
    priceValue: 2.50,
    image: '/img/cookies/cookies/Duplo Chocolate/1.jpg',
    images: [
      '/img/cookies/cookies/Duplo Chocolate/1.jpg',
      '/img/cookies/cookies/Duplo Chocolate/2.jpg',
      '/img/cookies/cookies/Duplo Chocolate/3.jpg',
      '/img/cookies/cookies/Duplo Chocolate/4.jpg'
    ],
    ingredients: ['🍫 Cacau', '🍫 Pepitas de Chocolate', '🧂 Sal'],
    category: 'fixo',
    available: true,
    vegan: true,
    glutenFree: false
  },
  {
    slug: 'cookie-de-grao-de-bico-e-manteiga-de-amendoim',
    name: 'Cookie de Grão-de-Bico e Manteiga de Amendoim',
    description: 'Para quem gosta de algo diferente, mas igualmente delicioso. Uma massa cremosa, perfeita para acompanhar um copo de bebida vegetal!',
    fullDescription: 'Uma criação única e inovadora! Este cookie combina a textura cremosa do grão-de-bico com a riqueza da manteiga de amendoim, criando um sabor complexo e satisfatório. Perfeito para quem procura algo diferente mas igualmente delicioso. A massa cremosa é ideal para acompanhar uma bebida vegetal quente ou fria.',
    price: '2.50€',
    priceValue: 2.50,
    image: '/img/cookies/5.jpg',
    images: [
      '/img/cookies/5.jpg'
    ],
    ingredients: ['🍫 Pepitas de Chocolate', '🌰 Grão-de-Bico', '🌿 Canela', '🧂 Sal'],
    category: 'fixo',
    available: true,
    vegan: true,
    glutenFree: false
  },
  {
    slug: 'cookie-red-velvet',
    name: 'Cookie Red Velvet',
    description: 'Um cookie especial com sabor red velvet, cremoso e delicioso.',
    fullDescription: 'A elegância do red velvet em formato de cookie! Este cookie especial combina o sabor único do red velvet com uma textura cremosa e indulgente. Perfeito para ocasiões especiais ou para quem quer tratar-se com algo verdadeiramente especial.',
    price: '3.25€',
    priceValue: 3.25,
    image: '/img/cookies/6.jpg',
    images: [
      '/img/cookies/6.jpg'
    ],
    ingredients: ['🍰 Red Velvet', '🍫 Chocolate'],
    category: 'especial',
    available: true,
    vegan: true,
    glutenFree: false
  },
  {
    slug: 'cookie-de-red-velvet-e-avelas',
    name: 'Cookie de Red Velvet e Avelãs',
    description: 'A combinação perfeita de red velvet com avelãs tostadas, uma experiência única.',
    fullDescription: 'Uma combinação de luxo! O sabor elegante do red velvet encontra-se com a riqueza das avelãs tostadas, criando uma experiência de sabor sofisticada e indulgente. Cada mordida revela camadas de sabor que se complementam perfeitamente.',
    price: '3.25€',
    priceValue: 3.25,
    image: '/img/cookies/7.jpg',
    images: [
      '/img/cookies/7.jpg'
    ],
    ingredients: ['🍰 Red Velvet', '🌰 Avelãs Tostadas', '🍫 Chocolate'],
    category: 'especial',
    available: true,
    vegan: true,
    glutenFree: false
  },
  {
    slug: 'cookie-de-avelas-e-cacau',
    name: 'Cookie de Avelãs e Cacau',
    description: 'Um cookie rico com avelãs e cacau, para os amantes de sabores intensos.',
    fullDescription: 'Para os amantes de sabores intensos! Este cookie combina a riqueza do cacau com a textura crocante das avelãs, criando uma experiência de sabor profunda e satisfatória. Cada mordida é uma celebração dos sabores mais ricos e intensos.',
    price: '3.25€',
    priceValue: 3.25,
    image: '/img/cookies/8.jpg',
    images: [
      '/img/cookies/8.jpg'
    ],
    ingredients: ['🌰 Avelãs', '🍫 Cacau', '🍫 Chocolate'],
    category: 'especial',
    available: true,
    vegan: true,
    glutenFree: false
  }
];

// Rota de teste e debug
router.get('/test', (req, res) => {
  res.json({
    message: 'Rota de produto funcionando!',
    totalCookies: allCookies.length,
    cookies: allCookies.map(c => ({
      slug: c.slug,
      name: c.name
    }))
  });
});

// Rota para página de produto individual
router.get('/:slug', (req, res, next) => {
  try {
    const { slug } = req.params;
    console.log('🔍 Procurando cookie com slug:', slug);
    console.log('📋 Slugs disponíveis:', allCookies.map(c => c.slug));
    
    const cookie = allCookies.find(c => c.slug === slug);
    
    if (!cookie) {
      console.log('❌ Cookie não encontrado para slug:', slug);
      return res.status(404).render('404', {
        title: 'Cookie não encontrado - Huella',
        page: '404',
        message: `O cookie com slug "${slug}" não foi encontrado.`
      });
    }
    
    console.log('✅ Cookie encontrado:', cookie.name);
  
  // Encontrar cookies relacionados (mesma categoria)
  const relatedCookies = allCookies
    .filter(c => c.slug !== slug && c.category === cookie.category)
    .slice(0, 3);
  
    res.render('product', {
      title: `${cookie.name} - Huella`,
      page: 'product',
      cookie,
      relatedCookies
    });
  } catch (error) {
    console.error('❌ Erro ao renderizar página de produto:', error);
    next(error);
  }
});

module.exports = router;

