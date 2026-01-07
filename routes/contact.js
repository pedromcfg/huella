const express = require('express');
const router = express.Router();

// Rota Contactos
router.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contactos - Huella',
    page: 'contact',
    contactInfo: {
      address: {
        street: 'Rua das Flores, 123',
        city: 'Lisboa',
        postalCode: '1200-456',
        country: 'Portugal'
      },
      phone: '+351 21 123 4567',
      email: 'info@huella.pt',
      hours: {
        weekdays: '09:00 - 18:00',
        saturday: '10:00 - 16:00',
        sunday: 'Fechado'
      }
    },
    socialMedia: [
      {
        name: 'Instagram',
        url: 'https://instagram.com/huella.cookies',
        icon: 'fab fa-instagram',
        handle: '@huella.cookies'
      },
      {
        name: 'TikTok',
        url: 'https://tiktok.com/@huella.cookies',
        icon: 'fab fa-tiktok',
        handle: '@huella.cookies'
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/huella.cookies',
        icon: 'fab fa-facebook',
        handle: 'Huella Cookies'
      },
      {
        name: 'YouTube',
        url: 'https://youtube.com/@huella.cookies',
        icon: 'fab fa-youtube',
        handle: 'Huella Cookies'
      }
    ],
    faqs: [
      {
        question: 'Como posso fazer uma encomenda?',
        answer: 'Pode encomendar através da nossa loja online ou visitar-nos na nossa loja física em Lisboa.'
      },
      {
        question: 'Qual é o prazo de entrega?',
        answer: 'As entregas são feitas em 3 dias úteis para todo o território nacional.'
      },
      {
        question: 'Os cookies são feitos com ingredientes naturais?',
        answer: 'Sim! Utilizamos apenas ingredientes premium e naturais, sem conservantes artificiais.'
      },
      {
        question: 'Posso personalizar uma encomenda?',
        answer: 'Claro! Entre em contacto connosco para discutir encomendas personalizadas e especiais.'
      }
    ]
  });
});

// Rota para processar formulário de contacto (mock)
router.post('/send-message', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Simular envio de email
  console.log('Nova mensagem recebida:', { name, email, subject, message });
  
  res.json({
    success: true,
    message: 'Mensagem enviada com sucesso! Responderemos em breve.'
  });
});

module.exports = router;

