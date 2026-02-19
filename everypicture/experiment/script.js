(function() {
    'use strict';
    console.log('reading js');

    const pointer = document.querySelector('#pointer');
    const bigImg = document.querySelector('figure img');
    const img1Tag = document.querySelector('#img1');
    const img2Tag = document.querySelector('#img2');
    
    let x = 100;
    let y = 100;
    let speed = 30;

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp') y -= speed;
        if (event.key === 'ArrowDown') y += speed;
        if (event.key === 'ArrowLeft') x -= speed;
        if (event.key === 'ArrowRight') x += speed;

        pointer.style.top = y + 'px';
        pointer.style.left = x + 'px';

        img1Tag.className = '';
        img2Tag.className = '';
        bigImg.className = 'zoom-normal';

        if (x < 300 && y < 300) {
            img1Tag.className = 'show-section';
        } else if (x > 500 && y < 300) {
            img2Tag.className = 'show-section';
        }
    });
})();