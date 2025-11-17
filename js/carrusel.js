document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carrusel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownContent = document.getElementById('carruselDropdown');
    const navLinks = dropdownContent.querySelectorAll('a');
    let currentSlide = 0;

    function showIframe(slide, iframeNum) {
        const iframes = slide.querySelectorAll('.content-iframe');
        const buttons = slide.querySelectorAll('[data-iframe]');

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
    }

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        if (slides[currentSlide]) {
            slides[currentSlide].classList.add('active');
            showIframe(slides[currentSlide], 1);
        }
        if (navLinks[currentSlide]) {
            navLinks[currentSlide].classList.add('active');
            dropdownBtn.textContent = navLinks[currentSlide].textContent;
        }
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
