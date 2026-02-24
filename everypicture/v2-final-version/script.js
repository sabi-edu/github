(function() {
    'use strict';
    console.log('reading js');

    // --------------------

    const pointer = document.querySelector('#pointer');    
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const img3 = document.querySelector('#img3');

    const sections = [img1, img2, img3];
    const sectionsXmin = [388, 807, 597];
    const sectionsXmax = [416, 837, 625];
    const sectionsYmin = [168, 343, 483];
    const sectionsYmax = [194, 369, 510];
    const sectionsOrigin = ['top left', 'top right', 'bottom center'];
    const sectionsScale = [2, 2, 2];

    let x = 100;
    let y = 100;
    const speed = 30;

    // --------------------

    document.addEventListener('keydown', function(event) {

        // onboarding.className = 'hidden';
        // startTimer();

        if (event.key === 'ArrowUp') y -= speed;
        if (event.key === 'ArrowDown') y += speed;
        if (event.key === 'ArrowLeft') x -= speed;
        if (event.key === 'ArrowRight') x += speed;

        pointer.style.top = y + 'px';
        pointer.style.left = x + 'px';
        console.log(`x is ${x} and y is ${y}`);

        // setTimeout(function(){
        //     // Psuedo code
        //     if (pointer.style.top + > 0 'px' || pointer.style.left + > 0 'px'){
        //         onboarding.className = 'shown';
        //         setTimeout(function(){
        //             onboarding.className = 'hidden';
        //         }, 2000);
        //     };
        // }, 2000);

        for (let i = 0; i < sections.length; i++) {

            console.log(`xMin is ${sectionsXmin[i]} and 
            xMax is ${sectionsXmax[i]} and 
            yMin is ${sectionsYmin[i]} and 
            yMax is ${sectionsYmax[i]}`);

            if (x >= sectionsXmin[i] && 
            x < sectionsXmax[i] && 
            y >= sectionsYmin[i] && 
            y < sectionsYmax[i]) {
                
                closeAllSections();
                sections[i].className = 'shown';
            }
        }

        function closeAllSections() {
            for (let i = 0; i < sections.length; i++) {
                sections[i].className = 'hidden';
            }
        }
    });
})();