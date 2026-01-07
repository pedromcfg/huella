const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir ficheiros estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importar rotas
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const cookiesRoutes = require('./routes/cookies');
const packagingRoutes = require('./routes/packaging');
const locationRoutes = require('./routes/location');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const faqRoutes = require('./routes/faq');
const reviewsRoutes = require('./routes/reviews');
const productRoutes = require('./routes/product');

// Usar rotas
app.use('/', homeRoutes);
app.use('/quem-somos', aboutRoutes);
app.use('/cookies', cookiesRoutes);
app.use('/embalagem', packagingRoutes);
app.use('/onde-estamos', locationRoutes);
app.use('/loja', shopRoutes);
app.use('/contactos', contactRoutes);
app.use('/faq', faqRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/cookie', productRoutes);

// Rota 404
app.use('*', (req, res) => {
  res.status(404).render('404', { 
    title: 'Página não encontrada - Huella',
    page: '404'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🍊 Servidor Huella a correr em http://localhost:${PORT}`);
  console.log(`📱 Website responsivo pronto para usar!`);
});

