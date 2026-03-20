(function(){
    'use strict';
    console.log('reading js');

    const gameHeader = document.querySelector('#game-header');
    const castOverlay = document.querySelector('#cast-overlay');
    const castOverlaySection = document.querySelector('#cast-overlay section');
    const castCloud = document.querySelector('#cast-cloud');
    const castClear = document.querySelector('#cast-clear');
    const castStar = document.querySelector('#cast-star');
    const skyGaze = document.querySelector('#skygaze-btn');

    const left1p = document.querySelector('#left-1p');
    const left2p = document.querySelector('#left-2p');
    const left3p = document.querySelector('#left-3p');

    const right1p = document.querySelector('#right-1p');
    const right2p = document.querySelector('#right-2p');
    const right3p = document.querySelector('#right-3p');

    const leftPoints = [left1p, left2p, left3p];
    const rightPoints = [right1p, right2p, right3p];

    const avatarsAndWeather = document.querySelector('#avatars-and-weather');
    const weatherCloudImg = document.querySelector('#weather-cloud');
    const weatherClearImg = document.querySelector('#weather-clear');
    const weatherStarImg = document.querySelector('#weather-star');
    const roundResultDraw = document.querySelector('#rr-draw');
    const roundResultSun = document.querySelector('#rr-sun');
    const roundResultMoon = document.querySelector('#rr-moon');
    const timeToCastBtn = document.querySelector('#time-to-cast');

    let roundNum;
    let randomSkyStar;
    let p1Score;
    let p2Score;
    let p1Chosen, p2Chosen;
    let winningWeather;

    // START GAME 
    //     title page start button 
    document.querySelector('#start-game').addEventListener('click', function(){
        // console.log('start game clicked');
        document.querySelector('#title-page').style.display = 'none';
        randomSkyStar = Math.floor(Math.random() * 5) + 1;
        console.log(`randomSkyStar is ${randomSkyStar}`);
        roundNum = 0;
        p1Score = 0;
        p2Score = 0;
        checkRound();
    })

    // CHECK ROUND
    function checkRound(){
        // console.log('checkRound called');
        if(roundNum < 5){
            startRound();
        } else {
            endGame();
        }
    }

    // START ROUND
    function startRound(){
        // console.log('startRound called');
        roundNum++;
        console.log(`roundNum is ${roundNum}`);
        gameHeader.style.display = 'block';
        document.querySelector('#avatar-sun').style.display = 'block';
        document.querySelector('#avatar-moon').style.display = 'block';
        castOverlay.style.display = 'block';
        castOverlaySection.style.display = 'flex';
        castCloud.style.display = 'block';
        castClear.style.display = 'block';
        castStar.style.display = 'block';
        avatarsAndWeather.style.display = 'flex'
        p1CastWeather();
    }

    function p1CastWeather(){
        // console.log('p1CastWeather called');
        castCloud.addEventListener('click', p1ChosenWeather);
        castClear.addEventListener('click', p1ChosenWeather);
        castStar.addEventListener('click', p1ChosenWeather);

        function p1ChosenWeather(){
            p1Chosen = this.id;

            castCloud.removeEventListener('click', p1ChosenWeather);
            castClear.removeEventListener('click', p1ChosenWeather);
            castStar.removeEventListener('click', p1ChosenWeather);
            
            if (p1Chosen == 'cast-cloud') {
                castCloud.style.visibility = 'hidden';
                // chosenCloud.style.display = 'block';
                document.querySelector('#p1-avatar-cloud').style.display = 'block';
            } else if(p1Chosen == 'cast-clear') {
                castClear.style.visibility = 'hidden';
                document.querySelector('#p1-avatar-clear').style.display = 'block';
            } else {
                castStar.style.visibility = 'hidden';  
                document.querySelector('#p1-avatar-star').style.display = 'block';
            }
            p2CastWeather();
        }
    }


    function p2CastWeather(){
        castCloud.addEventListener('click', p2ChosenWeather);
        castClear.addEventListener('click', p2ChosenWeather);
        castStar.addEventListener('click', p2ChosenWeather);

        // p2CastWeather();

        function p2ChosenWeather(){
            p2Chosen = this.id;
            // remove all event listeners
            castCloud.removeEventListener('click', p2ChosenWeather);
            castClear.removeEventListener('click', p2ChosenWeather);
            castStar.removeEventListener('click', p2ChosenWeather);
            // let p1Cast = castCloud;
            if (p2Chosen == 'cast-cloud') {
                castCloud.style.visibility = 'hidden';
                // chosenCloud.style.display = 'block';
                document.querySelector('#p2-avatar-cloud').style.display = 'block';
            } else if(p2Chosen == 'cast-clear') {
                castClear.style.visibility = 'hidden';
                document.querySelector('#p2-avatar-clear').style.display = 'block';
            } else {
                castStar.style.visibility = 'hidden'; 
                document.querySelector('#p2-avatar-star').style.display = 'block'; 
            }
            castOverlaySection.style.display = 'none';
            document.querySelector('#overlay-title').style.display = 'none';
            skyGaze.style.display = 'flex';
        }
    }

    skyGaze.addEventListener('click', function(){
        castOverlay.style.display = 'none';
        gamePlay();
    });

    function gamePlay(){
        if(randomSkyStar != roundNum){
            // console.log('not shooting star round');
            //  randomize skyCloud or skyClear
            // 0 is clear (false) and 1 is cloud (true)
            const clearOrCloud = Math.floor(Math.random() * 2);
            if(clearOrCloud) {
                winningWeather = 'cast-cloud';
                weatherCloudImg.style.display = 'block';
            } else {
                winningWeather = 'cast-clear';
                weatherClearImg.style.display = 'block';
            }         
        } else {
        //    console.log('show shooting star');
            winningWeather = 'cast-star';
            weatherStarImg.style.display = 'block';
        }
        
        roundResult();
    }

    function roundResult(){
        console.log(`roundResult called and winningWeather is ${winningWeather} and p1Chosen is ${p1Chosen} and p2Chosen is ${p2Chosen}`)
        if (winningWeather != p1Chosen && winningWeather != p2Chosen) {
            roundResultDraw.style.display = 'block';
            timeToCast();

        } else if (p1Chosen == winningWeather) {
            p1Score++;
            console.log(`p1score is ${p1Score}`);
            roundResultSun.style.display = 'block';
            // p1PlusPt.style.display = 'block';
            // show score
            console.log(leftPoints[p1Score-1])
            leftPoints[p1Score-1].style.display = 'block';
            timeToCast();

        } else if (p2Chosen == winningWeather){
            // P2 score 1++
            p2Score++;
            console.log(`p2Score is ${p2Score}`);
            roundResultMoon.style.display = 'block';
            // p2PlusPt.style.display = 'block';
             // show score
             console.log(rightPoints[p2Score-1])
            rightPoints[p2Score-1].style.display = 'block';
            timeToCast();
        }

        function timeToCast(){
            // weather section.style.display = 'hide';
            timeToCastBtn.style.display = 'block';
            timeToCastBtn.addEventListener('click', function(){
                timeToCastBtn.style.display = 'none';
                checkRound();
            });
        }
    }

    function endGame(){
        gameHeader.style.display = 'none';
        avatarsAndWeather.style.display = 'none'
        document.querySelector('#score').style.display = 'none';

        if (p1Score = p2Score) {
            gameResultDraw.style.display = 'block';
        } else if(p1Score > p2Score){
            gameResultSun.style.display = 'block';
        } else if(p1Score < p2Score){
            gameResultMoon.style.display = 'block';
        }
    }

})();
