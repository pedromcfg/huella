// Router simples para SPA
let siteData = null;

// Dados do site (inline para evitar problemas de CORS)
const SITE_DATA = {
  "site": {
    "name": "Huella",
    "title": "Huella - Cookies Artesanais",
    "address": {
      "street": "Travessa Dr. Barros, nº 11",
      "city": "São Mamede Infesta, Matosinhos",
      "postalCode": "4465-034",
      "country": "Portugal"
    },
    "contact": {
      "phone": "934 506 306",
      "email": "huellacookies@gmail.com",
      "hours": {
        "tuesdayToSaturday": "09:30 - 19:30",
        "monday": "Fechado",
        "sunday": "Fechado"
      }
    },
    "socialMedia": [
      {
        "name": "Instagram",
        "url": "https://instagram.com/huella.cookies",
        "icon": "fab fa-instagram",
        "handle": "@huella.cookies"
      },
      {
        "name": "TikTok",
        "url": "https://tiktok.com/@huella.cookies",
        "icon": "fab fa-tiktok",
        "handle": "@huella.cookies"
      },
      {
        "name": "Facebook",
        "url": "https://facebook.com/huella.cookies",
        "icon": "fab fa-facebook",
        "handle": "Huella Cookies"
      },
      {
        "name": "YouTube",
        "url": "https://youtube.com/@huella.cookies",
        "icon": "fab fa-youtube",
        "handle": "Huella Cookies"
      }
    ]
  },
  "cookies": {
    "fixed": [
      {
        "slug": "cookie-tradicional",
        "name": "Cookie Tradicional",
        "description": "Um cookie chocolate chip com uma massa cremosa, pepitas de chocolate e uma pitada de canela e sal.",
        "fullDescription": "O nosso cookie tradicional é a base perfeita para quem adora o clássico sabor de chocolate chip. Com uma massa cremosa e suave, cada mordida revela pepitas generosas de chocolate que derretem na boca. A adição de canela e sal cria um equilíbrio perfeito entre doce e salgado, tornando este cookie irresistível.",
        "price": "2.50€",
        "priceValue": 2.50,
        "image": "public/img/cookies/cookies/Tradicional/1.jpg",
        "images": [
          "public/img/cookies/cookies/Tradicional/1.jpg",
          "public/img/cookies/cookies/Tradicional/2.jpg"
        ],
        "ingredients": ["🍫 Pepitas de Chocolate", "🌿 Canela", "🧂 Sal"],
        "category": "fixo",
        "available": true,
        "vegan": true,
        "glutenFree": false
      },
      {
        "slug": "cookie-de-laranja-e-chocolate",
        "name": "Cookie de Laranja e Chocolate",
        "description": "Um cookie com a massa mais macia e equilibrada, com um toque especial.",
        "fullDescription": "Uma combinação única que surpreende o paladar! A frescura da laranja combina perfeitamente com a riqueza do chocolate, criando uma experiência de sabor inesquecível. A massa é especialmente macia e equilibrada, garantindo que cada mordida seja uma explosão de sabores harmoniosos.",
        "price": "2.50€",
        "priceValue": 2.50,
        "image": "public/img/cookies/cookies/Laranja e Chocolate/1.jpg",
        "images": [
          "public/img/cookies/cookies/Laranja e Chocolate/1.jpg",
          "public/img/cookies/cookies/Laranja e Chocolate/2.jpg",
          "public/img/cookies/cookies/Laranja e Chocolate/3.jpg",
          "public/img/cookies/cookies/Laranja e Chocolate/4.jpg"
        ],
        "ingredients": ["🍊 Laranja", "🍫 Pepitas de Chocolate", "🌿 Canela"],
        "category": "fixo",
        "available": true,
        "vegan": true,
        "glutenFree": false
      },
      {
        "slug": "cookie-de-limao-e-chia",
        "name": "Cookie de Limão e Chia",
        "description": "Uma massa com o equilíbrio perfeito entre doce e ácido, em versão crocante por fora e macia por dentro.",
        "fullDescription": "Para os amantes de sabores refrescantes! Este cookie combina a acidez do limão com a textura única da chia, criando uma experiência sensorial única. Crocante por fora e macio por dentro, cada mordida é uma surpresa. Perfeito para quem procura algo diferente mas igualmente delicioso.",
        "price": "2.50€",
        "priceValue": 2.50,
        "image": "public/img/cookies/cookies/Limão e Chia/1.jpg",
        "images": [
          "public/img/cookies/cookies/Limão e Chia/1.jpg",
          "public/img/cookies/cookies/Limão e Chia/2.jpg",
          "public/img/cookies/cookies/Limão e Chia/3.jpg",
          "public/img/cookies/cookies/Limão e Chia/4.jpg"
        ],
        "ingredients": ["🍋 Limão", "💚 Chia", "🍫 Pepitas de Chocolate"],
        "category": "fixo",
        "available": true,
        "vegan": true,
        "glutenFree": false
      },
      {
        "slug": "cookie-de-duplo-chocolate",
        "name": "Cookie de Duplo Chocolate",
        "description": "Com a massa perfeita de chocolate, para quem adora um verdadeiro docinho.",
        "fullDescription": "O paraíso para os chocólatras! Este cookie de duplo chocolate é feito com cacau de alta qualidade e pepitas generosas de chocolate, criando uma experiência intensa e indulgente. A massa é rica e cremosa, garantindo que cada mordida seja uma verdadeira celebração do sabor do chocolate.",
        "price": "2.50€",
        "priceValue": 2.50,
        "image": "public/img/cookies/cookies/Duplo Chocolate/1.jpg",
        "images": [
          "public/img/cookies/cookies/Duplo Chocolate/1.jpg",
          "public/img/cookies/cookies/Duplo Chocolate/2.jpg",
          "public/img/cookies/cookies/Duplo Chocolate/3.jpg",
          "public/img/cookies/cookies/Duplo Chocolate/4.jpg"
        ],
        "ingredients": ["🍫 Cacau", "🍫 Pepitas de Chocolate", "🧂 Sal"],
        "category": "fixo",
        "available": true,
        "vegan": true,
        "glutenFree": false
      },
      {
        "slug": "cookie-de-grao-de-bico-e-manteiga-de-amendoim",
        "name": "Cookie de Grão-de-Bico e Manteiga de Amendoim",
        "description": "Para quem gosta de algo diferente, mas igualmente delicioso. Uma massa cremosa, perfeita para acompanhar um copo de bebida vegetal!",
        "fullDescription": "Uma criação única e inovadora! Este cookie combina a textura cremosa do grão-de-bico com a riqueza da manteiga de amendoim, criando um sabor complexo e satisfatório. Perfeito para quem procura algo diferente mas igualmente delicioso. A massa cremosa é ideal para acompanhar uma bebida vegetal quente ou fria.",
        "price": "2.50€",
        "priceValue": 2.50,
        "image": "public/img/cookies/5.jpg",
        "images": ["public/img/cookies/5.jpg"],
        "ingredients": ["🍫 Pepitas de Chocolate", "🌰 Grão-de-Bico", "🌿 Canela", "🧂 Sal"],
        "category": "fixo",
        "available": true,
        "vegan": true,
        "glutenFree": false
      }
    ],
    "seasonal": [
      {
        "slug": "cookie-red-velvet",
        "name": "Cookie Red Velvet",
        "description": "Um cookie especial com sabor red velvet, cremoso e delicioso.",
        "fullDescription": "A elegância do red velvet em formato de cookie! Este cookie especial combina o sabor único do red velvet com uma textura cremosa e indulgente. Perfeito para ocasiões especiais ou para quem quer tratar-se com algo verdadeiramente especial.",
        "price": "3.25€",
        "priceValue": 3.25,
        "image": "public/img/cookies/6.jpg",
        "images": ["public/img/cookies/6.jpg"],
        "ingredients": ["🍰 Red Velvet", "🍫 Chocolate"],
        "category": "especial",
        "season": "Edição Especial",
        "available": true,
        "vegan": true,
        "glutenFree": false
      },
      {
        "slug": "cookie-de-red-velvet-e-avelas",
        "name": "Cookie de Red Velvet e Avelãs",
        "description": "A combinação perfeita de red velvet com avelãs tostadas, uma experiência única.",
        "fullDescription": "Uma combinação de luxo! O sabor elegante do red velvet encontra-se com a riqueza das avelãs tostadas, criando uma experiência de sabor sofisticada e indulgente. Cada mordida revela camadas de sabor que se complementam perfeitamente.",
        "price": "3.25€",
        "priceValue": 3.25,
        "image": "public/img/cookies/7.jpg",
        "images": ["public/img/cookies/7.jpg"],
        "ingredients": ["🍰 Red Velvet", "🌰 Avelãs Tostadas", "🍫 Chocolate"],
        "category": "especial",
        "season": "Edição Especial",
        "available": true,
        "vegan": true,
        "glutenFree": false
      },
      {
        "slug": "cookie-de-avelas-e-cacau",
        "name": "Cookie de Avelãs e Cacau",
        "description": "Um cookie rico com avelãs e cacau, para os amantes de sabores intensos.",
        "fullDescription": "Para os amantes de sabores intensos! Este cookie combina a riqueza do cacau com a textura crocante das avelãs, criando uma experiência de sabor profunda e satisfatória. Cada mordida é uma celebração dos sabores mais ricos e intensos.",
        "price": "3.25€",
        "priceValue": 3.25,
        "image": "public/img/cookies/8.jpg",
        "images": ["public/img/cookies/8.jpg"],
        "ingredients": ["🌰 Avelãs", "🍫 Cacau", "🍫 Chocolate"],
        "category": "especial",
        "season": "Edição Especial",
        "available": true,
        "vegan": true,
        "glutenFree": false
      }
    ],
    "boxes": [
      {
        "name": "Caixa Pequena",
        "description": "6 cookies variados",
        "price": "15.00€",
        "savings": "0.00€"
      },
      {
        "name": "Caixa Média",
        "description": "12 cookies variados",
        "price": "28.00€",
        "savings": "2.00€"
      },
      {
        "name": "Caixa Grande",
        "description": "24 cookies variados",
        "price": "52.00€",
        "savings": "8.00€"
      }
    ]
  },
  "about": {
    "ana": {
      "name": "Ana Ribeiro",
      "role": "Fundadora & Criadora",
      "image": "public/img/ana-ribeiro.jpg",
      "biography": "Sou a Ana Ribeiro, a criadora por trás da Huella. A minha paixão pela culinária começou na cozinha da minha avó, onde aprendi que cada receita conta uma história. Com formação em nutrição e um amor profundo pela pastelaria artesanal, decidi criar algo único: cookies que não só sabem bem, mas que também respeitam o planeta e todos os seres vivos. Cada cookie que crio é feito com dedicação, ingredientes cuidadosamente selecionados e, acima de tudo, muito amor. A Huella é mais do que um negócio para mim - é uma forma de partilhar os meus valores e criar momentos especiais para quem prova os meus cookies."
    },
    "mission": {
      "title": "Missão",
      "description": "A minha missão é criar cookies artesanais excecionais que não comprometam os valores éticos e ambientais. Cada receita é desenvolvida com o objetivo de proporcionar uma experiência única, utilizando apenas ingredientes de origem vegetal e processos sustentáveis. Quero que cada mordida seja uma celebração do sabor e da consciência ambiental.",
      "points": [
        "Criar produtos deliciosos sem ingredientes de origem animal",
        "Utilizar apenas ingredientes premium e naturais",
        "Manter processos artesanais e cuidadosos",
        "Contribuir para um futuro mais sustentável"
      ]
    },
    "values": [
      {
        "title": "Ética",
        "description": "Acredito que podemos criar produtos deliciosos sem causar sofrimento animal. Cada escolha que faço reflete os meus valores éticos e o respeito por todos os seres vivos."
      },
      {
        "title": "Sustentabilidade",
        "description": "Comprometo-me com práticas que respeitam o planeta. Desde a escolha dos ingredientes até à embalagem, cada decisão é tomada com consciência ambiental."
      },
      {
        "title": "Qualidade",
        "description": "Não comprometo a qualidade. Cada cookie é feito com ingredientes premium, selecionados cuidadosamente para garantir o melhor sabor e textura."
      },
      {
        "title": "Autenticidade",
        "description": "A Huella é uma extensão de quem sou. Cada receita, cada sabor, cada decisão reflete os meus valores pessoais e a minha paixão pela culinária."
      }
    ],
    "veganReason": {
      "title": "Porquê Cookies Veganos?",
      "description": "A escolha de criar cookies 100% veganos não é apenas uma tendência - é uma decisão fundamentada em valores profundos e na busca por uma alternativa mais ética e sustentável.",
      "reasons": [
        {
          "title": "Respeito pelos Animais",
          "text": "Acredito que podemos criar produtos deliciosos sem utilizar ingredientes de origem animal. Cada cookie vegano é uma escolha consciente que respeita a vida de todos os seres."
        },
        {
          "title": "Sustentabilidade Ambiental",
          "text": "A produção de ingredientes de origem vegetal tem um impacto ambiental significativamente menor. Ao escolher ingredientes veganos, contribuo para um planeta mais saudável e sustentável."
        },
        {
          "title": "Inclusividade",
          "text": "Os cookies veganos podem ser apreciados por todos, independentemente de restrições alimentares, crenças ou escolhas de estilo de vida. Quero que todos possam desfrutar dos meus cookies."
        },
        {
          "title": "Inovação e Criatividade",
          "text": "Criar cookies veganos desafia-me a ser mais criativa e a explorar ingredientes únicos. Esta limitação tornou-se uma oportunidade de inovação e descoberta de sabores extraordinários."
        }
      ]
    }
  },
  "faqs": [
    {
      "question": "Como posso fazer uma encomenda?",
      "answer": "Pode visitar-nos na nossa loja física em São Mamede Infesta, Matosinhos, ou entrar em contacto connosco através dos nossos contactos."
    },
    {
      "question": "Qual é o prazo de entrega?",
      "answer": "As entregas são feitas em 3 dias úteis para todo o território nacional."
    },
    {
      "question": "Os cookies são feitos com ingredientes naturais?",
      "answer": "Sim! Utilizamos apenas ingredientes premium e naturais, sem conservantes artificiais."
    },
    {
      "question": "Posso personalizar uma encomenda?",
      "answer": "Claro! Entre em contacto connosco para discutir encomendas personalizadas e especiais."
    }
  ],
  "shipping": {
    "freeShippingThreshold": 25,
    "shippingCost": 3.50,
    "deliveryTime": "3 dias úteis"
  }
};

