document.addEventListener('DOMContentLoaded', () => {

    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    const robotsData = [
        { title: 'SPACE ROBOT', img: 'rb1.jpg' }, 
        { title: 'SPORTS ROBOT', img: 'rb2.jpg' },
        { title: 'TOY FOR KIDS', img: 'rb3.jpg' }
    ];

    const productsContainer = document.getElementById('dynamic-categories');
    if (productsContainer) {
        robotsData.forEach(robot => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${robot.img}" alt="${robot.title}">
                <h3>${robot.title}</h3>
            `;
            productsContainer.appendChild(card);
        });
    }

    const shopContainer = document.getElementById('shop-products');
    if (shopContainer) {
        robotsData.forEach(robot => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${robot.img}" alt="${robot.title}">
                <h3>${robot.title}</h3>
                <p>Price: $99</p>
            `;
            shopContainer.appendChild(card);
        });
    }

    if (document.querySelector('.history-swiper')) {
        const swiper = new Swiper('.history-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: { 
                nextEl: '.swiper-button-next', 
                prevEl: '.swiper-button-prev', 
            } 
        });
    }

    const modal = document.getElementById('contact-modal');
    const openBtn = document.getElementById('open-modal-btn');
    const closeBtn = document.querySelector('.close-btn');

    if (modal && openBtn && closeBtn) {
        openBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});