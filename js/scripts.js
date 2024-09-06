console.log("Thanks for discovering my portfolio website.");
function menuToggle(){
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle'){
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}

var content = 'Hello, my name is Diane Adote and I design/code beautiful things for the web.';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

$(ele).hide().appendTo('#hero h3').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});


// Carousel functionality

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    if (!slides.length) {
        console.error('No slides found');
        return;
    }

    const totalSlides = slides.length;
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    }

    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        rightArrow.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    } else {
        console.error('Arrow buttons not found');
    }

    // Optional: Auto-slide
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000); // Change slide every 3 seconds
});