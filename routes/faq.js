const express = require('express');
const router = express.Router();

// Rota FAQ
router.get('/', (req, res) => {
  res.render('faq', {
    title: 'Perguntas Frequentes - Huella',
    page: 'faq',
    categories: [
      {
        title: 'Encomendas e Entregas',
        icon: '🚚',
        questions: [
          {
            question: 'Como posso fazer uma encomenda?',
            answer: 'Pode encomendar através da nossa loja online ou visitar-nos na nossa loja física em Lisboa. O processo é simples e rápido!'
          },
          {
            question: 'Qual é o prazo de entrega?',
            answer: 'As entregas são feitas em 3 dias úteis para todo o território nacional. Para encomendas urgentes, contacte-nos diretamente.'
          },
          {
            question: 'Há custos de envio?',
            answer: 'O envio custa 3,50€. Oferecemos envio gratuito para encomendas superiores a 25€.'
          },
          {
            question: 'Posso cancelar uma encomenda?',
            answer: 'Sim, pode cancelar a sua encomenda até 24 horas após a confirmação. Contacte-nos o mais rapidamente possível.'
          }
        ]
      },
      {
        title: 'Produtos e Ingredientes',
        icon: '🍪',
        questions: [
          {
            question: 'Os cookies são feitos com ingredientes naturais?',
            answer: 'Sim! Utilizamos apenas ingredientes premium e naturais, sem conservantes artificiais. Todos os nossos produtos são feitos à mão.'
          },
          {
            question: 'Têm opções sem glúten?',
            answer: 'Sim, temos várias opções sem glúten. Consulte a nossa secção de cookies para ver as opções disponíveis.'
          },
          {
            question: 'Os cookies contêm alergénios?',
            answer: 'Alguns dos nossos cookies contêm frutos secos, ovos e glúten. Consulte sempre a lista de ingredientes antes de encomendar.'
          },
          {
            question: 'Como devo conservar os cookies?',
            answer: 'Os cookies mantêm-se frescos por 7 dias à temperatura ambiente, num local seco. Pode também congelá-los por até 3 meses.'
          }
        ]
      },
      {
        title: 'Embalagem e Sustentabilidade',
        icon: '🌱',
        questions: [
          {
            question: 'A embalagem é ecológica?',
            answer: 'Sim! Utilizamos apenas materiais 100% biodegradáveis e recicláveis. As nossas caixas são feitas de papel kraft reciclado.'
          },
          {
            question: 'Posso reutilizar as caixas?',
            answer: 'Claro! As nossas caixas foram pensadas para ter uma segunda vida. São perfeitas para armazenamento ou presentes.'
          },
          {
            question: 'Como posso reciclar a embalagem?',
            answer: 'Toda a embalagem pode ser colocada no ecoponto azul (papel) ou amarelo (plásticos). É 100% reciclável!'
          }
        ]
      },
      {
        title: 'Encomendas Especiais',
        icon: '🎁',
        questions: [
          {
            question: 'Posso personalizar uma encomenda?',
            answer: 'Sim! Oferecemos personalização para eventos especiais, empresas e ocasiões únicas. Contacte-nos para discutir as suas necessidades.'
          },
          {
            question: 'Fazem encomendas para empresas?',
            answer: 'Claro! Trabalhamos com empresas para eventos corporativos, brindes e presentes. Oferecemos descontos para encomendas grandes.'
          },
          {
            question: 'Têm cookies sazonais?',
            answer: 'Sim! Criamos edições limitadas para diferentes épocas do ano. Consulte a nossa secção de cookies sazonais.'
          }
        ]
      }
    ]
  });
});

module.exports = router;

