var javaScriptQuestions = [
    {
        question: "What is a String",
        possibles: ["data type", "a piece of fabric", "also known as shoe lace"],
        answer: "data type",
    },
    {
        question: "Which syntax is used on a string",
        possibles: ["curly brackets", "quotes", "parentheses", "camel case "],
        answer: "quotes",
    },
    {
        question: "Fast way to check if code is working?",
        possibles: ["add plus sign to end of string", "console.log", "put on a timer"],
        answer: "data type",
    },
    {
        question: "What is a String",
        possibles: ["data type", "a piece of fabric", "also known as shoe lace"],
        answer: "data type",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        possibles: ["numbers and strings", "booleans", "other array", "all of the above",],
        answer: "all of the above",
    },

];

//Timer
var time = 60
var currentQuestion = 0;
var timer;

function startGame() {
    //on start hide wrapper and show question container. start timer
    document.getElementById('wrapper').setAttribute('class', 'hide');
    document.getElementById('divContainer').removeAttribute('class');

    timer = setInterval(() => {
        time--
        document.getElementById('time').textContent = time;

        //if statemtn to check if time is at 0 goes here
        if(time <=0){
            gameOver()
        }
    }, 1000);

    document.getElementById('time').textContent = time;
    showQuestion()
}

// TO show questions and answers
function showQuestion() {
    var theQuestion = javaScriptQuestions[currentQuestion];
    document.getElementById('title').textContent = theQuestion.question;
    var choices = document.querySelector('#questionChoice');
    choices.innerHTML = "";

    for (let i = 0; i < theQuestion.possibles.length; i++) {
        var choiceButton = document.createElement('button')
        choiceButton.textContent = theQuestion.possibles[i]
        choiceButton.setAttribute('value', theQuestion.possibles[i]);
        // add a class so that you can make event listener later
        choiceButton.addEventListener("click", handleResponse);
        choices.appendChild(choiceButton);

    }
}

function handleResponse() {
    // var response = event.target.textContent;
    if (this.value !== javaScriptQuestions[currentQuestion].answer) {
        time -= 15
        document.getElementById('time').textContent = time;
    }


    currentQuestion++
    if (currentQuestion === javaScriptQuestions.length ) {
        gameOver()
    } else {
        showQuestion();
    }
}

function gameOver(){
    clearInterval(timer);

    document.getElementById('divContainer').setAttribute('class', 'hide');
    document.getElementById('finish-section').removeAttribute('class');

    //add element to show final score

}

function submitFinalScore(){
    //check local storage for any highscore data if data doesnt exist return empty array
    var highScores = JSON.parse(localStorage.getItem('highscores')) || []

    //grab initials
   var initials=document.getElementById('inputInitial').value
    //create new obj to save intials and score
var newScore= {
 initials: initials,
 score: time
}
    //push obj into array
    newScore 
    //save array to local Storage
}



// Function opperations.
// -Show me Question
// -Select the answer
// -Show next question/function
// -Show done screen




document.getElementById('start').addEventListener("click", startGame);


