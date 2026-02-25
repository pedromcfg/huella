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
        "url": "https://www.instagram.com/huellacookies?igsh=MW9xc2Nwdmo2dDdnYQ==",
        "icon": "fab fa-instagram",
        "handle": "@huellacookies"
      },
      {
        "name": "TikTok",
        "url": "https://www.tiktok.com/@huellacookies?_r=1&_t=ZG-92uYqHTIOAr",
        "icon": "fab fa-tiktok",
        "handle": "@huellacookies"
      },
      {
        "name": "Facebook",
        "url": "https://www.facebook.com/HuellaCookies?dl_redirect=1#no_universal_links",
        "icon": "fab fa-facebook",
        "handle": "Huella Cookies"
      },
      {
        "name": "YouTube",
        "url": "https://youtube.com/@huellacookies?si=lrm6nI4cYvnQWa-v",
        "icon": "fab fa-youtube",
        "handle": "@huellacookies"
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
        "prices": {
          "40g": { "price": "1.25€", "priceValue": 1.25 },
          "80g": { "price": "2.50€", "priceValue": 2.50 }
        },
        "hasWeightOptions": true,
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
        "prices": {
          "40g": { "price": "1.25€", "priceValue": 1.25 },
          "80g": { "price": "2.50€", "priceValue": 2.50 }
        },
        "hasWeightOptions": true,
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
        "prices": {
          "40g": { "price": "1.25€", "priceValue": 1.25 },
          "80g": { "price": "2.50€", "priceValue": 2.50 }
        },
        "hasWeightOptions": true,
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
        "prices": {
          "40g": { "price": "1.25€", "priceValue": 1.25 },
          "80g": { "price": "2.50€", "priceValue": 2.50 }
        },
        "hasWeightOptions": true,
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
        "prices": {
          "40g": { "price": "1.25€", "priceValue": 1.25 },
          "80g": { "price": "2.50€", "priceValue": 2.50 }
        },
        "hasWeightOptions": true,
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
        "prices": {
          "40g": { "price": "1.70€", "priceValue": 1.70 },
          "80g": { "price": "3.25€", "priceValue": 3.25 }
        },
        "hasWeightOptions": true,
        "image": "public/img/cookies/cookies/Red Velvet/1.jpg",
        "images": [
          "public/img/cookies/cookies/Red Velvet/1.jpg",
          "public/img/cookies/cookies/Red Velvet/2.jpg",
          "public/img/cookies/cookies/Red Velvet/3.jpg",
          "public/img/cookies/cookies/Red Velvet/4.jpg"
        ],
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
        "prices": {
          "40g": { "price": "1.70€", "priceValue": 1.70 },
          "80g": { "price": "3.25€", "priceValue": 3.25 }
        },
        "hasWeightOptions": true,
        "image": "public/img/cookies/cookies/redVelvetAvelas/1.jpg",
        "images": [
          "public/img/cookies/cookies/redVelvetAvelas/1.jpg",
          "public/img/cookies/cookies/redVelvetAvelas/2.jpg",
          "public/img/cookies/cookies/redVelvetAvelas/3.jpg",
          "public/img/cookies/cookies/redVelvetAvelas/4.jpg",
          "public/img/cookies/cookies/redVelvetAvelas/5.jpg",
          "public/img/cookies/cookies/redVelvetAvelas/6.jpg"
        ],
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
        "prices": {
          "40g": { "price": "1.70€", "priceValue": 1.70 },
          "80g": { "price": "3.25€", "priceValue": 3.25 }
        },
        "hasWeightOptions": true,
        "image": "public/img/cookies/cookies/avelasChocolate/1.jpg",
        "images": [
          "public/img/cookies/cookies/avelasChocolate/1.jpg",
          "public/img/cookies/cookies/avelasChocolate/2.jpg",
          "public/img/cookies/cookies/avelasChocolate/3.jpg",
          "public/img/cookies/cookies/avelasChocolate/4.jpg",
          "public/img/cookies/cookies/avelasChocolate/5.jpg",
          "public/img/cookies/cookies/avelasChocolate/6.jpg"
        ],
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
      "image": "public/img/ana.jpg",
      "biography": "A Huella surgiu da necessidade de conciliar prazer, saúde e responsabilidade ética na categoria de produtos de pastelaria. Fundada por mim, Ana Ribeiro, a marca nasceu a partir de experiências em cozinha caseira e de uma crescente preocupação com o impacto ambiental e animal associado ao consumo de produtos tradicionais de pastelaria, deste modo, alinhei os meus valores pessoais com a minha marca, tendo em conta que sou vegetariana. O objetivo central sempre foi claro: desenvolver cookies 100% de origem vegetal, capazes de oferecer uma experiência sensorial tão rica quanto a dos cookies clássicos, mas com uma pegada mais consciente.\n\nAo longo do processo de criação, foram testadas e aperfeiçoadas diversas receitas, substituindo ingredientes de origem animal por alternativas vegetais, sem comprometer sabor, textura ou qualidade. O resultado são cookies vegan produzidos de forma artesanal, com ingredientes selecionados e foco na consistência. Huella Cookies posiciona-se, assim, como uma marca de cookies artesanais 100% plant based que prova que é possível ter prazer máximo com responsabilidade, oferecendo indulgência \"sem culpa\" graças a uma combinação única de formato american cookie, pegada ambiental reduzida e uma abordagem moderna, próxima e divertida ao veganismo."
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
        "title": "Sustentabilidade",
        "description": "Refere-se à pegada reduzida e ao respeito pelo ambiente, promovendo um estilo de vida consciente através de produtos sem origem animal."
      },
      {
        "title": "Plant-based",
        "description": "Todos os cookies são 100% veganos, livres de ovos e leite, apelando a quem busca alternativas saudáveis e cruelty-free."
      },
      {
        "title": "Artesanal",
        "description": "Feitos à mão com imperfeições assumidas, enfatizando autenticidade, proximidade e qualidade tradicional."
      },
      {
        "title": "Irresistível",
        "description": "Posicionados como deliciosos e indulgentes, capazes de \"curar tudo\" e melhorar o humor, equilibrando prazer com consciência."
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
      "answer": "A encomenda pode ser realizada através do nosso site online ou via mensagem privada no Instagram."
    },
    {
      "question": "Qual o prazo de entrega?",
      "answer": "O prazo de entrega pode variar conforme o dia em que realizou o pedido, variando ainda de fatores externos."
    },
    {
      "question": "Fazem envios?",
      "answer": "Sim, fazemos. O cliente paga os custos do envio, via CTT, dependendo do tamanho do pedido."
    },
    {
      "question": "Posso personalizar a encomenda?",
      "answer": "Sim, deve ser conversado individualmente para analisar cada caso."
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
                       // Scroll para o topo quando carregar página de produto
                       // Pequeno delay para garantir que o conteúdo foi renderizado
                       setTimeout(() => {
                           window.scrollTo({ top: 0, behavior: 'smooth' });
                       }, 100);
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
    if (route === '/contactos') {
        // Aguardar um pouco para garantir que o DOM foi atualizado
        setTimeout(() => {
            setupContactForm();
        }, 100);
    }
    
    if (route === '/reviews') {
        // Aguardar um pouco para garantir que o DOM foi atualizado
        setTimeout(() => {
            setupReviewsPage();
        }, 100);
    }
}

