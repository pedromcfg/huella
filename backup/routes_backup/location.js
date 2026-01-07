const express = require('express');
const router = express.Router();

// Rota Onde Estamos
router.get('/', (req, res) => {
  res.render('location', {
    title: 'Onde Estamos - Huella',
    page: 'location',
    address: {
      street: 'Travessa Dr. Barros, nº 11',
      city: 'São Mamede Infesta, Matosinhos',
      postalCode: '4465-034',
      country: 'Portugal'
    },
    contact: {
      phone: '934 506 306',
      email: 'huellacookies@gmail.com',
      hours: {
        tuesdayToSaturday: '09:30 - 19:30',
        monday: 'Fechado',
        sunday: 'Fechado'
      }
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.123456789!2d-9.139123456789!3d38.7123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQyJzQ0LjQiTiA5wrAwOCcyMC44Ilc!5e0!3m2!1spt!2spt!4v1234567890123!5m2!1spt!2spt',
    nearby: [
      {
        name: 'Parque Eduardo VII',
        distance: '5 min a pé',
        description: 'Perfeito para um piquenique com os nossos cookies'
      },
      {
        name: 'Estação de Metro Marquês de Pombal',
        distance: '3 min a pé',
        description: 'Acesso fácil por transporte público'
      },
      {
        name: 'Avenida da Liberdade',
        distance: '8 min a pé',
        description: 'Zona comercial com muitas lojas'
      }
    ],
    parking: [
      'Parque de estacionamento público a 2 minutos',
      'Estacionamento na rua (zona paga)',
      'Acesso fácil para bicicletas'
    ]
  });
});

module.exports = router;

