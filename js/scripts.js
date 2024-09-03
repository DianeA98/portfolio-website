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
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalItems = items.length;

// Show the current slide and update active dot
function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    updateDots(index);
}

// Update the active dot
function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Next slide
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
});

// Previous slide
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
});

// Dots click event
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Initialize the carousel
showSlide(currentIndex);

// Touch slide functionality
let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', () => {
    if (startX > endX + 50) { // Swipe left
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    } else if (startX < endX - 50) { // Swipe right
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    }
});