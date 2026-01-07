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
        const priceValue = cookie.priceValue || parseFloat(cookie.price.replace('€', '').replace(',', '.'));
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
                            <span class="huella-price">${escapeHtml(cookie.price)}</span>
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
        const priceValue = cookie.priceValue || parseFloat(cookie.price.replace('€', '').replace(',', '.'));
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
                            <span class="huella-price">${escapeHtml(cookie.price)}</span>
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
                        <img src="public/img/cookies/cookies/Tradicional/1.jpg" alt="Cookies Huella" class="img-fluid huella-fade-in" style="max-height: 500px;">
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
                    <div class="col-lg-6">
                        <h1 class="huella-fade-in">Os Meus Valores</h1>
                        <p class="lead huella-fade-in">Conheça a história por trás da Huella e os valores que guiam cada receita, cada ingrediente e cada decisão.</p>
                    </div>
                    <div class="col-lg-6 text-center">
                        <img src="public/img/about/values-hero.jpg" alt="Os Meus Valores" class="img-fluid huella-fade-in" style="max-height: 400px;">
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
                        <p class="huella-text" style="font-size: 1.1rem; line-height: 1.8;">${escapeHtml(about.ana.biography)}</p>
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
        const priceValue = cookie.priceValue || parseFloat(cookie.price.replace('€', '').replace(',', '.'));
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
                            <span class="huella-price">${escapeHtml(cookie.price)}</span>
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
        const priceValue = cookie.priceValue || parseFloat(cookie.price.replace('€', '').replace(',', '.'));
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
                            <span class="huella-price">${escapeHtml(cookie.price)}</span>
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
                    <div class="col-lg-6">
                        <h1 class="huella-fade-in">Os Nossos Cookies</h1>
                        <p class="lead huella-fade-in">Descubra a nossa coleção de sabores únicos, desde os clássicos que todos adoram até às criações mais inovadoras.</p>
                    </div>
                    <div class="col-lg-6 text-center">
                        <img src="public/img/cookies/cookies/Tradicional/1.jpg" alt="Cookies Huella" class="img-fluid huella-fade-in" style="max-height: 400px;">
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
                    <div class="col-lg-6">
                        <h1 class="huella-fade-in">Onde Estamos</h1>
                        <p class="lead huella-fade-in">Visite-nos na nossa loja em São Mamede Infesta, Matosinhos e descubra o sabor dos nossos cookies frescos.</p>
                    </div>
                    <div class="col-lg-6 text-center">
                        <img src="public/img/location/store-front.jpg" alt="Loja Huella" class="img-fluid huella-fade-in" style="max-height: 400px;">
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
                    <div class="col-lg-6">
                        <h1 class="huella-fade-in">Contactos</h1>
                        <p class="lead huella-fade-in">Estamos aqui para si! Entre em contacto connosco para qualquer dúvida, sugestão ou encomenda especial.</p>
                    </div>
                    <div class="col-lg-6 text-center">
                        <img src="public/img/contact/contact-hero.jpg" alt="Contactos Huella" class="img-fluid huella-fade-in" style="max-height: 400px;">
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Information -->
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
                                        <strong>${escapeHtml(contactInfo.address.street)}</strong><br>
                                        ${escapeHtml(contactInfo.address.postalCode)} ${escapeHtml(contactInfo.address.city)}<br>
                                        ${escapeHtml(contactInfo.address.country)}
                                    </p>
                                </div>
                                
                                <h5 class="text-huella-orange mb-3">
                                    <i class="fas fa-phone me-2"></i>Contactos
                                </h5>
                                <div class="mb-4">
                                    <p class="mb-2">
                                        <i class="fas fa-phone text-huella-green me-2"></i>
                                        <a href="tel:${contactInfo.contact.phone}" class="text-decoration-none">${escapeHtml(contactInfo.contact.phone)}</a>
                                    </p>
                                    <p class="mb-2">
                                        <i class="fas fa-envelope text-huella-green me-2"></i>
                                        <a href="mailto:${contactInfo.contact.email}" class="text-decoration-none">${escapeHtml(contactInfo.contact.email)}</a>
                                    </p>
                                </div>
                                
                                <h5 class="text-huella-orange mb-3">
                                    <i class="fas fa-clock me-2"></i>Horários
                                </h5>
                                <div class="mb-4">
                                    <p class="mb-1"><strong>Terça a Sábado:</strong> ${escapeHtml(contactInfo.contact.hours.tuesdayToSaturday)}</p>
                                    <p class="mb-1"><strong>Segunda:</strong> ${escapeHtml(contactInfo.contact.hours.monday)}</p>
                                    <p class="mb-1"><strong>Domingo:</strong> ${escapeHtml(contactInfo.contact.hours.sunday)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 mb-4">
                        <div class="huella-card h-100">
                            <div class="card-body">
                                <h3 class="card-title text-huella-green mb-4">
                                    <i class="fas fa-envelope me-2"></i>Envie-nos uma Mensagem
                                </h3>
                                <form id="contactForm" class="needs-validation" novalidate>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="name" class="huella-form-label">Nome *</label>
                                            <input type="text" class="form-control huella-form-control" id="name" required>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="email" class="huella-form-label">Email *</label>
                                            <input type="email" class="form-control huella-form-control" id="email" required>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="subject" class="huella-form-label">Assunto *</label>
                                        <select class="form-control huella-form-control" id="subject" required>
                                            <option value="">Selecione um assunto</option>
                                            <option value="encomenda">Encomenda</option>
                                            <option value="duvida">Dúvida sobre produtos</option>
                                            <option value="sugestao">Sugestão</option>
                                            <option value="reclamacao">Reclamação</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="message" class="huella-form-label">Mensagem *</label>
                                        <textarea class="form-control huella-form-control" id="message" rows="5" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-huella-primary">
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
                                <span class="huella-price" style="font-size: 2rem;">${escapeHtml(cookie.price)}</span>
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

                            <div class="product-actions mb-4">
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
            price: ${cookie.priceValue || parseFloat(cookie.price.replace('€', '').replace(',', '.'))},
            image: '${cookie.image}'
        };

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
            addToCart(productData.id, productData.name, productData.price, productData.image, quantity);
            
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
                    <div class="col-lg-6">
                        <h1 class="huella-fade-in">Perguntas Frequentes</h1>
                        <p class="lead huella-fade-in">Encontre respostas às questões mais comuns sobre os nossos cookies, encomendas e serviços.</p>
                    </div>
                    <div class="col-lg-6 text-center">
                        <img src="public/img/faq/faq-hero.jpg" alt="FAQ Huella" class="img-fluid huella-fade-in" style="max-height: 400px;">
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

