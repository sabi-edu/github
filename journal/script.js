(function(){
    'use strict';
    console.log('reading js');

    const article1 = document.querySelector('#a1');
    const article2 = document.querySelector('#a2');
    const article3 = document.querySelector('#a3');
    const article4 = document.querySelector('#a4');
    const article5 = document.querySelector('#a5');

    const article = ['article1', 'article2', 'article3', 'article4', 'article5'];

    article[i].addEventListener('click', function(){
        article[i].style.className = 'shown';
    });

})();