// Carregar dados do site
async function loadSiteData() {
    if (!siteData) {
        siteData = SITE_DATA;
    }
    return siteData;
}

// Rotas disponíveis
const routes = {
    '/': 'home',
    '/quem-somos': 'about',
    '/cookies': 'cookies',
    '/onde-estamos': 'location',
    '/contactos': 'contact',
    '/faq': 'faq',
    '/reviews': 'reviews',
    '/cookie/:slug': 'product'
};

// Função para obter a rota atual
function getCurrentRoute() {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
}

// Função para navegar
function navigate(route) {
    window.location.hash = route;
    renderPage(route);
}

// Função para renderizar a página
async function renderPage(route) {
    const content = document.getElementById('app-content');
    if (!content) return;

    // Atualizar link ativo no menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-route') === route) {
            link.classList.add('active');
        }
    });

    // Atualizar título
    document.title = getPageTitle(route) + ' - Huella';

    try {
        const data = await loadSiteData();
        
        // Verificar se é uma página de produto
        if (route.startsWith('/cookie/')) {
            const slug = route.replace('/cookie/', '');
            if (typeof renderProductPage !== 'undefined') {
                content.innerHTML = await renderProductPage(slug, data);
            } else {
                content.innerHTML = '<div class="container py-5"><h1>Carregando...</h1></div>';
            }
            return;
        }

        // Renderizar página baseada na rota
        switch(route) {
            case '/':
                if (typeof renderHomePage !== 'undefined') {
                    content.innerHTML = await renderHomePage(data);
                } else {
                    content.innerHTML = '<div class="container py-5"><h1>Carregando...</h1></div>';
                }
                break;
            case '/quem-somos':
                if (typeof renderAboutPage !== 'undefined') {
                    content.innerHTML = await renderAboutPage(data);
                } else {
                    content.innerHTML = '<div class="container py-5"><h1>Carregando...</h1></div>';
                }
                break;
            case '/cookies':
                if (typeof renderCookiesPage !== 'undefined') {
                    content.innerHTML = await renderCookiesPage(data);
                } else {
                    content.innerHTML = '<div class="container py-5"><h1>Carregando...</h1></div>';
                }
                break;
            case '/onde-estamos':
                if (typeof renderLocationPage !== 'undefined') {
                    content.innerHTML = await renderLocationPage(data);
                } else {
                    content.innerHTML = '<div class="container py-5"><h1>Carregando...</h1></div>';
                }
                break;
            case '/contactos':
                if (typeof renderContactPage !== 'undefined') {
                    content.innerHTML = await renderContactPage(data);
                } else {
                    content.innerHTML = '<div class="container py-5"><h1>Carregando...</h1></div>';
                }
                break;
            case '/faq':
                if (typeof renderFAQPage !== 'undefined') {
                    content.innerHTML = await renderFAQPage(data);
                } else {
                    content.innerHTML = '<div class="container py-5"><h1>Carregando...</h1></div>';
                }
                break;
            case '/reviews':
                if (typeof renderReviewsPage !== 'undefined') {
                    content.innerHTML = await renderReviewsPage(data);
                } else {
                    content.innerHTML = '<div class="container py-5"><h1>Carregando...</h1></div>';
                }
                break;
            default:
                if (typeof render404Page !== 'undefined') {
                    content.innerHTML = await render404Page();
                } else {
                    content.innerHTML = '<div class="container py-5"><h1>404 - Página não encontrada</h1></div>';
                }
        }

        // Inicializar scripts específicos da página
        initializePageScripts(route);
    } catch (error) {
        console.error('Erro ao renderizar página:', error);
        content.innerHTML = '<div class="container py-5"><h1>Erro ao carregar a página</h1></div>';
    }
}

