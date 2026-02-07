// ========================================
// SCROLL TO TOP BUTTON
// ========================================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// ACTIVE TOC LINK ON SCROLL
// ========================================
const sections = document.querySelectorAll('.section');
const tocLinks = document.querySelectorAll('.toc-list a');

function highlightTocLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    tocLinks.forEach(link => {
        link.style.background = '';
        link.style.color = '';
        link.style.paddingLeft = '';
        if (link.getAttribute('href').substring(1) === current) {
            link.style.background = 'var(--primary-light)';
            link.style.color = 'var(--primary-color)';
            link.style.paddingLeft = '1rem';
        }
    });
}

window.addEventListener('scroll', highlightTocLink);

// ========================================
// CONTACT FORM HANDLER
// ========================================
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Simular envio (em produção, conectaria a um backend)
    console.log('Formulário enviado:', formData);
    
    // Criar mailto link
    const mailtoLink = `mailto:privacidade@d-dieta.com.br?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`;
    
    // Abrir cliente de email
    window.location.href = mailtoLink;
    
    // Feedback visual
    alert('✅ Redirecionando para seu cliente de email!\n\nSe não abrir automaticamente, envie um email para:\nprivacidade@d-dieta.com.br');
    
    // Limpar formulário
    document.getElementById('contactForm').reset();
    
    return false;
}

// ========================================
// MODAL DE CONTATO RÁPIDO
// ========================================
function showContactModal(type) {
    const messages = {
        acesso: 'Solicito acesso a todos os meus dados pessoais armazenados no D-Dieta, conforme direito previsto na LGPD.',
        correcao: 'Solicito correção dos meus dados pessoais cadastrados no D-Dieta.',
        exclusao: 'Solicito a exclusão permanente de todos os meus dados pessoais e encerramento da minha conta no D-Dieta.',
        oposicao: 'Desejo me opor ao tratamento dos meus dados pessoais no D-Dieta.',
        portabilidade: 'Solicito a portabilidade dos meus dados pessoais em formato estruturado.',
        revogacao: 'Desejo revogar meu consentimento para o tratamento dos meus dados pessoais.'
    };
    
    const message = messages[type] || 'Tenho uma dúvida sobre privacidade.';
    
    // Preencher formulário
    const messageField = document.getElementById('message');
    if (messageField) {
        messageField.value = message;
        messageField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        messageField.focus();
    }
}

// ========================================
// COPY EMAIL TO CLIPBOARD
// ========================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Criar notificação temporária
        const notification = document.createElement('div');
        notification.textContent = '✅ Email copiado!';
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--success-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 9999;
            animation: slideUp 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    });
}

// Adicionar listeners para emails clicáveis
document.querySelectorAll('.contact-card a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const email = link.textContent;
        copyToClipboard(email);
        setTimeout(() => {
            window.location.href = link.href;
        }, 500);
    });
});

// ========================================
// ANIMATION ON SCROLL
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.querySelectorAll('.section, .info-card, .plan-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// PRINT FRIENDLY
// ========================================
window.addEventListener('beforeprint', () => {
    // Expandir todas as seções para impressão
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'block';
    });
});

// ========================================
// MOBILE MENU TOGGLE (se necessário no futuro)
// ========================================
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-active');
}

// ========================================
// ADICIONAR ÍCONES DE LINK EXTERNO
// ========================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes('d-dieta')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        link.innerHTML += ' ↗';
    }
});

// ========================================
// DARK MODE TOGGLE (FUTURO)
// ========================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Verificar preferência salva
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ========================================
// READING PROGRESS BAR
// ========================================
function updateReadingProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    let progressBar = document.getElementById('reading-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--primary-color);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateReadingProgress);

// ========================================
// ESTIMATE READING TIME
// ========================================
function estimateReadingTime() {
    const content = document.querySelector('.content');
    if (content) {
        const text = content.innerText;
        const wordsPerMinute = 200;
        const words = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / wordsPerMinute);
        
        const badge = document.querySelector('.hero-badge');
        if (badge && !badge.textContent.includes('min de leitura')) {
            badge.textContent += ` • ${readingTime} min de leitura`;
        }
    }
}

// Executar ao carregar
document.addEventListener('DOMContentLoaded', () => {
    estimateReadingTime();
});

// ========================================
// CONSOLE EASTER EGG
// ========================================
console.log('%c🥗 D-Dieta - Desenvolvido com ❤️', 'color: #10b981; font-size: 20px; font-weight: bold;');
console.log('%cSua privacidade é importante para nós!', 'color: #6b7280; font-size: 14px;');
console.log('%cSe encontrar algum bug, reporte para: suporte@d-dieta.com.br', 'color: #6b7280; font-size: 12px;');

// ========================================
// ANALYTICS (PLACEHOLDER)
// ========================================
function trackEvent(eventName, eventData) {
    // Em produção, conectaria ao Google Analytics
    console.log('📊 Event tracked:', eventName, eventData);
}

// Rastrear cliques em botões importantes
document.querySelectorAll('.btn-premium, .btn-plan').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('button_click', {
            button: btn.textContent,
            location: window.location.pathname
        });
    });
});