// Função para configurar a página de avaliações
function setupReviewsPage() {
    // Sistema de estrelas interativo
    const stars = document.querySelectorAll('.star[data-rating]');
    const selectedRatingInput = document.getElementById('selectedRating');
    let currentRating = 0;
    let hoverRating = 0;

    if (stars.length > 0 && selectedRatingInput) {
        stars.forEach(star => {
            star.addEventListener('mouseenter', function() {
                hoverRating = parseInt(this.getAttribute('data-rating'));
                updateStarDisplay(hoverRating);
            });

            star.addEventListener('mouseleave', function() {
                updateStarDisplay(currentRating);
            });

            star.addEventListener('click', function() {
                currentRating = parseInt(this.getAttribute('data-rating'));
                selectedRatingInput.value = currentRating;
                updateStarDisplay(currentRating);
            });
        });
    }

    function updateStarDisplay(rating) {
        stars.forEach((star, index) => {
            const starRating = index + 1;
            const icon = star.querySelector('i');
            if (starRating <= rating) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                star.style.color = '#ffc107';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                star.style.color = '#ddd';
            }
        });
    }

    // Formulário de avaliação
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('reviewerName').value;
            const rating = parseInt(selectedRatingInput.value);
            const comment = document.getElementById('reviewComment').value;

            if (!name || !rating || rating === 0 || !comment) {
                alert('Por favor, preencha todos os campos e selecione uma classificação.');
                return;
            }

            // Aqui poderia enviar para um backend ou armazenar localmente
            console.log('Avaliação submetida:', { name, rating, comment });
            
            alert('Obrigado pela sua avaliação! Em breve, as avaliações serão exibidas publicamente.');
            
            // Limpar formulário
            reviewForm.reset();
            currentRating = 0;
            hoverRating = 0;
            selectedRatingInput.value = 0;
            updateStarDisplay(0);
        });
    }
}

