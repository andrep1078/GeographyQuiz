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
        question: "What pergentage of the population lives in the Northern Hemisphere?",
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
var randomNumber;
var answerChosen;
var counterCorrectAnswers = 0;
var currentQuestion;

function init() {
    nextQuestion();

    var next = document.getElementById('next');
    next.addEventListener('click', nextQuestion);
    
    answerChosen = document.getElementsByClassName('answer');
    
    for (i=0; i < answerChosen.length; i++) {
        answerChosen[i].addEventListener('click', checkAnswer);
    }     
}

function nextQuestion () {
    randomNumber = Math.floor(Math.random() * questions.length);

    currentQuestion = questions[randomNumber];

    var question = document.getElementById('question');
    question.innerHTML = currentQuestion.question;

    for (i=0; i < 4; i++) {
        var answer = document.getElementById('answer-' + (i+1));
        answer.innerHTML = currentQuestion.answers[i];

        answer.className = "answer";

        answer.addEventListener('click', checkAnswer);
    }

    questions.splice(randomNumber, 1);
}

function checkAnswer(e) {
    var clickedButton = e.currentTarget;
    var answerText = clickedButton.textContent;

    if (answerText === currentQuestion.correctAnswer) {
        
        clickedButton.className = "answer correct";

        counterCorrectAnswers ++;

        for (i=0; i < answerChosen.length; i++) {
            answerChosen[i].removeEventListener('click', checkAnswer);
        }
    }

    else {

    }
}