const express = require('express');
const router = express.Router();

// Rota Embalagem
router.get('/', (req, res) => {
  res.render('packaging', {
    title: 'Embalagem Sustentável - Huella',
    page: 'packaging',
    features: [
      {
        title: 'Materiais Ecológicos',
        description: 'Utilizamos apenas materiais 100% biodegradáveis e recicláveis',
        icon: '🌱',
        details: [
          'Papel kraft reciclado',
          'Tintas vegetais',
          'Fitas de algodão orgânico',
          'Sem plásticos'
        ]
      },
      {
        title: 'Design Minimalista',
        description: 'Um design limpo que deixa os nossos cookies serem a estrela',
        icon: '🎨',
        details: [
          'Cores naturais',
          'Tipografia elegante',
          'Foco no produto',
          'Estética moderna'
        ]
      },
      {
        title: 'Reutilização',
        description: 'As nossas caixas foram pensadas para ter uma segunda vida',
        icon: '♻️',
        details: [
          'Caixas resistentes',
          'Perfeitas para armazenamento',
          'Ideais para presentes',
          'Durabilidade garantida'
        ]
      },
      {
        title: 'Compostagem',
        description: 'Todos os materiais podem ser compostados em casa',
        icon: '🌿',
        details: [
          'Decomposição natural',
          'Sem químicos nocivos',
          'Contribui para o solo',
          'Ciclo completo'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Seleção de Materiais',
        description: 'Escolhemos cuidadosamente cada material para garantir sustentabilidade'
      },
      {
        step: 2,
        title: 'Produção Local',
        description: 'Trabalhamos com fornecedores locais para reduzir a pegada carbónica'
      },
      {
        step: 3,
        title: 'Embalagem Manual',
        description: 'Cada caixa é preparada à mão com carinho e atenção aos detalhes'
      },
      {
        step: 4,
        title: 'Entrega Consciente',
        description: 'Utilizamos embalagens de entrega também sustentáveis'
      }
    ]
  });
});

module.exports = router;

