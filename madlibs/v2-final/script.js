( function(){
    'use strict';
    console.log('Reading JS');

    const formTag = document.querySelector('#madlib-form');
    
    formTag.addEventListener('submit', function(event){
        event.preventDefault();
        const formData = document.querySelectorAll('input[type=text]');
        let emptyfields = 0;

        if (emptyfields > 0){
            document.querySelector('#error-msg').innerHTML = 'There are empty fields!'
        } else {
            const adverbInput = document.querySelector('#adverb-input').value;
            const verb1Input = document.querySelector('#verb1-input').value;
            const pln1Input = document.querySelector('#pln1-input').value;
            const verb2Input = document.querySelector('#verb2-input').value;
            const pln2Input = document.querySelector('#pln2-input').value;
            const adj1Input = document.querySelector('#adj1-input').value;
            const verb3Input = document.querySelector('#verb3-input').value;
            const adj2Input = document.querySelector('#adj2-input').value;
            document.querySelector('article').innerHTML = `<p>I was up late studying when <span>${adverbInput}</span> the words on the page start to <span id="verb1">${verb1Input}</span>.</p><p>Then the <span id="pln1">${pln1Input}</span> in my room <span id="verb2">${verb2Input}</span> around in the air and I hear the sound of <span id="pln2">${pln2Input}</span> outside my window.</p><p>I thought I was losing my mind and I felt pretty <span id="adj1">${adj1Input}</span>.</p><p>But now that I <span id="verb3">${verb3Input}</span> about it, I woke up at my desk this morning...</p> <p>So I must've just fallen <span id="adj2">${adj2Input}</span>!</p>`;

            document.querySelector('article').addEventListener('mouseenter', function(event){
            console.log('Mouse entered article');      

                document.querySelector('#cloud1').style.top = '30px';
                document.querySelector('#cloud1').style.left = '390px';

                document.querySelector('#cloud2').style.top = '100px';
                document.querySelector('#cloud2').style.left = '1050px';
                
                document.querySelector('#cloud3').style.top = '250px';
                document.querySelector('#cloud3').style.left = '450px';

                document.querySelector('#cloud4').style.top = '350px';
                document.querySelector('#cloud4').style.left = '1050px';

                document.querySelector('#cloud5').style.top = '620px';
                document.querySelector('#cloud5').style.left = '1100px';

                document.querySelector('#cloud6').style.top = '550px';
                document.querySelector('#cloud6').style.left = '400px';
                
                document.querySelector('#tiny-cloud1').style.top = '270px';
                document.querySelector('#tiny-cloud1').style.left = '1120px';

                document.querySelector('#tiny-cloud2').style.top = '440px';
                document.querySelector('#tiny-cloud2').style.left = '460px';
            });
        }
    });
})();