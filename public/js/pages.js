// Funções de renderização de páginas

// Helper para escapar HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Helper para criar slug
function createSlug(name) {
    return name.toLowerCase().replace(/\s+/g, '-');
}

// Renderizar Home Page
async function renderHomePage(data) {
    const featuredCookies = data.cookies.fixed.slice(0, 3);
    const seasonalCookies = data.cookies.seasonal;
    
    let featuredHTML = featuredCookies.map(cookie => {
        const slug = cookie.slug || createSlug(cookie.name);
        const displayPrice = cookie.hasWeightOptions && cookie.prices ? cookie.prices['80g'].price : cookie.price;
        const priceValue = cookie.hasWeightOptions && cookie.prices ? cookie.prices['80g'].priceValue : (cookie.priceValue || parseFloat(cookie.price.replace('€', '').replace(',', '.')));
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card huella-card h-100">
                    <a href="#" data-route="/cookie/${slug}" class="text-decoration-none">
                        <img src="${cookie.image}" class="card-img-top" alt="${escapeHtml(cookie.name)}" style="cursor: pointer;">
                    </a>
                    <div class="card-body d-flex flex-column">
                        <a href="#" data-route="/cookie/${slug}" class="text-decoration-none">
                            <h5 class="card-title">${escapeHtml(cookie.name)}</h5>
                        </a>
                        <p class="card-text flex-grow-1">${escapeHtml(cookie.description)}</p>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <div>
                                <span class="huella-price">${escapeHtml(displayPrice)}</span>
                                ${cookie.hasWeightOptions && cookie.prices ? `<small class="text-muted d-block">(80g - ver opções)</small>` : ''}
                            </div>
                            <div class="d-flex gap-2">
                                <a href="#" data-route="/cookie/${slug}" class="btn btn-huella-outline btn-sm">
                                    <i class="fas fa-eye me-1"></i>Ver
                                </a>
                                <button class="btn btn-huella-primary btn-sm" onclick="addToCart('${slug}', '${escapeHtml(cookie.name)}', ${priceValue}, '${cookie.image}')">
                                    <i class="fas fa-plus me-1"></i>Adicionar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    let seasonalHTML = seasonalCookies.map(cookie => {
        const slug = cookie.slug || createSlug(cookie.name);
        const displayPrice = cookie.hasWeightOptions && cookie.prices ? cookie.prices['80g'].price : cookie.price;
        const priceValue = cookie.hasWeightOptions && cookie.prices ? cookie.prices['80g'].priceValue : (cookie.priceValue || parseFloat(cookie.price.replace('€', '').replace(',', '.')));
        return `
            <div class="col-lg-6 col-md-6 mb-4">
                <div class="card huella-card h-100">
                    <div class="position-relative">
                        <img src="${cookie.image}" class="card-img-top" alt="${escapeHtml(cookie.name)}">
                        <span class="position-absolute top-0 end-0 m-2 huella-badge huella-badge-seasonal">
                            <i class="fas fa-star me-1"></i>${escapeHtml(cookie.season || 'Edição Especial')}
                        </span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${escapeHtml(cookie.name)}</h5>
                        <p class="card-text flex-grow-1">${escapeHtml(cookie.description)}</p>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <div>
                                <span class="huella-price">${escapeHtml(displayPrice)}</span>
                                ${cookie.hasWeightOptions && cookie.prices ? `<small class="text-muted d-block">(80g - ver opções)</small>` : ''}
                            </div>
                            <button class="btn btn-huella-primary btn-sm" onclick="addToCart('${slug}', '${escapeHtml(cookie.name)}', ${priceValue}, '${cookie.image}')">
                                <i class="fas fa-plus me-1"></i>Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <!-- Hero Section -->
        <section class="huella-hero">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <h1 class="huella-fade-in">Cookies Artesanais "sin Huella"</h1>
                        <p class="lead huella-fade-in">Mais do que cookies, são uma obra de arte feita à mão, sem ingredientes de origens animal. Descobre os sabores únicos que podes partilhar.</p>
                        <div class="d-flex gap-3 huella-fade-in">
                            <a href="#" data-route="/cookies" class="btn btn-huella-primary btn-lg">
                                <i class="fas fa-shopping-cart me-2"></i>Encomenda Já
                            </a>
                            <a href="#" data-route="/cookies" class="btn btn-huella-outline btn-lg">
                                <i class="fas fa-cookie-bite me-2"></i>Ver Sabores
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center">
                        <img src="public/img/cookies/cookies/Tradicional/1.jpg" alt="Cookies Huella" class="img-fluid huella-fade-in" style="max-height: 500px; border-radius: 15px;">
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Quote -->
        <section class="py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <blockquote class="huella-quote">
                            "Na Huella acreditamos que cada trinca deve ser algo inesquecível, por isso criamos bolachas que não só sabem bem como contam uma história."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Cookies -->
        <section class="huella-section huella-section-alt">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="huella-title">Os Nossos Favoritos</h2>
                        <p class="huella-text">Sabores que conquistaram o coração dos nossos clientes</p>
                    </div>
                </div>
                <div class="row">
                    ${featuredHTML}
                </div>
                <div class="row mt-4">
                    <div class="col-12 text-center">
                        <a href="#" data-route="/cookies" class="btn btn-huella-secondary">
                            <i class="fas fa-cookie-bite me-2"></i>Ver Todos os Sabores
                        </a>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 text-center">
                        <p class="text-muted small mb-0">
                            <i class="fas fa-info-circle me-1"></i>
                            <a href="https://storage2.me-qr.com/pdf/649bb67c-aaa1-4b66-9a5b-85050aa47939.pdf" target="_blank" class="text-huella-green text-decoration-none">
                                Consulte a informação nutricional completa
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Seasonal Cookies -->
        <section class="huella-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="huella-title">Edições Limitadas</h2>
                        <p class="huella-text">Sabores especiais que aparecem apenas em certas épocas do ano</p>
                    </div>
                </div>
                <div class="row">
                    ${seasonalHTML}
                </div>
            </div>
        </section>
    `;
}

// Renderizar About Page
async function renderAboutPage(data) {
    const about = data.about;
    const missionPoints = about.mission.points.map(point => `
        <div class="col-md-6 mb-3">
            <div class="d-flex align-items-start">
                <i class="fas fa-check-circle text-huella-green me-3 mt-1" style="font-size: 1.5rem;"></i>
                <p class="huella-text mb-0">${escapeHtml(point)}</p>
            </div>
        </div>
    `).join('');

    const valuesHTML = about.values.map(value => `
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="huella-card h-100 p-4">
                <h5 class="text-huella-green mb-3">${escapeHtml(value.title)}</h5>
                <p class="huella-text mb-0">${escapeHtml(value.description)}</p>
            </div>
        </div>
    `).join('');

    const veganReasonsHTML = about.veganReason.reasons.map(reason => `
        <div class="col-lg-6 mb-4">
            <div class="huella-card h-100 p-4">
                <h5 class="text-huella-orange mb-3">
                    <i class="fas fa-heart me-2"></i>${escapeHtml(reason.title)}
                </h5>
                <p class="huella-text">${escapeHtml(reason.text)}</p>
            </div>
        </div>
    `).join('');

    return `
        <!-- Hero Section -->
        <section class="huella-hero">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 text-center">
                        <h1 class="huella-fade-in">Os Meus Valores</h1>
                        <p class="lead huella-fade-in">Conheça a história por trás da Huella e os valores que guiam cada receita, cada ingrediente e cada decisão.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Ana Ribeiro Section -->
        <section class="huella-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-center mb-4 mb-lg-0">
                        <img src="${about.ana.image}" alt="${escapeHtml(about.ana.name)}" class="img-fluid rounded-circle huella-card" style="width: 300px; height: 300px; object-fit: cover; border: 5px solid var(--huella-orange);">
                    </div>
                    <div class="col-lg-8">
                        <h2 class="huella-title">${escapeHtml(about.ana.name)}</h2>
                        <p class="text-huella-orange fw-bold mb-3" style="font-size: 1.2rem;">${escapeHtml(about.ana.role)}</p>
                        <div class="huella-text" style="font-size: 1.1rem; line-height: 1.8; white-space: pre-line;">${escapeHtml(about.ana.biography)}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission Section -->
        <section class="huella-section huella-section-alt">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="text-center mb-5">
                            <h2 class="huella-title">${escapeHtml(about.mission.title)}</h2>
                        </div>
                        <div class="huella-card p-4 mb-4">
                            <p class="huella-text" style="font-size: 1.1rem; line-height: 1.8;">${escapeHtml(about.mission.description)}</p>
                        </div>
                        <div class="row">
                            ${missionPoints}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values Section -->
        <section class="huella-section huella-section-green">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="text-white">Os Meus Valores</h2>
                        <p class="text-white-50">Princípios que guiam tudo o que faço</p>
                    </div>
                </div>
                <div class="row">
                    ${valuesHTML}
                </div>
            </div>
        </section>

        <!-- Why Vegan Section -->
        <section class="huella-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="huella-title">${escapeHtml(about.veganReason.title)}</h2>
                        <p class="huella-text lead">${escapeHtml(about.veganReason.description)}</p>
                    </div>
                </div>
                <div class="row">
                    ${veganReasonsHTML}
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="huella-section huella-section-orange">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-3">Faça Parte da Nossa História</h2>
                        <p class="text-white-50 mb-4">Junte-se a quem já descobriu o sabor único dos nossos cookies artesanais veganos.</p>
                        <div class="d-flex gap-3 justify-content-center">
                            <a href="#" data-route="/cookies" class="btn btn-light btn-lg">
                                <i class="fas fa-shopping-cart me-2"></i>Encomendar Agora
                            </a>
                            <a href="#" data-route="/contactos" class="btn btn-outline-light btn-lg">
                                <i class="fas fa-envelope me-2"></i>Contactar-me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Renderizar Cookies Page
async function renderCookiesPage(data) {
    const fixedCookies = data.cookies.fixed;
    const seasonalCookies = data.cookies.seasonal;
    const boxes = data.cookies.boxes;

    const fixedHTML = fixedCookies.map(cookie => {
        const slug = cookie.slug || createSlug(cookie.name);
        const displayPrice = cookie.hasWeightOptions && cookie.prices ? cookie.prices['80g'].price : cookie.price;
        const priceValue = cookie.hasWeightOptions && cookie.prices ? cookie.prices['80g'].priceValue : (cookie.priceValue || parseFloat(cookie.price.replace('€', '').replace(',', '.')));
        const ingredientsHTML = cookie.ingredients.map(ing => `<li><i class="fas fa-check text-huella-green me-2"></i>${escapeHtml(ing)}</li>`).join('');
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card huella-card h-100">
                    <a href="#" data-route="/cookie/${slug}" class="text-decoration-none">
                        <img src="${cookie.image}" class="card-img-top" alt="${escapeHtml(cookie.name)}" style="cursor: pointer;">
                    </a>
                    <div class="card-body d-flex flex-column">
                        <a href="#" data-route="/cookie/${slug}" class="text-decoration-none">
                            <h5 class="card-title">${escapeHtml(cookie.name)}</h5>
                        </a>
                        <p class="card-text flex-grow-1">${escapeHtml(cookie.description)}</p>
                        <div class="mb-3">
                            <h6 class="text-huella-orange">O segredo está aqui:</h6>
                            <ul class="list-unstyled small">
                                ${ingredientsHTML}
                            </ul>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <div>
                                <span class="huella-price">${escapeHtml(displayPrice)}</span>
                                ${cookie.hasWeightOptions && cookie.prices ? `<small class="text-muted d-block">(80g - ver opções)</small>` : ''}
                            </div>
                            <div class="d-flex gap-2">
                                <a href="#" data-route="/cookie/${slug}" class="btn btn-huella-outline btn-sm">
                                    <i class="fas fa-eye me-1"></i>Ver
                                </a>
                                <button class="btn btn-huella-primary btn-sm" onclick="addToCart('${slug}', '${escapeHtml(cookie.name)}', ${priceValue}, '${cookie.image}')">
                                    <i class="fas fa-plus me-1"></i>Adicionar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const seasonalHTML = seasonalCookies.map(cookie => {
        const slug = cookie.slug || createSlug(cookie.name);
        const displayPrice = cookie.hasWeightOptions && cookie.prices ? cookie.prices['80g'].price : cookie.price;
        const priceValue = cookie.hasWeightOptions && cookie.prices ? cookie.prices['80g'].priceValue : (cookie.priceValue || parseFloat(cookie.price.replace('€', '').replace(',', '.')));
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card huella-card h-100">
                    <div class="position-relative">
                        <img src="${cookie.image}" class="card-img-top" alt="${escapeHtml(cookie.name)}">
                        <span class="position-absolute top-0 end-0 m-2 huella-badge huella-badge-seasonal">
                            <i class="fas fa-star me-1"></i>${escapeHtml(cookie.season || 'Edição Especial')}
                        </span>
                        ${!cookie.available ? '<span class="position-absolute top-0 start-0 m-2 huella-badge bg-secondary">Esgotado</span>' : ''}
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${escapeHtml(cookie.name)}</h5>
                        <p class="card-text flex-grow-1">${escapeHtml(cookie.description)}</p>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <div>
                                <span class="huella-price">${escapeHtml(displayPrice)}</span>
                                ${cookie.hasWeightOptions && cookie.prices ? `<small class="text-muted d-block">(80g - ver opções)</small>` : ''}
                            </div>
                            <button class="btn btn-huella-primary btn-sm" ${!cookie.available ? 'disabled' : ''} onclick="${cookie.available ? `addToCart('${slug}', '${escapeHtml(cookie.name)}', ${priceValue}, '${cookie.image}')` : ''}">
                                <i class="fas fa-plus me-1"></i>${cookie.available ? 'Adicionar' : 'Esgotado'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const boxesHTML = boxes.map(box => {
        const slug = createSlug(box.name);
        const priceValue = parseFloat(box.price.replace('€', '').replace(',', '.'));
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card huella-card h-100">
                    <div class="card-body text-center d-flex flex-column">
                        <h5 class="card-title">${escapeHtml(box.name)}</h5>
                        <p class="card-text flex-grow-1">${escapeHtml(box.description)}</p>
                        <div class="mb-3">
                            <span class="huella-price">${escapeHtml(box.price)}</span>
                            ${parseFloat(box.savings) > 0 ? `<small class="text-success d-block">Poupe ${box.savings}€</small>` : ''}
                        </div>
                        <button class="btn btn-huella-primary" onclick="addToCart('${slug}', '${escapeHtml(box.name)}', ${priceValue}, 'public/img/boxes/${slug}.jpg')">
                            <i class="fas fa-shopping-cart me-2"></i>Encomendar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <!-- Hero Section -->
        <section class="huella-hero">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 text-center">
                        <h1 class="huella-fade-in">Os Nossos Cookies</h1>
                        <p class="lead huella-fade-in">Descubra a nossa coleção de sabores únicos, desde os clássicos que todos adoram até às criações mais inovadoras.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Fixed Cookies -->
        <section class="huella-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="huella-title">Sabores Fixos</h2>
                        <p class="huella-text">Os nossos cookies clássicos, sempre disponíveis</p>
                    </div>
                </div>
                <div class="row">
                    ${fixedHTML}
                </div>
            </div>
        </section>

        <!-- Seasonal Cookies -->
        <section class="huella-section huella-section-alt">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="huella-title">Edições Especiais</h2>
                        <p class="huella-text">Sabores especiais únicos e deliciosos</p>
                    </div>
                </div>
                <div class="row">
                    ${seasonalHTML}
                </div>
            </div>
        </section>

        <!-- Mixed Boxes -->
        <section class="huella-section huella-section-green">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="text-white">Caixas Mistas</h2>
                        <p class="text-white-50">Perfeitas para experimentar vários sabores ou oferecer</p>
                    </div>
                </div>
                <div class="row">
                    ${boxesHTML}
                </div>
            </div>
        </section>

        <!-- Nutritional Information -->
        <section class="huella-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="huella-card p-4 text-center" style="background: linear-gradient(135deg, var(--huella-green) 0%, var(--huella-yellow) 100%);">
                            <div class="mb-3">
                                <i class="fas fa-clipboard-list text-white" style="font-size: 3rem;"></i>
                            </div>
                            <h3 class="text-white mb-3">Informação Nutricional</h3>
                            <p class="text-white mb-4">Consulte a informação nutricional completa de todos os nossos cookies, incluindo valores energéticos, macronutrientes e ingredientes detalhados.</p>
                            <a href="https://storage2.me-qr.com/pdf/649bb67c-aaa1-4b66-9a5b-85050aa47939.pdf" target="_blank" class="btn btn-light btn-lg">
                                <i class="fas fa-file-pdf me-2"></i>Ver Informação Nutricional Completa
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="huella-section huella-section-orange">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-3">Pronto para Experimentar?</h2>
                        <p class="text-white-50 mb-4">Escolha os seus sabores favoritos e receba cookies frescos em casa</p>
                        <div class="d-flex gap-3 justify-content-center">
                            <a href="#" data-route="/cookies" class="btn btn-light btn-lg">
                                <i class="fas fa-shopping-cart me-2"></i>Encomendar Agora
                            </a>
                            <a href="#" data-route="/contactos" class="btn btn-outline-light btn-lg">
                                <i class="fas fa-question-circle me-2"></i>Dúvidas?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script>
        // Setup contact form validation
        (function() {
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    if (!this.checkValidity()) {
                        this.classList.add('was-validated');
                        return;
                    }
                    
                    const submitBtn = this.querySelector('button[type="submit"]');
                    const originalText = submitBtn.innerHTML;
                    
                    // Show loading state
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
                    submitBtn.disabled = true;
                    
                    // Simulate form submission
                    setTimeout(() => {
                        // Reset button
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
                        this.reset();
                        this.classList.remove('was-validated');
                    }, 2000);
                });
            }
        })();
        </script>
    `;
}

// Renderizar Location Page
async function renderLocationPage(data) {
    const address = data.site.address;
    const contact = data.site.contact;
    // Construir endereço completo para o mapa
    const fullAddress = `${address.street}, ${address.postalCode} ${address.city}, ${address.country}`;
    // Usar formato simples do Google Maps que funciona sem API key
    // Este formato usa a pesquisa do Google Maps e converte para embed
    const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return `
        <!-- Hero Section -->
        <section class="huella-hero">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 text-center">
                        <h1 class="huella-fade-in">Onde Estamos</h1>
                        <p class="lead huella-fade-in">Visite-nos na nossa loja em São Mamede Infesta, Matosinhos e descubra o sabor dos nossos cookies frescos.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Address and Contact -->
        <section class="huella-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="huella-card h-100">
                            <div class="card-body">
                                <h3 class="card-title text-huella-green mb-4">
                                    <i class="fas fa-map-marker-alt me-2"></i>Morada
                                </h3>
                                <div class="mb-4">
                                    <p class="mb-2">
                                        <strong>${escapeHtml(address.street)}</strong><br>
                                        ${escapeHtml(address.postalCode)} ${escapeHtml(address.city)}<br>
                                        ${escapeHtml(address.country)}
                                    </p>
                                </div>
                                
                                <h5 class="text-huella-orange mb-3">
                                    <i class="fas fa-phone me-2"></i>Contactos
                                </h5>
                                <div class="mb-4">
                                    <p class="mb-2">
                                        <i class="fas fa-phone text-huella-green me-2"></i>
                                        <a href="tel:${contact.phone}" class="text-decoration-none">${escapeHtml(contact.phone)}</a>
                                    </p>
                                    <p class="mb-2">
                                        <i class="fas fa-envelope text-huella-green me-2"></i>
                                        <a href="mailto:${contact.email}" class="text-decoration-none">${escapeHtml(contact.email)}</a>
                                    </p>
                                </div>
                                
                                <h5 class="text-huella-orange mb-3">
                                    <i class="fas fa-clock me-2"></i>Horários
                                </h5>
                                <div class="mb-4">
                                    <p class="mb-1"><strong>Terça a Sábado:</strong> ${escapeHtml(contact.hours.tuesdayToSaturday)}</p>
                                    <p class="mb-1"><strong>Segunda:</strong> ${escapeHtml(contact.hours.monday)}</p>
                                    <p class="mb-1"><strong>Domingo:</strong> ${escapeHtml(contact.hours.sunday)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 mb-4">
                        <div class="huella-card h-100">
                            <div class="card-body">
                                <h3 class="card-title text-huella-green mb-4">
                                    <i class="fas fa-map me-2"></i>Localização
                                </h3>
                                <div class="map-container" style="height: 300px; border-radius: 10px; overflow: hidden; position: relative;">
                                    <iframe 
                                        src="${mapEmbed}" 
                                        width="100%" 
                                        height="100%" 
                                        style="border:0;" 
                                        allowfullscreen="" 
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade"
                                        frameborder="0">
                                    </iframe>
                                </div>
                                <div class="mt-3">
                                    <a href="https://maps.google.com/?q=${encodeURIComponent(fullAddress)}" target="_blank" class="btn btn-huella-primary">
                                        <i class="fas fa-directions me-2"></i>Obter Direções
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="huella-section huella-section-orange">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-3">Visite-nos Hoje!</h2>
                        <p class="text-white-50 mb-4">Venha conhecer o sabor único dos nossos cookies frescos e a nossa equipa acolhedora.</p>
                        <div class="d-flex gap-3 justify-content-center">
                            <a href="https://maps.google.com/?q=${encodeURIComponent(fullAddress)}" target="_blank" class="btn btn-light btn-lg">
                                <i class="fas fa-directions me-2"></i>Obter Direções
                            </a>
                            <a href="#" data-route="/contactos" class="btn btn-outline-light btn-lg">
                                <i class="fas fa-phone me-2"></i>Ligar Agora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Renderizar Contact Page
async function renderContactPage(data) {
    const contactInfo = data.site;
    const socialMedia = data.site.socialMedia;
    const faqs = data.faqs.slice(0, 4);
    
    // Criar URL do mapa
    const fullAddress = `${contactInfo.address.street}, ${contactInfo.address.postalCode} ${contactInfo.address.city}, ${contactInfo.address.country}`;
    const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    const socialHTML = socialMedia.map(social => `
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="card huella-card h-100 text-center">
                <div class="card-body">
                    <div class="mb-3">
                        <i class="${social.icon} fa-3x text-huella-orange"></i>
                    </div>
                    <h5 class="card-title">${escapeHtml(social.name)}</h5>
                    <p class="card-text">${escapeHtml(social.handle)}</p>
                    <a href="${social.url}" target="_blank" class="btn btn-huella-outline">
                        <i class="${social.icon} me-2"></i>Seguir
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    const faqsHTML = faqs.map(faq => `
        <div class="card huella-card mb-3">
            <div class="card-body">
                <h6 class="card-title text-huella-orange">${escapeHtml(faq.question)}</h6>
                <p class="card-text">${escapeHtml(faq.answer)}</p>
            </div>
        </div>
    `).join('');

    return `
        <!-- Hero Section -->
        <section class="huella-hero">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 text-center">
                        <h1 class="huella-fade-in">Contactos</h1>
                        <p class="lead huella-fade-in">Estamos aqui para si! Entre em contacto connosco para qualquer dúvida, sugestão ou encomenda especial.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Form -->
        <section class="huella-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 mb-4">
                        <div class="huella-card h-100">
                            <div class="card-body">
                                <h3 class="card-title text-huella-green mb-4">
                                    <i class="fas fa-envelope me-2"></i>Envie-nos uma Mensagem
                                </h3>
                                
                                <!-- Contact Quick Info -->
                                <div class="contact-quick-info mb-4 p-3 rounded" style="background: linear-gradient(135deg, rgba(244, 122, 32, 0.1) 0%, rgba(29, 81, 46, 0.1) 100%); border-left: 4px solid var(--huella-orange);">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <div class="d-flex align-items-center">
                                                <div class="contact-icon-wrapper me-3" style="width: 45px; height: 45px; background-color: var(--huella-orange); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                                    <i class="fas fa-phone text-white"></i>
                                                </div>
                                                <div>
                                                    <small class="text-muted d-block">Telefone</small>
                                                    <a href="tel:${contactInfo.contact.phone}" class="text-huella-green fw-bold text-decoration-none">${escapeHtml(contactInfo.contact.phone)}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-flex align-items-center">
                                                <div class="contact-icon-wrapper me-3" style="width: 45px; height: 45px; background-color: var(--huella-green); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                                    <i class="fas fa-envelope text-white"></i>
                                                </div>
                                                <div>
                                                    <small class="text-muted d-block">Email</small>
                                                    <a href="mailto:${contactInfo.contact.email}" class="text-huella-green fw-bold text-decoration-none">${escapeHtml(contactInfo.contact.email)}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <form id="contactForm" class="needs-validation" novalidate>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="name" class="huella-form-label">
                                                <i class="fas fa-user me-1"></i>Nome *
                                            </label>
                                            <input type="text" class="form-control huella-form-control" id="name" placeholder="O seu nome completo" required>
                                            <div class="invalid-feedback">Por favor, insira o seu nome.</div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="email" class="huella-form-label">
                                                <i class="fas fa-envelope me-1"></i>Email *
                                            </label>
                                            <input type="email" class="form-control huella-form-control" id="email" placeholder="seu@email.com" required>
                                            <div class="invalid-feedback">Por favor, insira um email válido.</div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="subject" class="huella-form-label">
                                            <i class="fas fa-tag me-1"></i>Assunto *
                                        </label>
                                        <select class="form-select huella-form-control" id="subject" required>
                                            <option value="">Selecione um assunto</option>
                                            <option value="encomenda">Encomenda</option>
                                            <option value="duvida">Dúvida sobre produtos</option>
                                            <option value="sugestao">Sugestão</option>
                                            <option value="reclamacao">Reclamação</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                        <div class="invalid-feedback">Por favor, selecione um assunto.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="message" class="huella-form-label">
                                            <i class="fas fa-comment me-1"></i>Mensagem *
                                        </label>
                                        <textarea class="form-control huella-form-control" id="message" rows="5" placeholder="Escreva a sua mensagem aqui..." required></textarea>
                                        <div class="invalid-feedback">Por favor, escreva uma mensagem.</div>
                                    </div>
                                    <button type="submit" class="btn btn-huella-primary w-100">
                                        <i class="fas fa-paper-plane me-2"></i>Enviar Mensagem
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Social Media -->
        <section class="huella-section huella-section-alt">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="huella-title">Siga-nos nas Redes Sociais</h2>
                        <p class="huella-text">Mantenha-se atualizado com as nossas novidades e receitas</p>
                    </div>
                </div>
                <div class="row">
                    ${socialHTML}
                </div>
            </div>
        </section>

        <!-- FAQ Preview -->
        <section class="huella-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="huella-title">Perguntas Frequentes</h2>
                        <p class="huella-text">Respostas às questões mais comuns</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        ${faqsHTML}
                        <div class="text-center mt-4">
                            <a href="#" data-route="/faq" class="btn btn-huella-primary">
                                <i class="fas fa-question-circle me-2"></i>Ver Todas as Perguntas
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Map -->
        <section class="huella-section huella-section-green">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="text-white">Encontre-nos</h2>
                        <p class="text-white-50">Visite-nos na nossa loja em São Mamede Infesta, Matosinhos</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="huella-card">
                            <div class="card-body p-0">
                                <div class="map-container" style="height: 400px; border-radius: 10px; overflow: hidden;">
                                    <iframe 
                                        src="${mapEmbed}" 
                                        width="100%" 
                                        height="100%" 
                                        style="border:0;" 
                                        allowfullscreen="" 
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="huella-section huella-section-orange">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-3">Pronto para Encomendar?</h2>
                        <p class="text-white-50 mb-4">Descubra todos os sabores disponíveis e escolha os seus favoritos.</p>
                        <div class="d-flex gap-3 justify-content-center">
                            <a href="#" data-route="/cookies" class="btn btn-light btn-lg">
                                <i class="fas fa-shopping-cart me-2"></i>Encomendar Agora
                            </a>
                            <a href="tel:${contactInfo.contact.phone}" class="btn btn-outline-light btn-lg">
                                <i class="fas fa-phone me-2"></i>Ligar Agora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Renderizar Product Page
async function renderProductPage(slug, data) {
    const allCookies = [...data.cookies.fixed, ...data.cookies.seasonal];
    const cookie = allCookies.find(c => c.slug === slug);
    
    if (!cookie) {
        return await render404Page();
    }

    const relatedCookies = allCookies
        .filter(c => c.slug !== slug && c.category === cookie.category)
        .slice(0, 3);

    const imagesHTML = cookie.images && cookie.images.length > 1 ? cookie.images.map((img, index) => `
        <img src="${img}" alt="${escapeHtml(cookie.name)} - Imagem ${index + 1}" 
             class="img-thumbnail ${index === 0 ? 'active' : ''}" 
             style="width: 100px; height: 100px; object-fit: cover; cursor: pointer; border: 2px solid ${index === 0 ? 'var(--huella-orange)' : '#ddd'};"
             onclick="changeMainImage('${img}', this)">
    `).join('') : '';

    const ingredientsHTML = cookie.ingredients.map(ing => `
        <li class="mb-2">
            <i class="fas fa-check-circle text-huella-green me-2"></i>
            <span style="font-size: 1.1rem;">${escapeHtml(ing)}</span>
        </li>
    `).join('');

    const badgesHTML = `
        ${cookie.vegan ? '<span class="huella-badge bg-huella-green text-white"><i class="fas fa-leaf me-1"></i>Vegano</span>' : ''}
        ${cookie.glutenFree ? '<span class="huella-badge bg-huella-yellow text-huella-green"><i class="fas fa-seedling me-1"></i>Sem Glúten</span>' : ''}
        ${cookie.category === 'especial' ? '<span class="huella-badge huella-badge-seasonal"><i class="fas fa-star me-1"></i>Edição Especial</span>' : ''}
    `;

    const relatedHTML = relatedCookies.map(related => {
        const relatedSlug = related.slug || createSlug(related.name);
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card huella-card h-100">
                    <a href="#" data-route="/cookie/${relatedSlug}" class="text-decoration-none">
                        <img src="${related.image}" class="card-img-top" alt="${escapeHtml(related.name)}">
                    </a>
                    <div class="card-body d-flex flex-column">
                        <a href="#" data-route="/cookie/${relatedSlug}" class="text-decoration-none">
                            <h5 class="card-title">${escapeHtml(related.name)}</h5>
                        </a>
                        <p class="card-text flex-grow-1">${escapeHtml(related.description)}</p>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <span class="huella-price">${escapeHtml(related.price)}</span>
                            <a href="#" data-route="/cookie/${relatedSlug}" class="btn btn-huella-outline btn-sm">
                                <i class="fas fa-eye me-1"></i>Ver
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <!-- Product Hero Section -->
        <section class="huella-section" style="padding-top: 2rem;">
            <div class="container">
                <nav aria-label="breadcrumb" class="mb-4">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#" data-route="/" class="text-huella-orange">Home</a></li>
                        <li class="breadcrumb-item"><a href="#" data-route="/cookies" class="text-huella-orange">Cookies</a></li>
                        <li class="breadcrumb-item active" aria-current="page">${escapeHtml(cookie.name)}</li>
                    </ol>
                </nav>
            </div>
        </section>

        <!-- Product Details Section -->
        <section class="huella-section">
            <div class="container">
                <div class="row">
                    <!-- Product Images -->
                    <div class="col-lg-6 mb-4">
                        <div class="product-main-image mb-3">
                            <img id="mainProductImage" src="${cookie.image}" alt="${escapeHtml(cookie.name)}" class="img-fluid rounded huella-card" style="width: 100%; height: 500px; object-fit: cover; cursor: pointer;" onclick="openImageModal('${cookie.image}')">
                        </div>
                        ${imagesHTML ? `<div class="product-thumbnails d-flex gap-2 flex-wrap">${imagesHTML}</div>` : ''}
                    </div>

                    <!-- Product Info -->
                    <div class="col-lg-6">
                        <div class="product-info">
                            <h1 class="huella-title mb-3">${escapeHtml(cookie.name)}</h1>
                            
                            <div class="d-flex align-items-center gap-3 mb-3">
                                <span class="huella-price" id="productPriceDisplay" style="font-size: 2rem;">${escapeHtml(cookie.hasWeightOptions && cookie.prices ? cookie.prices['80g'].price : cookie.price)}</span>
                                ${badgesHTML}
                            </div>

                            <p class="lead mb-4">${escapeHtml(cookie.description)}</p>
                            
                            <div class="mb-4">
                                <h5 class="text-huella-orange mb-3">O segredo está aqui:</h5>
                                <ul class="list-unstyled">
                                    ${ingredientsHTML}
                                </ul>
                            </div>

                            <div class="mb-4">
                                <h5 class="text-huella-green mb-3">Descrição Completa</h5>
                                <p class="huella-text">${escapeHtml(cookie.fullDescription || cookie.description)}</p>
                            </div>

                            <div class="mb-4">
                                <div class="huella-card p-3" style="background-color: #f8f9fa; border-left: 4px solid var(--huella-green);">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h6 class="text-huella-green mb-1">
                                                <i class="fas fa-clipboard-list me-2"></i>Informação Nutricional
                                            </h6>
                                            <p class="small mb-0 text-muted">Consulte os valores nutricionais e ingredientes detalhados</p>
                                        </div>
                                        <a href="https://storage2.me-qr.com/pdf/649bb67c-aaa1-4b66-9a5b-85050aa47939.pdf" target="_blank" class="btn btn-huella-outline btn-sm">
                                            <i class="fas fa-file-pdf me-1"></i>Ver PDF
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="product-actions mb-4">
                                ${cookie.hasWeightOptions && cookie.prices ? `
                                <div class="mb-3">
                                    <label class="text-huella-green fw-bold mb-2 d-block">Peso:</label>
                                    <div class="btn-group w-100" role="group">
                                        <input type="radio" class="btn-check" name="productWeight" id="weight40g" value="40g" autocomplete="off" onchange="updateProductPrice('40g', ${cookie.prices['40g'].priceValue})">
                                        <label class="btn btn-outline-huella-orange" for="weight40g">40g - ${escapeHtml(cookie.prices['40g'].price)}</label>
                                        
                                        <input type="radio" class="btn-check" name="productWeight" id="weight80g" value="80g" autocomplete="off" checked onchange="updateProductPrice('80g', ${cookie.prices['80g'].priceValue})">
                                        <label class="btn btn-outline-huella-orange active" for="weight80g">80g - ${escapeHtml(cookie.prices['80g'].price)}</label>
                                    </div>
                                </div>
                                ` : ''}
                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <label class="text-huella-green fw-bold">Quantidade:</label>
                                    <div class="quantity-selector d-flex align-items-center gap-2">
                                        <button class="btn btn-outline-secondary quantity-btn" onclick="decreaseQuantity()">-</button>
                                        <input type="number" id="productQuantity" class="form-control text-center" value="1" min="1" max="20" style="width: 80px;">
                                        <button class="btn btn-outline-secondary quantity-btn" onclick="increaseQuantity()">+</button>
                                    </div>
                                </div>
                                <button class="btn btn-huella-primary btn-lg w-100 mb-2" onclick="addToCartFromProduct()">
                                    <i class="fas fa-shopping-cart me-2"></i>Adicionar ao Carrinho
                                </button>
                                <button class="btn btn-huella-outline btn-lg w-100" onclick="shareProduct()">
                                    <i class="fas fa-share-alt me-2"></i>Partilhar
                                </button>
                            </div>

                            <div class="product-features">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-truck text-huella-orange me-2" style="font-size: 1.5rem;"></i>
                                            <div>
                                                <strong>Entrega Rápida</strong>
                                                <p class="small mb-0">3 dias úteis</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-award text-huella-green me-2" style="font-size: 1.5rem;"></i>
                                            <div>
                                                <strong>Qualidade Premium</strong>
                                                <p class="small mb-0">Ingredientes selecionados</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-box text-huella-yellow me-2" style="font-size: 1.5rem;"></i>
                                            <div>
                                                <strong>Embalagem Especial</strong>
                                                <p class="small mb-0">Sustentável e bonita</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-heart text-huella-orange me-2" style="font-size: 1.5rem;"></i>
                                            <div>
                                                <strong>Feito com Amor</strong>
                                                <p class="small mb-0">Artesanal e único</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        ${relatedCookies.length > 0 ? `
        <!-- Related Products -->
        <section class="huella-section huella-section-alt">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="huella-title">Produtos Relacionados</h2>
                        <p class="huella-text">Outros sabores que pode gostar</p>
                    </div>
                </div>
                <div class="row">
                    ${relatedHTML}
                </div>
            </div>
        </section>
        ` : ''}

        <!-- Image Modal -->
        <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-transparent border-0">
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img id="modalImage" src="" alt="${escapeHtml(cookie.name)}" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        </div>

        <script>
        // Product-specific JavaScript
        const productData = {
            id: '${cookie.slug}',
            name: '${escapeHtml(cookie.name).replace(/'/g, "\\'")}',
            price: ${cookie.hasWeightOptions && cookie.prices ? cookie.prices['80g'].priceValue : (cookie.priceValue || parseFloat(cookie.price.replace('€', '').replace(',', '.')))},
            image: '${cookie.image}',
            hasWeightOptions: ${cookie.hasWeightOptions ? 'true' : 'false'},
            prices: ${cookie.hasWeightOptions && cookie.prices ? JSON.stringify(cookie.prices) : 'null'}
        };
        
        // Definir peso padrão (80g se disponível)
        let selectedWeight = '80g';
        if (productData.hasWeightOptions && productData.prices) {
            selectedWeight = '80g';
        }
        
        function updateProductPrice(weight, priceValue) {
            selectedWeight = weight;
            productData.price = priceValue;
            document.getElementById('productPriceDisplay').textContent = productData.prices[weight].price;
        }

        function changeMainImage(imageSrc, element) {
            document.getElementById('mainProductImage').src = imageSrc;
            document.querySelectorAll('.img-thumbnail').forEach(function(img) {
                img.style.border = '2px solid #ddd';
            });
            element.style.border = '2px solid var(--huella-orange)';
        }

        function openImageModal(imageSrc) {
            document.getElementById('modalImage').src = imageSrc;
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            modal.show();
        }

        function increaseQuantity() {
            const input = document.getElementById('productQuantity');
            const currentValue = parseInt(input.value);
            if (currentValue < 20) {
                input.value = currentValue + 1;
            }
        }

        function decreaseQuantity() {
            const input = document.getElementById('productQuantity');
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        }

        function addToCartFromProduct() {
            const quantity = parseInt(document.getElementById('productQuantity').value);
            const weight = productData.hasWeightOptions ? selectedWeight : null;
            const productName = weight ? productData.name + ' (' + weight + ')' : productData.name;
            addToCart(productData.id, productName, productData.price, productData.image, quantity, weight);
            
            // Mostrar feedback
            const btn = event.target;
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check me-2"></i>Adicionado!';
            btn.classList.add('btn-success');
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('btn-success');
            }, 2000);
        }

        function shareProduct() {
            if (navigator.share) {
                navigator.share({
                    title: productData.name,
                    text: 'Confira este cookie delicioso da Huella!',
                    url: window.location.href
                });
            } else {
                // Fallback: copiar link
                navigator.clipboard.writeText(window.location.href);
                alert('Link copiado para a área de transferência!');
            }
        }
        </script>
    `;
}

// Renderizar Shop Page (simplificado)
async function renderShopPage(data) {
    return `
        <div class="container py-5">
            <h1>Loja Online</h1>
            <p>Esta página será implementada em breve.</p>
            <a href="#" data-route="/cookies" class="btn btn-huella-primary">Ver Cookies</a>
        </div>
    `;
}

// Renderizar FAQ Page (simplificado)
async function renderFAQPage(data) {
    const faqs = data.faqs;
    const faqsHTML = faqs.map((faq, index) => `
        <div class="accordion-item huella-card mb-3">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false">
                    ${escapeHtml(faq.question)}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}">
                <div class="accordion-body">
                    ${escapeHtml(faq.answer)}
                </div>
            </div>
        </div>
    `).join('');

    return `
        <!-- Hero Section -->
        <section class="huella-hero">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 text-center">
                        <h1 class="huella-fade-in">Perguntas Frequentes</h1>
                        <p class="lead huella-fade-in">Encontre respostas às questões mais comuns sobre os nossos cookies, encomendas e serviços.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="huella-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="accordion" id="faqAccordion">
                            ${faqsHTML}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Renderizar Reviews Page (simplificado)
async function renderReviewsPage(data) {
    return `
        <div class="container py-5">
            <h1>Avaliações</h1>
            <p>Esta página será implementada em breve.</p>
        </div>
    `;
}

// Renderizar 404 Page
async function render404Page() {
    return `
        <div class="container py-5 text-center">
            <h1 class="display-1">404</h1>
            <h2>Página não encontrada</h2>
            <p class="lead">A página que procura não existe.</p>
            <a href="#" data-route="/" class="btn btn-huella-primary">Voltar ao Início</a>
        </div>
    `;
}

// Exportar funções
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        renderHomePage, 
        renderAboutPage, 
        renderCookiesPage, 
        renderLocationPage, 
        renderContactPage,
        renderProductPage,
        renderShopPage,
        renderFAQPage,
        renderReviewsPage,
        render404Page
    };
}

