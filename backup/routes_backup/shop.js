const express = require('express');
const router = express.Router();

// Rota Loja
router.get('/', (req, res) => {
  res.render('shop', {
    title: 'Loja - Huella',
    page: 'shop',
    products: [
      {
        id: 1,
        name: 'Chocolate Chip Clássico',
        description: 'O nosso cookie mais popular, com pedaços generosos de chocolate belga',
        price: 2.50,
        image: '/img/cookies/chocolate-chip.jpg',
        category: 'fixed',
        inStock: true
      },
      {
        id: 2,
        name: 'Avelã e Caramelo',
        description: 'Crocante por fora, macio por dentro, com avelãs tostadas',
        price: 2.80,
        image: '/img/cookies/hazelnut-caramel.jpg',
        category: 'fixed',
        inStock: true
      },
      {
        id: 3,
        name: 'Lavanda e Limão',
        description: 'Uma combinação única e refrescante, perfeita para o verão',
        price: 3.00,
        image: '/img/cookies/lavender-lemon.jpg',
        category: 'fixed',
        inStock: true
      },
      {
        id: 4,
        name: 'Matcha e Chocolate Branco',
        description: 'Antioxidantes do matcha com a doçura do chocolate branco',
        price: 3.20,
        image: '/img/cookies/matcha-white-chocolate.jpg',
        category: 'fixed',
        inStock: true
      },
      {
        id: 5,
        name: 'Coco e Lima',
        description: 'Tropical e refrescante, com coco ralado e lima',
        price: 2.90,
        image: '/img/cookies/coconut-lime.jpg',
        category: 'fixed',
        inStock: true
      },
      {
        id: 6,
        name: 'Pumpkin Spice',
        description: 'Edição limitada de outono com especiarias quentes',
        price: 3.20,
        image: '/img/cookies/pumpkin-spice.jpg',
        category: 'seasonal',
        inStock: true
      },
      {
        id: 7,
        name: 'Gingerbread',
        description: 'Sabor natalício com gengibre e mel',
        price: 3.50,
        image: '/img/cookies/gingerbread.jpg',
        category: 'seasonal',
        inStock: true
      }
    ],
    boxes: [
      {
        id: 8,
        name: 'Caixa Pequena',
        description: '6 cookies variados',
        price: 15.00,
        image: '/img/boxes/small-box.jpg',
        savings: 0.00,
        inStock: true
      },
      {
        id: 9,
        name: 'Caixa Média',
        description: '12 cookies variados',
        price: 28.00,
        image: '/img/boxes/medium-box.jpg',
        savings: 2.00,
        inStock: true
      },
      {
        id: 10,
        name: 'Caixa Grande',
        description: '24 cookies variados',
        price: 52.00,
        image: '/img/boxes/large-box.jpg',
        savings: 8.00,
        inStock: true
      }
    ],
    shippingInfo: {
      deliveryTime: '3 dias úteis',
      freeShippingThreshold: 25.00,
      shippingCost: 3.50
    }
  });
});

// Rota para processar encomenda (mock)
router.post('/checkout', (req, res) => {
  const { items, customerInfo, total } = req.body;
  
  // Simular processamento da encomenda
  const orderNumber = 'HUE' + Date.now().toString().slice(-6);
  
  res.json({
    success: true,
    orderNumber: orderNumber,
    message: 'Encomenda processada com sucesso! Receberá um email de confirmação em breve.',
    estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-PT')
  });
});

module.exports = router;

