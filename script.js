/* ============================================
   ORANGE FURNITURE — Landing Page Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- NAVBAR SCROLL EFFECT ----
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function handleScroll() {
        const scrollY = window.scrollY;

        // Sticky navbar style
        if (scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link highlight
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // ---- MOBILE NAV TOGGLE ----
    const navToggle = document.getElementById('navToggle');
    const navLinksEl = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinksEl.classList.toggle('open');
        document.body.style.overflow = navLinksEl.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    navLinksEl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navLinksEl.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ---- SCROLL REVEAL ANIMATION ----
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.style.animationDelay;
                if (delay) {
                    const ms = parseFloat(delay) * 1000;
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, ms);
                } else {
                    entry.target.classList.add('revealed');
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ---- GALLERY FILTERS ----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = '';
                    item.style.animation = 'fadeIn 0.4s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ---- WHATSAPP BUTTON VISIBILITY ----
    const whatsappBtn = document.getElementById('whatsappBtn');

    const whatsappObserver = new IntersectionObserver((entries) => {
        // Show WhatsApp button after hero scrolls out of view
    }, { threshold: 0 });

    function handleWhatsApp() {
        if (window.scrollY > 400) {
            whatsappBtn.classList.add('visible');
        } else {
            whatsappBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleWhatsApp, { passive: true });
    handleWhatsApp();

    // ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ---- GALLERY IMAGE LIGHTBOX ----
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (!img) return;

            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed; inset: 0; z-index: 10000;
                background: rgba(0,0,0,0.9); backdrop-filter: blur(10px);
                display: flex; align-items: center; justify-content: center;
                cursor: pointer; animation: fadeIn 0.3s ease;
                padding: 40px;
            `;

            const lightboxImg = document.createElement('img');
            lightboxImg.src = img.src.replace('w=600', 'w=1200');
            lightboxImg.alt = img.alt;
            lightboxImg.style.cssText = `
                max-width: 90%; max-height: 90vh; object-fit: contain;
                border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                animation: scaleIn 0.3s ease;
            `;

            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '✕';
            closeBtn.style.cssText = `
                position: absolute; top: 24px; right: 24px;
                background: rgba(255,255,255,0.1); border: none;
                color: white; font-size: 1.4rem; width: 44px; height: 44px;
                border-radius: 50%; cursor: pointer;
                display: flex; align-items: center; justify-content: center;
                backdrop-filter: blur(10px);
            `;

            overlay.appendChild(lightboxImg);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';

            const close = () => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.remove();
                    document.body.style.overflow = '';
                }, 200);
            };

            overlay.addEventListener('click', (e) => {
                if (e.target === overlay || e.target === closeBtn) close();
            });
            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape') {
                    close();
                    document.removeEventListener('keydown', escHandler);
                }
            });
        });
    });

    // ---- CSS KEYFRAME INJECTION ----
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});