// Função para configurar o formulário de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) {
        console.warn('Formulário de contacto não encontrado');
        return;
    }
    
    // Remover event listeners anteriores se existirem
    const newForm = contactForm.cloneNode(true);
    contactForm.parentNode.replaceChild(newForm, contactForm);
    
    // Verificar se EmailJS está disponível
    console.log('🔍 Verificando EmailJS...');
    console.log('EmailJS disponível?', typeof emailjs !== 'undefined');
    
    if (typeof emailjs === 'undefined') {
        console.error('❌ EmailJS não está carregado!');
        return;
    }
    
    // Obter dados de contacto
    const contactInfo = SITE_DATA?.site?.contact;
    if (!contactInfo) {
        console.error('❌ Dados de contacto não encontrados');
        return;
    }
    
    // Adicionar event listener ao formulário
    newForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('📝 Formulário submetido');
        
        if (!this.checkValidity()) {
            console.log('⚠️ Formulário inválido');
            this.classList.add('was-validated');
            return;
        }
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Verificar dados do formulário
        const formData = {
            name: this.querySelector('[name="name"]')?.value,
            email: this.querySelector('[name="email"]')?.value,
            title: this.querySelector('[name="title"]')?.value,
            message: this.querySelector('[name="message"]')?.value
        };
        console.log('📋 Dados do formulário:', formData);
        console.log('🔧 Service ID: service_so97otp');
        console.log('🔧 Template ID: template_ptenttp');
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
        submitBtn.disabled = true;
        
        // Send email using EmailJS
        console.log('📧 A enviar email através do EmailJS...');
        emailjs.sendForm('service_so97otp', 'template_ptenttp', this)
            .then(function(response) {
                console.log('✅ EmailJS Success!', response);
                console.log('Status:', response.status);
                console.log('Text:', response.text);
                
                // Success
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                const alert = document.createElement('div');
                alert.className = 'alert alert-success alert-dismissible fade show position-fixed';
                alert.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 350px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);';
                alert.innerHTML = '<h5><i class="fas fa-check-circle me-2"></i>Mensagem Enviada!</h5>' +
                    '<p class="mb-0">Responderemos em breve.</p>' +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                document.body.appendChild(alert);
                
                // Auto remove after 5 seconds
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.remove();
                    }
                }, 5000);
                
                // Reset form
                newForm.reset();
                newForm.classList.remove('was-validated');
            }, function(error) {
                console.error('❌ EmailJS Error completo:', error);
                console.error('Status:', error.status);
                console.error('Text:', error.text);
                console.error('Error object:', JSON.stringify(error, null, 2));
                
                // Error
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show error message with details
                const errorMsg = error.text || 'Erro desconhecido';
                const alert = document.createElement('div');
                alert.className = 'alert alert-danger alert-dismissible fade show position-fixed';
                alert.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 350px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);';
                alert.innerHTML = '<h5><i class="fas fa-exclamation-circle me-2"></i>Erro ao Enviar</h5>' +
                    '<p class="mb-0"><strong>Erro:</strong> ' + errorMsg + '</p>' +
                    '<p class="mb-0 small mt-2">Abra a consola do navegador (F12) para mais detalhes.</p>' +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                document.body.appendChild(alert);
                
                // Auto remove after 8 seconds
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.remove();
                    }
                }, 8000);
            });
    });
    
    console.log('✅ Formulário de contacto configurado com sucesso');
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


