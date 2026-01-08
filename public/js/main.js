// ===== HUELLA MAIN JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.huella-navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== CLOSE OFFCANVAS MENU ON LINK CLICK =====
    const offcanvasMenu = document.getElementById('offcanvasMenu');
    if (offcanvasMenu) {
        // Fechar menu quando um link é clicado (com animação suave)
        offcanvasMenu.addEventListener('click', function(e) {
            const link = e.target.closest('.nav-link[data-route]');
            if (link) {
                // Pequeno delay para permitir que o clique seja processado primeiro
                setTimeout(() => {
                    // Usar Bootstrap API para fechar o offcanvas com animação
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasMenu);
                    if (bsOffcanvas) {
                        bsOffcanvas.hide();
                    } else {
                        // Se não existe instância, criar uma nova e fechar
                        const newOffcanvas = new bootstrap.Offcanvas(offcanvasMenu);
                        newOffcanvas.hide();
                    }
                }, 50);
            }
        });
    }
    
    // ===== CART FUNCTIONALITY =====
    let cart = JSON.parse(localStorage.getItem('huellaCart')) || [];
    updateCartCount();
    
    // Initialize cart display on page load
    updateCartDisplay();
    
    // Add to cart function
    window.addToCart = function(productId, productName, productPrice, productImage, quantity = 1, weight = null) {
        // Criar ID único incluindo peso se disponível
        const uniqueId = weight ? `${productId}_${weight}` : productId;
        const displayName = weight ? productName : productName;
        
        const existingItem = cart.find(item => item.id === uniqueId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: uniqueId,
                name: displayName,
                price: productPrice,
                image: productImage,
                quantity: quantity,
                weight: weight
            });
        }
        
        localStorage.setItem('huellaCart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
        showCartNotification(displayName);
    }
    
    // Update cart count in navbar
    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'block' : 'none';
        }
        updateCartDisplay();
    }
    
    // Update cart display in sidebar
    function updateCartDisplay() {
        const cartItems = document.getElementById('cart-items');
        const cartEmpty = document.getElementById('cart-empty');
        const cartSummary = document.getElementById('cart-summary');
        const cartTotal = document.getElementById('cart-total');
        
        if (cart.length === 0) {
            cartItems.innerHTML = '';
            cartEmpty.style.display = 'block';
            cartSummary.style.display = 'none';
        } else {
            cartEmpty.style.display = 'none';
            cartSummary.style.display = 'block';
            
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">€${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                            <button class="remove-item-btn" onclick="removeFromCart('${item.id}')" title="Remover">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `€${total.toFixed(2)}`;
        }
    }
    
    // Update item quantity
    window.updateQuantity = function(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                localStorage.setItem('huellaCart', JSON.stringify(cart));
                updateCartCount();
            }
        }
    }
    
    // Remove item from cart
    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('huellaCart', JSON.stringify(cart));
        updateCartCount();
    }
    
    // Proceed to checkout
    window.proceedToCheckout = function() {
        if (cart.length === 0) {
            alert('O seu carrinho está vazio!');
            return;
        }
        
        // Criar e mostrar modal de checkout
        createCheckoutModal();
        const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
        modal.show();
    }
    
    // Criar modal de checkout dinamicamente
    function createCheckoutModal() {
        // Verificar se o modal já existe
        if (document.getElementById('checkoutModal')) {
            updateCheckoutModal();
            return;
        }
        
        const modalHTML = `
            <div class="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="checkoutModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="checkoutModalLabel">Finalizar Encomenda</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="checkoutForm" class="needs-validation" novalidate>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName" class="huella-form-label">Nome *</label>
                                        <input type="text" class="form-control huella-form-control" id="firstName" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName" class="huella-form-label">Apelido *</label>
                                        <input type="text" class="form-control huella-form-control" id="lastName" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="email" class="huella-form-label">Email *</label>
                                        <input type="email" class="form-control huella-form-control" id="email" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="phone" class="huella-form-label">Telemóvel *</label>
                                        <input type="tel" class="form-control huella-form-control" id="phone" pattern="[0-9]{9}" required>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="huella-form-label">Morada *</label>
                                    <input type="text" class="form-control huella-form-control" id="address" required>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="postalCode" class="huella-form-label">Código Postal *</label>
                                        <input type="text" class="form-control huella-form-control" id="postalCode" pattern="[0-9]{4}-[0-9]{3}" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="city" class="huella-form-label">Cidade *</label>
                                        <input type="text" class="form-control huella-form-control" id="city" required>
                                    </div>
                                </div>
                                
                                <div class="alert alert-info">
                                    <i class="fas fa-info-circle me-2"></i>
                                    <strong>Informação de Envio:</strong> O envio demora 3 dias úteis e custa 3.50€. 
                                    Envio gratuito para encomendas superiores a 25.00€.
                                </div>
                                
                                <!-- Payment Methods Section -->
                                <div class="mb-4">
                                    <h5 class="huella-subtitle mb-3">Métodos de Pagamento</h5>
                                    <div class="payment-methods">
                                        <div class="payment-method-card mb-3" data-method="dinheiro">
                                            <div class="d-flex align-items-center justify-content-between p-3 huella-card" style="cursor: pointer;" onclick="selectPaymentMethod('dinheiro')">
                                                <div class="d-flex align-items-center">
                                                    <div class="payment-icon me-3">
                                                        <i class="fas fa-money-bill-wave fa-2x text-huella-green"></i>
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-1 text-huella-green fw-bold">DINHEIRO FÍSICO</h6>
                                                        <p class="mb-0 text-huella-orange small">Pagamento feito no momento, em notas ou moedas.</p>
                                                    </div>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="paymentMethod" id="paymentDinheiro" value="dinheiro">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="payment-method-card mb-3" data-method="mbway">
                                            <div class="d-flex align-items-center justify-content-between p-3 huella-card" style="cursor: pointer;" onclick="selectPaymentMethod('mbway')">
                                                <div class="d-flex align-items-center">
                                                    <div class="payment-icon me-3">
                                                        <span class="badge bg-danger" style="font-size: 1.2rem; padding: 0.5rem;">MB</span>
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-1 text-huella-green fw-bold">MB WAY</h6>
                                                        <p class="mb-0 text-huella-orange small">Pagamento imediato através da app.</p>
                                                    </div>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMBWay" value="mbway">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="payment-method-card mb-3" data-method="revolut">
                                            <div class="d-flex align-items-center justify-content-between p-3 huella-card" style="cursor: pointer;" onclick="selectPaymentMethod('revolut')">
                                                <div class="d-flex align-items-center">
                                                    <div class="payment-icon me-3">
                                                        <span class="badge bg-dark" style="font-size: 1.5rem; padding: 0.5rem; font-weight: bold;">R</span>
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-1 text-huella-green fw-bold">REVOLUT</h6>
                                                        <p class="mb-0 text-huella-orange small">Transferência instantânea de conta para conta.</p>
                                                    </div>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="paymentMethod" id="paymentRevolut" value="revolut">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="payment-method-card mb-3" data-method="huella">
                                            <div class="d-flex align-items-center justify-content-between p-3 huella-card" style="cursor: pointer;" onclick="selectPaymentMethod('huella')">
                                                <div class="d-flex align-items-center">
                                                    <div class="payment-icon me-3">
                                                        <i class="fas fa-cookie-bite fa-2x text-huella-orange"></i>
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-1 text-huella-orange fw-bold" style="font-size: 1.2rem;">Huella</h6>
                                                        <p class="mb-0 text-huella-orange small">*Finalizamos os valores e detalhes individualmente com cada cliente, para garantir clareza e acordo em cada passo.</p>
                                                    </div>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="paymentMethod" id="paymentHuella" value="huella">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Payment Details (hidden by default) -->
                                <div id="paymentDetails" style="display: none;">
                                    <div class="huella-card p-3 mb-3">
                                        <h6 class="text-huella-green mb-3">Detalhes do Pagamento</h6>
                                        <div id="paymentDetailsContent"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" form="checkoutForm" class="btn btn-huella-primary">
                                <i class="fas fa-credit-card me-2"></i>Confirmar Encomenda
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        updateCheckoutModal();
        attachCheckoutHandlers();
    }
    
    // Atualizar informações do carrinho no modal
    function updateCheckoutModal() {
        // Esta função pode ser usada para atualizar o resumo do pedido se necessário
    }
    
    // Anexar handlers ao formulário de checkout
    function attachCheckoutHandlers() {
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
                if (!selectedMethod) {
                    alert('Por favor, selecione um método de pagamento.');
                    return;
                }
                
                const method = selectedMethod.value;
                const paymentData = {};
                
                if (method === 'mbway') {
                    const phone = document.getElementById('mbwayPhone')?.value;
                    if (!phone) {
                        alert('Por favor, insira o número de telemóvel MB WAY.');
                        return;
                    }
                    paymentData.phone = phone;
                    simulateMBWayPayment();
                } else if (method === 'revolut') {
                    const email = document.getElementById('revolutEmail')?.value;
                    const phone = document.getElementById('revolutPhone')?.value;
                    if (!email || !phone) {
                        alert('Por favor, preencha todos os campos do Revolut.');
                        return;
                    }
                    paymentData.email = email;
                    paymentData.phone = phone;
                    simulateRevolutPayment();
                } else if (method === 'dinheiro') {
                    processOrder('dinheiro', {});
                } else if (method === 'huella') {
                    const notes = document.getElementById('huellaNotes')?.value || '';
                    processOrder('huella', { notes: notes });
                }
            });
        }
    }
    
    // Selecionar método de pagamento
    window.selectPaymentMethod = function(method) {
        // Uncheck all radio buttons
        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
            radio.checked = false;
        });
        
        // Check selected method
        const methodId = 'payment' + method.charAt(0).toUpperCase() + method.slice(1);
        const radio = document.getElementById(methodId);
        if (radio) {
            radio.checked = true;
        }
        
        // Show payment details
        const paymentDetails = document.getElementById('paymentDetails');
        const paymentDetailsContent = document.getElementById('paymentDetailsContent');
        if (paymentDetails && paymentDetailsContent) {
            paymentDetails.style.display = 'block';
            paymentDetailsContent.innerHTML = '';
            
            // Show appropriate payment simulation based on method
            switch(method) {
                case 'dinheiro':
                    showDinheiroPayment();
                    break;
                case 'mbway':
                    showMBWayPayment();
                    break;
                case 'revolut':
                    showRevolutPayment();
                    break;
                case 'huella':
                    showHuellaPayment();
                    break;
            }
        }
    }
    
    // Mostrar detalhes de pagamento em dinheiro
    function showDinheiroPayment() {
        const content = document.getElementById('paymentDetailsContent');
        if (!content) return;
        
        const total = calculateTotal();
        content.innerHTML = '<div class="alert alert-success">' +
            '<i class="fas fa-check-circle me-2"></i>' +
            '<strong>Pagamento em Dinheiro Físico</strong>' +
            '<p class="mb-0 mt-2">O pagamento será feito no momento da entrega ou recolha. Prepare o valor exato ou próximo.</p>' +
            '</div>' +
            '<div class="mt-3">' +
            '<p class="mb-2"><strong>Total a pagar:</strong> <span id="totalAmount" class="huella-price">' + total.toFixed(2) + '€</span></p>' +
            '<p class="text-muted small">*O valor será confirmado no momento da entrega.</p>' +
            '</div>';
    }
    
    // Mostrar detalhes de pagamento MB WAY
    function showMBWayPayment() {
        const content = document.getElementById('paymentDetailsContent');
        if (!content) return;
        
        const total = calculateTotal();
        content.innerHTML = '<div class="alert alert-info">' +
            '<i class="fas fa-mobile-alt me-2"></i>' +
            '<strong>Pagamento via MB WAY</strong>' +
            '</div>' +
            '<div class="mb-3">' +
            '<label for="mbwayPhone" class="huella-form-label">Número de Telemóvel MB WAY *</label>' +
            '<input type="tel" class="form-control huella-form-control" id="mbwayPhone" placeholder="9XXXXXXXX" pattern="[0-9]{9}" required>' +
            '<small class="text-muted">Número associado à sua conta MB WAY</small>' +
            '</div>' +
            '<div class="mt-3">' +
            '<p class="mb-2"><strong>Total a pagar:</strong> <span id="totalAmount" class="huella-price">' + total.toFixed(2) + '€</span></p>' +
            '<button type="button" class="btn btn-huella-primary w-100" onclick="simulateMBWayPayment()">' +
            '<i class="fas fa-mobile-alt me-2"></i>Enviar Pedido de Pagamento MB WAY' +
            '</button>' +
            '</div>';
    }
    
    // Mostrar detalhes de pagamento Revolut
    function showRevolutPayment() {
        const content = document.getElementById('paymentDetailsContent');
        if (!content) return;
        
        const total = calculateTotal();
        content.innerHTML = '<div class="alert alert-info">' +
            '<i class="fas fa-exchange-alt me-2"></i>' +
            '<strong>Pagamento via Revolut</strong>' +
            '</div>' +
            '<div class="mb-3">' +
            '<label for="revolutEmail" class="huella-form-label">Email da Conta Revolut *</label>' +
            '<input type="email" class="form-control huella-form-control" id="revolutEmail" placeholder="seu@email.com" required>' +
            '</div>' +
            '<div class="mb-3">' +
            '<label for="revolutPhone" class="huella-form-label">Número de Telemóvel Revolut *</label>' +
            '<input type="tel" class="form-control huella-form-control" id="revolutPhone" placeholder="9XXXXXXXX" pattern="[0-9]{9}" required>' +
            '</div>' +
            '<div class="mt-3">' +
            '<p class="mb-2"><strong>Total a pagar:</strong> <span id="totalAmount" class="huella-price">' + total.toFixed(2) + '€</span></p>' +
            '<p class="text-muted small mb-3">Receberá os detalhes da conta para transferência após confirmação da encomenda.</p>' +
            '<button type="button" class="btn btn-huella-primary w-100" onclick="simulateRevolutPayment()">' +
            '<i class="fas fa-exchange-alt me-2"></i>Confirmar e Receber Detalhes de Transferência' +
            '</button>' +
            '</div>';
    }
    
    // Mostrar detalhes de pagamento Huella
    function showHuellaPayment() {
        const content = document.getElementById('paymentDetailsContent');
        if (!content) return;
        
        const total = calculateTotal();
        content.innerHTML = '<div class="alert alert-warning">' +
            '<i class="fas fa-cookie-bite me-2"></i>' +
            '<strong>Pagamento Personalizado Huella</strong>' +
            '</div>' +
            '<div class="mb-3">' +
            '<p class="huella-text">Finalizamos os valores e detalhes individualmente com cada cliente, para garantir clareza e acordo em cada passo.</p>' +
            '<p class="huella-text">Após submeter a encomenda, entraremos em contacto consigo para acordar os detalhes do pagamento.</p>' +
            '</div>' +
            '<div class="mb-3">' +
            '<label for="huellaNotes" class="huella-form-label">Observações ou Preferências de Pagamento</label>' +
            '<textarea class="form-control huella-form-control" id="huellaNotes" rows="3" placeholder="Indique a sua preferência de pagamento ou qualquer observação..."></textarea>' +
            '</div>' +
            '<div class="mt-3">' +
            '<p class="mb-2"><strong>Total estimado:</strong> <span id="totalAmount" class="huella-price">' + total.toFixed(2) + '€</span></p>' +
            '<p class="text-muted small">*O valor final será confirmado após contacto.</p>' +
            '</div>';
    }
    
    // Calcular total com envio
    function calculateTotal() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const freeShippingThreshold = 25;
        const shippingCost = 3.50;
        const shipping = total >= freeShippingThreshold ? 0 : shippingCost;
        return total + shipping;
    }
    
    // Simular pagamento MB WAY
    window.simulateMBWayPayment = function() {
        const phone = document.getElementById('mbwayPhone')?.value;
        if (!phone || phone.length !== 9) {
            alert('Por favor, insira um número de telemóvel válido (9 dígitos).');
            return;
        }
        
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>A processar...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check me-2"></i>Pedido Enviado!';
            btn.classList.remove('btn-huella-primary');
            btn.classList.add('btn-success');
            
            setTimeout(() => {
                processOrder('mbway', { phone: phone });
            }, 1500);
        }, 2000);
    }
    
    // Simular pagamento Revolut
    window.simulateRevolutPayment = function() {
        const email = document.getElementById('revolutEmail')?.value;
        const phone = document.getElementById('revolutPhone')?.value;
        
        if (!email || !phone || phone.length !== 9) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }
        
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>A processar...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check me-2"></i>Detalhes Enviados!';
            btn.classList.remove('btn-huella-primary');
            btn.classList.add('btn-success');
            
            // Show account details
            const content = document.getElementById('paymentDetailsContent');
            const reference = 'HUE' + Date.now().toString().slice(-6);
            const total = calculateTotal();
            if (content) {
                content.innerHTML += '<div class="alert alert-success mt-3">' +
                    '<h6><i class="fas fa-info-circle me-2"></i>Detalhes para Transferência:</h6>' +
                    '<p class="mb-1"><strong>IBAN:</strong> PT50 0000 0000 0000 0000 0000 0</p>' +
                    '<p class="mb-1"><strong>Referência:</strong> ' + reference + '</p>' +
                    '<p class="mb-0"><strong>Valor:</strong> <span class="huella-price">' + total.toFixed(2) + '€</span></p>' +
                    '<p class="small mt-2 mb-0">Envie a transferência e a encomenda será processada.</p>' +
                    '</div>';
            }
            
            setTimeout(() => {
                processOrder('revolut', { email: email, phone: phone });
            }, 2000);
        }, 2000);
    }
    
    // Processar encomenda
    function processOrder(paymentMethod, paymentData) {
        const form = document.getElementById('checkoutForm');
        if (!form || !form.checkValidity()) {
            if (form) form.classList.add('was-validated');
            return;
        }
        
        const formData = {
            items: cart,
            customerInfo: {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                postalCode: document.getElementById('postalCode').value,
                city: document.getElementById('city').value
            },
            paymentMethod: paymentMethod,
            paymentData: paymentData,
            total: calculateTotal()
        };
        
        // Add Huella notes if applicable
        if (paymentMethod === 'huella' && document.getElementById('huellaNotes')) {
            formData.huellaNotes = document.getElementById('huellaNotes').value;
        }
        
        // Simular processamento (sem servidor)
        const orderNumber = 'HUE' + Date.now().toString().slice(-8);
        const estimatedDelivery = new Date();
        estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);
        
        // Clear cart
        cart = [];
        localStorage.setItem('huellaCart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartCount();
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
        if (modal) modal.hide();
        
        // Show success message
        showOrderSuccess({
            orderNumber: orderNumber,
            estimatedDelivery: estimatedDelivery.toLocaleDateString('pt-PT')
        }, paymentMethod);
    }
    
    // Mostrar mensagem de sucesso
    function showOrderSuccess(data, paymentMethod) {
        const successMessage = paymentMethod === 'dinheiro' 
            ? 'Encomenda confirmada! Entraremos em contacto para combinar a entrega e pagamento.'
            : paymentMethod === 'huella'
            ? 'Encomenda registada! Entraremos em contacto para finalizar os detalhes do pagamento.'
            : 'Encomenda processada com sucesso! Receberá um email de confirmação em breve.';
        
        const alert = document.createElement('div');
        alert.className = 'alert alert-success position-fixed';
        alert.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 350px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);';
        alert.innerHTML = '<h5><i class="fas fa-check-circle me-2"></i>Encomenda Confirmada!</h5>' +
            '<p class="mb-1"><strong>Número de Encomenda:</strong> ' + data.orderNumber + '</p>' +
            '<p class="mb-1">' + successMessage + '</p>' +
            '<p class="mb-0 small"><strong>Entrega estimada:</strong> ' + data.estimatedDelivery + '</p>';
        
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 8000);
    }
    
    // Show cart notification
    function showCartNotification(productName) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'alert alert-success position-fixed';
        notification.style.cssText = `
            top: 100px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        `;
        notification.innerHTML = `
            <i class="fas fa-check-circle me-2"></i>
            <strong>${productName}</strong> adicionado ao carrinho!
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    // ===== FORM VALIDATION =====
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
    
    // ===== CONTACT FORM SUBMISSION =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<span class="huella-loading me-2"></span>Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                showSuccessMessage('Mensagem enviada com sucesso! Responderemos em breve.');
                
                // Reset form
                this.reset();
                this.classList.remove('was-validated');
            }, 2000);
        });
    }
    
    // ===== SHOP CHECKOUT =====
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<span class="huella-loading me-2"></span>Processando...';
            submitBtn.disabled = true;
            
            // Simulate checkout process
            setTimeout(() => {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                showSuccessMessage('Encomenda processada com sucesso! Receberá um email de confirmação em breve.');
                
                // Clear cart
                cart = [];
                localStorage.setItem('huellaCart', JSON.stringify(cart));
                updateCartCount();
                
                // Reset form
                this.reset();
            }, 3000);
        });
    }
    
    // ===== SUCCESS MESSAGE FUNCTION =====
    function showSuccessMessage(message) {
        const alert = document.createElement('div');
        alert.className = 'alert alert-success position-fixed';
        alert.style.cssText = `
            top: 100px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        `;
        alert.innerHTML = `
            <i class="fas fa-check-circle me-2"></i>
            ${message}
        `;
        
        document.body.appendChild(alert);
        
        // Remove after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
    
    // ===== FAQ ACCORDION ENHANCEMENT =====
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                const isOpen = answer.style.display === 'block';
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    if (otherAnswer && otherQuestion) {
                        otherAnswer.style.display = 'none';
                        otherQuestion.classList.remove('active');
                    }
                });
                
                // Toggle current item
                if (!isOpen) {
                    answer.style.display = 'block';
                    question.classList.add('active');
                }
            });
        }
    });
    
    // ===== LAZY LOADING FOR IMAGES =====
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ===== ANIMATION ON SCROLL =====
    const animateElements = document.querySelectorAll('.huella-fade-in');
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animationObserver.observe(el);
    });
    
    // ===== SEARCH FUNCTIONALITY =====
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                const productName = product.querySelector('.product-name').textContent.toLowerCase();
                const productDescription = product.querySelector('.product-description').textContent.toLowerCase();
                
                if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
    
    // ===== PRICE CALCULATOR =====
    window.calculatePrice = function(quantity, basePrice) {
        let total = quantity * basePrice;
        
        // Apply discounts for larger quantities
        if (quantity >= 12) {
            total *= 0.9; // 10% discount
        } else if (quantity >= 6) {
            total *= 0.95; // 5% discount
        }
        
        return total.toFixed(2);
    }
    
    // ===== QUANTITY SELECTOR =====
    document.querySelectorAll('.quantity-selector').forEach(selector => {
        const minusBtn = selector.querySelector('.quantity-minus');
        const plusBtn = selector.querySelector('.quantity-plus');
        const quantityInput = selector.querySelector('.quantity-input');
        
        if (minusBtn && plusBtn && quantityInput) {
            minusBtn.addEventListener('click', function() {
                let currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                }
            });
            
            plusBtn.addEventListener('click', function() {
                let currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1;
            });
        }
    });
    
    // ===== SOCIAL SHARE =====
    window.shareOnSocial = function(platform, url, text) {
        const encodedUrl = encodeURIComponent(url || window.location.href);
        const encodedText = encodeURIComponent(text || 'Confira os deliciosos cookies da Huella!');
        
        let shareUrl = '';
        
        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodedText} ${encodedUrl}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    }
    
    // ===== COOKIE CONSENT =====
    if (!localStorage.getItem('huellaCookieConsent')) {
        showCookieConsent();
    }
    
    function showCookieConsent() {
        const consent = document.createElement('div');
        consent.className = 'position-fixed bottom-0 start-0 end-0 bg-huella-green text-white p-3';
        consent.style.zIndex = '9999';
        consent.innerHTML = `
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <p class="mb-0">
                            <i class="fas fa-cookie-bite me-2"></i>
                            Este site utiliza cookies para melhorar a sua experiência. 
                            <a href="#" class="text-huella-yellow text-decoration-none">Saiba mais</a>
                        </p>
                    </div>
                    <div class="col-md-4 text-md-end">
                        <button class="btn btn-huella-primary btn-sm me-2" onclick="acceptCookies()">
                            Aceitar
                        </button>
                        <button class="btn btn-outline-light btn-sm" onclick="declineCookies()">
                            Recusar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(consent);
    }
    
    window.acceptCookies = function() {
        localStorage.setItem('huellaCookieConsent', 'accepted');
        document.querySelector('.position-fixed.bottom-0').remove();
    }
    
    window.declineCookies = function() {
        localStorage.setItem('huellaCookieConsent', 'declined');
        document.querySelector('.position-fixed.bottom-0').remove();
    }
    
    console.log('🍊 Huella website loaded successfully!');
});

