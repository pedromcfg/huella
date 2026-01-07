const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir ficheiros estáticos
app.use(express.static(path.join(__dirname)));

// Rota para servir index.html em todas as rotas (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🍊 Servidor Huella a correr em http://localhost:${PORT}`);
  console.log(`📱 Website estático pronto para usar!`);
  console.log(`💡 Abra index.html diretamente no navegador para usar sem servidor`);
});
