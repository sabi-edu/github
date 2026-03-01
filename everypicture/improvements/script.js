(function() {
    'use strict';
    console.log('reading js');

    // make this better by calculating that any portion of the pointer is within the hitbox, do this by calculating from all four sides of the pointer using getBoundingClientRect as oppposed to just top and left values, but close enough for now

    const center = document.querySelector('#center');
    
    const hit1 = document.querySelector('#hit1');
    const hit2 = document.querySelector('#hit2');
    const hit3 = document.querySelector('#hit3');
    
    const pointer = document.querySelector('#pointer');
        
    const hitBoxes = [hit1, hit2, hit3];
    let hitBoxesXmin, hitBoxesXmax, hitBoxesYmin, hitBoxesYmax;
    let centerLeftPosn, centerTopPosn;
    let x, y;
    const speed = 10;

    // populate the arrays with values
    getLocations();

    // call this at project load and when window resizes
    function getLocations(){
    // calculate the starting point of the pointer taking into consideration where the center div is
    centerLeftPosn = center.getBoundingClientRect().left;
    centerTopPosn = center.getBoundingClientRect().top;

    x = pointer.getBoundingClientRect().left - centerLeftPosn;
    y = pointer.getBoundingClientRect().top; - centerTopPosn;

    // console.log(x, y)

    // empty array and get values again
        hitBoxesXmin = [];
        hitBoxesXmax = [];
        hitBoxesYmin = [];
        hitBoxesYmax = [];

        for (const hitBox of hitBoxes){
            hitBoxesXmin.push(Math.floor(hitBox.getBoundingClientRect().left - centerLeftPosn));

            hitBoxesXmax.push(Math.floor(hitBox.getBoundingClientRect().right - centerLeftPosn));

            hitBoxesYmin.push(Math.floor(hitBox.getBoundingClientRect().top - centerTopPosn)) - centerTopPosn;

            hitBoxesYmax.push(Math.floor(hitBox.getBoundingClientRect().bottom - centerTopPosn));

        }
    }

    document.addEventListener('keydown', function(event) {

        if (event.key === 'ArrowUp') y -= speed;
        if (event.key === 'ArrowDown') y += speed;
        if (event.key === 'ArrowLeft') x -= speed;
        if (event.key === 'ArrowRight') x += speed;

        pointer.style.top = y + 'px';
        pointer.style.left = x + 'px';
        // console.log(`x is ${x} and y is ${y}`);

        for (let i = 0; i < hitBoxes.length; i++) {
            if (x >= hitBoxesXmin[i] && x < hitBoxesXmax[i] && y >= hitBoxesYmin[i] && y < hitBoxesYmax[i]) {
                console.log('hit spot');
                hitBoxes[i].style.opacity = '100%';
            } else {
                    hitBoxes[i].style.opacity = '0%';
            }
        }
    });   
    
    window.addEventListener('resize', getLocations);
    
})();