(function() {
    'use strict';
    console.log('reading js');

    const pointer = document.querySelector('#pointer');
    const onboarding = document.querySelector('#onboarding');
    const sections = [
        { id: 'img1', xMin: 0, xMax: 300, yMin: 0, yMax: 300, origin: 'top left', scale: 2 },
        { id: 'img2', xMin: 500, xMax: 800, yMin: 0, yMax: 300, origin: 'top right', scale: 2 },
        { id: 'img3', xMin: 300, xMax: 600, yMin: 400, yMax: 700, origin: 'bottom center', scale: 2.5 }
    ];

    let x = 100;
    let y = 100;
    const speed = 30;
    let timer;

    function startTimer() {
        
    }

    document.addEventListener('mousemove', function() {
        onboarding.class('hidden'); 
    });

    
    document.addEventListener('keydown', function(event) {
        onboarding.class('hidden');
        startTimer();

        if (event.key === 'ArrowUp') y -= speed;
        if (event.key === 'ArrowDown') y += speed;
        if (event.key === 'ArrowLeft') x -= speed;
        if (event.key === 'ArrowRight') x += speed;

        pointer.style.top = `${y}px`;
        pointer.style.left = `${x}px`;

        if (x < 300 && y < 300) {
            img1Tag.className = 'show-section';
        } else if (x > 500 && y < 300) {
            img2Tag.className = 'show-section';
        }

    });

})();