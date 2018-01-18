window.addEventListener('load', init);

//object array with questions, answer list, and correct answer
var questions = [
    {
        id: 0,
        question: "What continent is in all four hemispheres?",
        correctAnswer: "Africa",
        answers: [
            'Europe',
            'South America',
            'Africa',
            'Australia'
        ]
    },
    {
        id: 1,
        question: "How many countries are completely landlocked by just one other country?",
        correctAnswer: "3",
        answers: [
            '1',
            '3',
            '6',
            '15'
        ]
    },
    {
        id: 2,
        question: "What country has the longest coastline?",
        correctAnswer: "Canada",
        answers: [
            'Russia',
            'USA',
            'India',
            'Canada'
        ]
    },
    {
        id: 3,
        question: "Which continent has the most countries?",
        correctAnswer: "Africa",
        answers: [
            'Asia',
            'Africa',
            'Europe',
            'North America'
        ]
    },
    {
        id: 4,
        question: "Which is the most spoken language in the world?",
        correctAnswer: "Chinese",
        answers: [
            'Chinese',
            'Spanish',
            'English',
            'Arabic'
        ]
    },
    {
        id: 5,
        question: "With how many countries does China shares borders with?",
        correctAnswer: "14",
        answers: [
            '20',
            '3',
            '14',
            '10'
        ]
    },
    {
        id: 6,
        question: "What percentage of the population lives in the Northern Hemisphere?",
        correctAnswer: "90%",
        answers: [
            '50%',
            '60%',
            '85%',
            '90%'
        ]
    },
    {
        id: 7,
        question: "Where are the Angel Falls located?",
        correctAnswer: "Venezuela",
        answers: [
            'Ecuador',
            'Venezuela',
            'Brazil',
            'Colombia'
        ]
    },
    {
        id: 8,
        question: "How many time zones does Russia have?",
        correctAnswer: "11",
        answers: [
            '11',
            '9',
            '6',
            '3'
        ]
    },
    {
        id: 9,
        question: "Which continent has the most languages?",
        correctAnswer: "Africa",
        answers: [
            'Latin America',
            'Australia',
            'Africa',
            'Asia'
        ]
    },
]
var randomNumber; //number used to select a random question
var answerChosen; //answer clicked by player
var counterCorrectAnswers = 0; //counts how many questions have been answered correctly
var currentQuestion; //questions that is currently being shown
var intro = document.getElementById('intro'); //intro page
var allQuestions = document.getElementById('allQuestions'); //division with html for questions
var results = document.getElementById('results'); //results page
var next = document.getElementById('next'); //button for next question

function init() {
    //code to only display the intro division
    allQuestions.style.display = 'none';
    results.style.display = 'none';
    next.style.display = 'none';

    //code to start quiz once player clicks in "play" button
    var play = document.getElementById('play');
    play.addEventListener('click', nextQuestion);
    
    //creates an array of all answers of current question
    answerChosen = document.getElementsByClassName('answer');
    
    //allows all answer choices to be clickable
    for (i=0; i < answerChosen.length; i++) {
        answerChosen[i].addEventListener('click', checkAnswer);
    }     
}

function nextQuestion () {
    //doesn't allow player to skip questions
    next.removeEventListener('click', nextQuestion);

    //only displays allQuestions division of html
    intro.style.display = 'none';
    allQuestions.style.display = 'block';
    next.style.display = 'block';

    //gives a random number from 0 to the questions array length and stores it in randomNumber
    randomNumber = Math.floor(Math.random() * questions.length);

    //stores que question in the index chosen preciously into currentQuestion
    currentQuestion = questions[randomNumber];

    //changes the text in the html file for the question text stored in currentQuestion
    var question = document.getElementById('question');
    question.innerHTML = currentQuestion.question;

    //changes text in html for the answer choices stored in currentQuestion
    for (i=0; i < 4; i++) {
        var answer = document.getElementById('answer-' + (i+1));
        answer.innerHTML = currentQuestion.answers[i];

        answer.className = "answer"; //gives the class name "answer" to each answer (erasing "incorrect" or  "correct" from previous)

        answer.addEventListener('click', checkAnswer); //makes all answers clickable again
    }

    questions.splice(randomNumber, 1); //removes question displayed from questions array
}

function resultPage () {
    //only displays results division from html
    allQuestions.style.display = 'none';
    next.style.display = 'none';
    results.style.display = 'block';

    //changes the text of the score in the result page to the result of the player
    var scoreText = document.getElementById ('score');
    scoreText.innerHTML = counterCorrectAnswers + '/10';
    
}

function checkAnswer(e) {
    var clickedButton = e.currentTarget; //gets answer clicked by player and stores it
    var answerText = clickedButton.textContent; //gets the text in the answer chosen by the player and stores it

    if (answerText === currentQuestion.correctAnswer) { //if answer is chosen is correct
        
        clickedButton.className = "answer correct"; //makes it green

        counterCorrectAnswers ++; //adds one to counter
    }

    else { //if answer chosen is incorrect
        clickedButton.className = "answer incorrect"; //makes answer chosen red
        var rightAnswerIndex;
        
        for (i=0; i<4; i++) { //finds index of correct answer
            if (currentQuestion.correctAnswer === currentQuestion.answers[i]) {
                rightAnswerIndex = i;
            }
        }
        var rightAnswer = document.getElementById('answer-' + (rightAnswerIndex + 1)); //gets id by the index of correct answer
        rightAnswer.className = "answer correct"; //makes correct answer green

    }

    for (i=0; i < answerChosen.length; i++) { //removes click from answers after one answer is chosen
        answerChosen[i].removeEventListener('click', checkAnswer);
    }

    if (questions.length == 0) { // if there are no more questions, go to result page when click on next button
        next.addEventListener('click', resultPage);
    }

    else { //if there are more questions, show next one when click on next button
        next.addEventListener('click', nextQuestion);
    }
}