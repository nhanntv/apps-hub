// ===== Footer year =====
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {

    // ===== Filter functionality =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const appCards = document.querySelectorAll('.app-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            appCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (categories.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

    // ===== Support Modal =====
    const supportLink = document.getElementById('support-link');
    const supportModal = document.getElementById('support-modal');
    const modalClose = document.getElementById('modal-close');

    if (supportLink && supportModal) {
        supportLink.addEventListener('click', function (e) {
            e.preventDefault();
            supportModal.classList.add('active');
        });

        modalClose.addEventListener('click', function () {
            supportModal.classList.remove('active');
        });

        supportModal.addEventListener('click', function (e) {
            if (e.target === supportModal) {
                supportModal.classList.remove('active');
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                supportModal.classList.remove('active');
            }
        });
    }

    // ===== Scroll animation =====
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    appCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = `opacity 0.45s ease ${i * 0.08}s, transform 0.45s ease ${i * 0.08}s`;
        observer.observe(card);
    });

});
