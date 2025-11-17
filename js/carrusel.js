document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carrusel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownContent = document.getElementById('carruselDropdown');
    const navLinks = dropdownContent.querySelectorAll('a');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (navLinks[currentSlide]) {
            navLinks[currentSlide].classList.add('active');
            dropdownBtn.textContent = navLinks[currentSlide].textContent;
        }
    }

    if (slides.length > 0) {
        showSlide(currentSlide);

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