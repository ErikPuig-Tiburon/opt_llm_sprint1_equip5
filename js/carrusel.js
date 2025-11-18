document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carrusel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownContent = document.getElementById('carruselDropdown');
    const navLinks = dropdownContent.querySelectorAll('a');
    let currentSlide = 0;

    const slideTitles = [
        "Missatgeria Instantània",
        "Xarxes Socials",
        "Geolocalització",
        "Pàgines Web",
        "Botigues Online",
        "Aplicacions Mòbils",
        "Butlletins Electrònics",
        "Tecnologies al Punt de Venda"
    ];

    let currentIframe = 1;

    function showIframe(slide, iframeNum) {
        const iframes = slide.querySelectorAll('.content-iframe');
        const buttons = slide.querySelectorAll('[data-iframe]');

        currentIframe = iframeNum;

        iframes.forEach(iframe => {
            if (iframe.getAttribute('data-iframe-num') === iframeNum.toString()) {
                iframe.style.display = 'block';
            } else {
                iframe.style.display = 'none';
            }
        });

        buttons.forEach(button => {
            if (button.getAttribute('data-iframe') === iframeNum.toString()) {
                button.style.backgroundColor = 'rgb(120, 190, 210)';
            } else {
                button.style.backgroundColor = 'rgb(153, 219, 236)';
            }
        });

        // Actualizar breadcrumbs con la página actual
        generarBreadcrumbs(currentSlide, currentIframe);
    }

    function generarBreadcrumbs(slideIndex, pageNum = 1) {
        const breadcrumbsContainer = document.getElementById('breadcrumbs-container');
        if (!breadcrumbsContainer) return;

        const ol = breadcrumbsContainer.querySelector('.breadcrumbs-list');
        if (!ol) return;

        const breadcrumbs = [];

        // Breadcrumb Inici
        breadcrumbs.push({
            nombre: "Inici",
            url: "index.html"
        });

        // Breadcrumb Digitalització
        breadcrumbs.push({
            nombre: "Digitalització",
            url: null
        });

        // Breadcrumb del slide actual
        if (slideIndex !== null && slideTitles[slideIndex]) {
            breadcrumbs.push({
                nombre: slideTitles[slideIndex],
                url: null
            });

            // Breadcrumb de la página interna
            if (pageNum) {
                breadcrumbs.push({
                    nombre: `Pàgina ${pageNum}`,
                    url: null
                });
            }
        }

        const breadcrumbsHTML = breadcrumbs
            .map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return `
                    <li>
                        ${index > 0 ? `
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        ` : ''}
                        ${isLast ? `
                            <span class="current-page">${crumb.nombre}</span>
                        ` : crumb.url ? `
                            <a href="${crumb.url}">${crumb.nombre}</a>
                        ` : `
                            <span class="intermediate">${crumb.nombre}</span>
                        `}
                    </li>
                `;
            })
            .join('');

        ol.innerHTML = breadcrumbsHTML;
    }

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        if (slides[currentSlide]) {
            slides[currentSlide].classList.add('active');
            currentIframe = 1;
            showIframe(slides[currentSlide], 1);
        }
        if (navLinks[currentSlide]) {
            navLinks[currentSlide].classList.add('active');
            dropdownBtn.textContent = navLinks[currentSlide].textContent;
        }

        // Actualizar breadcrumbs
        generarBreadcrumbs(currentSlide, 1);
    }

    if (slides.length > 0) {
        showSlide(currentSlide);

        slides.forEach(slide => {
            const buttons = slide.querySelectorAll('[data-iframe]');
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    const iframeNum = parseInt(this.getAttribute('data-iframe'));
                    showIframe(slide, iframeNum);
                });
            });
        });

        if (nextButton) nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
        if (prevButton) prevButton.addEventListener('click', () => showSlide(currentSlide - 1));

        if (dropdownBtn) {
            dropdownBtn.addEventListener('click', function() {
                dropdownContent.classList.toggle('show');
            });
        }

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const slideIndex = parseInt(this.getAttribute('data-slide-index'));
                showSlide(slideIndex);
                dropdownContent.classList.remove('show');
            });
        });

        window.addEventListener('click', function(event) {
            if (dropdownBtn && !dropdownBtn.contains(event.target)) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    }
});
