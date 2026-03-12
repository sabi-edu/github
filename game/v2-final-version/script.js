(function(){
    'use strict';
    console.log('reading js');

    const body = document.querySelector('body');
    const titlePage = document.querySelector('#title-page');
    const startGame = document.querySelector('#title-page-skygaze-btn');
    
    const title = document.querySelector('#title');
    const utilHelp = document.querySelector('#util-help');
    const utilSettings = document.querySelector('#util-settings');
    
    const castingOverlay = document.querySelector('#casting-overlay');
    const overlayTitle = document.querySelector('#overlay-title');
    const iconSun = document.querySelector('#avatar-icon-sun');
    const iconMoon = document.querySelector('#avatar-icon-sun');
    const guessCloud = document.querySelector('#guess-common-cloud');
    const guessClear = document.querySelector('#guess-common-clear');
    const guessStar = document.querySelector('#guess-rare-star');
    const castSkygazeBtn = document.querySelector('#skygaze-btn');
    
    const avatarSun = document.querySelector('#avatar-sun');
    const leftChosenCloud = document.querySelector('#left-chosen-cloud');
    const leftChosenClear = document.querySelector('#left-chosen-clear');
    const leftChosenStar = document.querySelector('#left-chosen-star');
    const leftScore1 = document.querySelector('#left-score-one');
    const leftScore2 = document.querySelector('#left-score-two');
    const leftScore3 = document.querySelector('#left-score-three');
    const leftScore4 = document.querySelector('#left-score-four');
    const leftScore5 = document.querySelector('#left-score-five');
    const leftPlusPt = document.querySelector('#left-plus-point');
    
    const avatarMoon = document.querySelector('#avatar-moon');
    const rightChosenCloud = document.querySelector('#right-chosen-cloud');
    const rightChosenClear = document.querySelector('#right-chosen-clear');
    const rightChosenStar = document.querySelector('#right-chosen-star');
    const rightScore1 = document.querySelector('#right-score-one');
    const rightScore2 = document.querySelector('#right-score-two');
    const rightScore3 = document.querySelector('#right-score-three');
    const rightScore4 = document.querySelector('#right-score-four');
    const rightScore5 = document.querySelector('#right-score-five');
    const rightPlusPt = document.querySelector('#right-plus-point');

    const skyCloud = document.querySelector('#sky-cloud');
    const skyClear = document.querySelector('#sky-clear');
    const skyStar = document.querySelector('#sky-star');
    const winnerSun = document.querySelector('#round-result-sun');
    const winnerMoon = document.querySelector('#round-result-moon');
    const winnerDraw = document.querySelector('#round-result-draw');
    
    


    let roundNum = 0;

    const gameData = {
        commonWeather: ['cloud', 'clear'],
        rareWeather: ['star'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
    };


    // -- START GAME --
    
    title.style.display = 'none'
    utilHelp.style.display = 'none'
    utilSettings.style.display = 'none'
    
    castingOverlay.style.display = 'none';
    overlayTitle.style.display = 'none';
    iconSun.style.display = 'none';
    iconMoon.style.display = 'none';
    guessCloud.style.display = 'none';
    guessClear.style.display = 'none';
    guessStar.style.display = 'none';
    castSkygazeBtn.style.display = 'none';
    
    avatarSun.style.display = 'none';
    leftChosenCloud.style.display = 'none';
    leftChosenClear.style.display = 'none';
    leftChosenStar.style.display = 'none';
    leftScore1.style.display = 'none';
    leftScore2.style.display = 'none';
    leftScore3.style.display = 'none';
    leftScore4.style.display = 'none';
    leftScore5.style.display = 'none';
    leftPlusPt.style.display = 'none';
    leftScore5.style.display = 'none';

    avatarMoon.style.display = 'none';
    rightChosenCloud.style.display = 'none';
    rightChosenClear.style.display = 'none';
    rightChosenStar.style.display = 'none';
    rightScore1.style.display = 'none';
    rightScore2.style.display = 'none';
    rightScore3.style.display = 'none';
    rightScore4.style.display = 'none';
    rightScore5.style.display = 'none';
    rightPlusPt.style.display = 'none';
    rightScore5.style.display = 'none';
    
    skyCloud.style.display = 'none';
    skyClear.style.display = 'none';
    skyStar.style.display = 'none';
    winnerSun.style.display = 'none';
    winnerMoon.style.display = 'none';
    winnerDraw.style.display = 'none';
    



    
    startGame.addEventListener('click', function(){
        // let starRound = Math.floor(Math.random() * roundNum.length);
        // console.log(starRound);

        titlePage.style.display = 'none';
        title.style.display = 'block'
        utilHelp.style.display = 'block'
        utilSettings.style.display = 'block'

        castingOverlay.style.display = 'block';
        overlayTitle.style.display = 'block';
        iconSun.style.display = 'block';
        iconMoon.style.display = 'block';
        guessCloud.style.display = 'block';
        guessClear.style.display = 'block';
        guessStar.style.display = 'block';

        avatarSun.style.display = 'block';
        avatarMoon.style.display = 'block';

        // Start roundNum count ?
        roundNum = 0;
        checkRound();
    
        function checkRound() {
            if(roundNum < 5){
                roundNum++;
                playRound();
            } else {
                console.log('The last round of the game is complete!');
                // Check which player has the higher score
            } 
        }

        function playRound(){
            console.log(`Round ${roundNum} has started.`);
            
            // How to make it so Sun can click/cast one weather? Maybe template literal -- guess${weather} -- but not sure how
            guessCloud.addEventListener('click', function(){
                console.log('Sun casted cloudy weather!');
                guessCloud.style.display = 'none';
                leftChosenCloud.style.display = 'block';

                guessStar.addEventListener('click', function(){
                    console.log('Moon StarCasted!');
                    guessStar.style.display = 'none';
                    rightChosenStar.style.display = 'block';
                    castSkygazeBtn.style.display = 'block';

                    castSkygazeBtn.addEventListener('click', function(){
                        castingOverlay.style.display = 'none';
                        overlayTitle.style.display = 'none';
                        iconSun.style.display = 'none';
                        iconMoon.style.display = 'none';
                        guessCloud.style.display = 'none';
                        guessClear.style.display = 'none';
                        guessStar.style.display = 'none';
                        castSkygazeBtn.style.display = 'none';

                        // Randomly select and display sky result
                        skyStar.style.display = 'block';
                        // if(`${player}chosen${weather} = sky${weather}`){
                            console.log('The round winner is Moon!');
                            winnerMoon.style.display = 'block';
                            rightPlusPt.style.display = 'block';
                            rightScore1.style.display = 'block';

                            body.addEventListener('click', function(){
                                checkRound();
                                });
                        // }
                    });
                });
            });
        } 
    });
})();

// for(let i=0; i<5; i++){
                // console.log(`Round ${i + 1} has started!`);




    // <!-- At start of game, randomly set which round will be shooting star -->
    //      <!-- Only randomly select other weather if not random number for shooting star, and if random #(round #) for shooting star - check if anyone chose star -->
    //      <!-- Randomly select which player goes first -->
    //     <!-- Player on the left goes first (switch players)-->
    //      <!-- Re-enable addevent listener each round -->
    //      <!-- Remove event listener after click, make choice look not choosable/clickable -->
    //         <!-- tell which event to remove -->
    //      <!-- 1st click to first player, 2nd to 2nd -->