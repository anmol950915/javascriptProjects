// creating global variables 
// all variables being manipulated are being created
//window.addEventListener('load',init);
init();
alert("hi");
let time=4;
let score=0;
//will be reassigned;
let isPlaying;


//retrieving all DOm elements for manipulation,used id

const wordInput = document.querySelector("#word-input");
const message = document.querySelector("#message");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const currentWord = document.querySelector("#current-word");
const seconds = document.querySelector("#seconds");

//random words array
const words =[
    'hatiyar' ,'river','singhania','sattu bhai',
    'lulli bro','abhinish','rapidowala','olawala',
    'uberwala', 'ramesh babu' ,'flipkart' ,'fod diya kya',
    'ashwini pai kuchelkar', 'tarak mehta', 'chotu bhai', 'time left', 
    'word beater' ,'pagal hai kya','kurkure','sadhu sant' ,
    'shonali madam' , 'tera dhyan kidhar hai',
]


function init(){
    //load word from array
    showWord(words);



    // to repeat something we use setinterval

    wordInput.addEventListener('input',startMatch);

    setInterval(countdown,1000);

    setInterval(checkStatus,50);

    

}

// pick random word

function showWord(words){
    //Generate random array index
    const randIndex = Math.floor(Math.random()* words.length);
    currentWord.innerHTML = words[randIndex];


}

function countdown(){
//check if time is runout

    if(time>0){
        time--;

    }

    else if(time===0)
     {
        isPlaying=false;
    }

    timeDisplay.innerHTML = time;


}

function checkStatus(){

    if(!isPlaying && time===0){
        message.innerHTML="Game Over!!!";
        score=-1; 
    }


}

function startMatch()   {
    if(matchwords()){
       isPlaying=true;
       time=4;
       showWord(words);
       wordInput.value='';
       score++;
    }

    if(score===-1){
    scoreDisplay.innerHTML = 0;
 } else{
    scoreDisplay.innerHTML = score;
 }
 
}


function matchwords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML="Sahi hai";
        return true;
    }
    else{
        message.innerHTML ='';
        return false;
    }
}