// Função para obter título da página
function getPageTitle(route) {
    const titles = {
        '/': 'Huella - Cookies Artesanais',
        '/quem-somos': 'Os Meus Valores',
        '/cookies': 'Os Nossos Cookies',
        '/onde-estamos': 'Onde Estamos',
        '/contactos': 'Contactos',
        '/faq': 'FAQ',
        '/reviews': 'Avaliações'
    };
    return titles[route] || 'Huella';
}

// Importar funções de renderização
// As funções serão carregadas de pages.js

async function renderAboutPage(data) {
    // Será implementado
    return '<div class="container py-5"><h1>Os Meus Valores</h1></div>';
}

async function renderCookiesPage(data) {
    // Será implementado
    return '<div class="container py-5"><h1>Os Nossos Cookies</h1></div>';
}

async function renderLocationPage(data) {
    // Será implementado
    return '<div class="container py-5"><h1>Onde Estamos</h1></div>';
}

async function renderShopPage(data) {
    return '<div class="container py-5"><h1>Loja</h1></div>';
}

async function renderContactPage(data) {
    // Será implementado
    return '<div class="container py-5"><h1>Contactos</h1></div>';
}

async function renderFAQPage(data) {
    return '<div class="container py-5"><h1>FAQ</h1></div>';
}

async function renderReviewsPage(data) {
    return '<div class="container py-5"><h1>Avaliações</h1></div>';
}

// Função renderProductPage movida para pages.js

async function render404Page() {
    return '<div class="container py-5 text-center"><h1>404</h1><p>Página não encontrada</p></div>';
}

function initializePageScripts(route) {
    // Inicializar scripts específicos da página se necessário
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Navegar para a rota inicial
    const initialRoute = getCurrentRoute();
    renderPage(initialRoute);

    // Interceptar cliques em links com data-route
    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-route]');
        if (link) {
            e.preventDefault();
            const route = link.getAttribute('data-route');
            navigate(route);
        }
    });

    // Escutar mudanças no hash
    window.addEventListener('hashchange', () => {
        const route = getCurrentRoute();
        renderPage(route);
    });
});

// Exportar funções necessárias
window.navigate = navigate;
window.getSiteData = loadSiteData;

