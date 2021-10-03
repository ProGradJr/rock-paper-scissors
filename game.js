const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const userRock = document.getElementById("user-rock");
const userPaper = document.getElementById("user-paper");
const userScissors = document.getElementById("user-scissors");

const comRock = document.getElementById("com-rock");
const comPaper = document.getElementById("com-paper");
const comScissors = document.getElementById("com-scissors");

var num = Math.floor(Math.random()*3);
const userScore=document.getElementById("user-score");
const comScore=document.getElementById("com-score");

const gameContainer=document.getElementById("game-container");
const optionContainer=document.getElementById("options-container");
const result=document.getElementById("result");
const resultContainer=document.getElementById("result-container");
const playAgain=document.getElementById("button");

var $userScore =0;
var $comScore =0;

function randomise(){
    num = Math.floor(Math.random()*3);
    if(num===0){
        comRock.style.display="block";
        comPaper.style.display="none";
        comScissors.style.display="none";
    }else if(num===1){
        comRock.style.display="none";
        comPaper.style.display="block";
        comScissors.style.display="none";
    }else if(num===2){
        comRock.style.display="none";
        comPaper.style.display="none";
        comScissors.style.display="block";
    }else{
        randomise();
    }
}

rock.onclick=()=>{
    randomise();
    userRock.style.display="block";
    userPaper.style.display="none";
    userScissors.style.display="none";
    if(num===1){
        $comScore++
    }else if(num==2){
        $userScore++
    }
    comScore.innerHTML=$comScore;
    userScore.innerHTML=$userScore;
    checkResult();
}

paper.onclick=()=>{
    randomise();
    userRock.style.display="none";
    userPaper.style.display="block";
    userScissors.style.display="none";
    if(num===0){
        $userScore++
    }else if(num==2){
        $comScore++
    }
    comScore.innerHTML=$comScore;
    userScore.innerHTML=$userScore;
    checkResult();
}

scissors.onclick=()=>{
    randomise();
    userRock.style.display="none";
    userPaper.style.display="none";
    userScissors.style.display="block";
    if(num===0){
        $comScore++
    }else if(num==1){
        $userScore++
    }
    comScore.innerHTML=$comScore;
    userScore.innerHTML=$userScore;
    checkResult();
}

function checkResult() {
    if ($userScore == 5) {
        optionContainer.style.visibility = "hidden";
        resultContainer.style.display = "flex";
        result.innerHTML = "You won the Game";
        $userScore = 0;
        $comScore = 0;
    } else if ($comScore == 5) {
        optionContainer.style.visibility = "hidden";
        resultContainer.style.display = "flex";
        result.innerHTML = "You lose the Game";
        $userScore = 0;
        $comScore = 0;
    }
}
playAgain.onclick = () => {
    location.reload();
}
