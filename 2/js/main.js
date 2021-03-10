const CANVAS = document.querySelector('canvas');

CANVAS.width = window.innerWidth * 2;
CANVAS.height = window.innerHeight * 2;

CANVAS.style.width = window.innerWidth + 'px';
CANVAS.style.height = window.innerHeight + 'px';

let half = CANVAS.width;
console.log(half);

const CONTEXT = CANVAS.getContext('2d');
CONTEXT.scale(2, 2); // Double for retina screens

let aimX = null;
let aimY = null;
let currentX = null;
let currentY = null;

let i = 0;
// Left
let images_2 = ['img/b.png', 'img/b2.jpg', 'img/b3.jpg'].map(src => {
    let image = document.createElement('img');
    image.src = src;
    return image;
})

// Right
let images = ['img/a.jpg', 'img/a2.jpg', 'img/a3.jpg'].map(src => {
    let image = document.createElement('img');
    image.src = src;
    return image;
})

document.addEventListener('mousemove', (event) => {
    // Left
    aimX_2 = (CANVAS.width / 2) - event.pageX; // aimX = event.pageX;
    
    // Right
    aimX = event.pageX;
    aimY = event.pageY;

    if (currentX === null) {
        currentX_2 = event.pageX;
        currentX = event.pageX;
        currentY = event.pageY;
    }
});

CANVAS.addEventListener('click', () => {
    i = i + 1;
    if (i >= images.length) {
        i = 0;
    }
});

const draw =  () => {
    if (currentX) {
        if (images[i].complete) {
            CONTEXT.drawImage(images[i], currentX - 140, currentY - 77, 280, 154); // Remove half of the size to center
        }
        if (images_2[i].complete) {
            CONTEXT.drawImage(images_2[i], currentX_2 - 140, currentY - 77, 280, 154); // Remove half of the size to center
        }
        currentX_2 = currentX_2 + (aimX_2 - currentX_2) * 0.01;
        currentX = currentX + (aimX - currentX) * 0.01;
        currentY = currentY + (aimY - currentY) * 0.01;
    }
    requestAnimationFrame(draw);
}

draw();

