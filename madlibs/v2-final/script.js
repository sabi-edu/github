( function(){
    'use strict';
    console.log('Reading JS');

    // The form inputs need to show up in their corresponding spot
        // Put form inputs into a variable
        // need to check for submit event
    // Prevent clouds from moving before form is correctly submitted

    const formTag = document.querySelector('#madlib-form');
    
    const adverbTag = document.querySelector('#adverb');
    const verb1Tag = document.querySelector('#verb1');
    const pln1Tag = document.querySelector('#pln1');
    const verb2Tag = document.querySelector('#verb2');
    const pln2Tag = document.querySelector('#pln2');
    const adj1Tag = document.querySelector('#adj1');
    const verb3Tag = document.querySelector('#verb3');
    const adj2Tag = document.querySelector('#adj2');
    
    formTag.addEventListener('submit', function(event){
        event.preventDefault();

        const adverbInput = document.querySelector('#adverb-input').value;
        const verb1Input = document.querySelector('#verb1-input').value;
        const pln1Input = document.querySelector('#pln1-input').value;
        const verb2Input = document.querySelector('#verb2-input').value;
        const pln2Input = document.querySelector('#pln2-input').value;
        const adj1Input = document.querySelector('#adj1-input').value;
        const verb3Input = document.querySelector('#verb3-input').value;
        const adj2Input = document.querySelector('#adj2-input').value;

        adverbTag.innerHTML = adverbInput;
        verb1Tag.innerHTML = verb1Input;
        pln1Tag.innerHTML = pln1Input;
        verb2Tag.innerHTML = verb2Input;
        pln2Tag.innerHTML = pln2Input;
        adj1Tag.innerHTML = adj1Input;
        verb3Tag.innerHTML = verb3Input;
        adj2Tag.innerHTML = adj2Input;

    });

} )();