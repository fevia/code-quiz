const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById ('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

var timer = 100;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++ 
    setNextQuestion()
})

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    // timer = 100;
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question:' What is 20 + 20? ',
        answers: [
            { text: '60', correct: false },
            { text: '20', correct: false },
            { text: '40', correct: true },
            { text: '200', correct: false}
        ]
    },
    {
        question:' Which is the only food that melts at body temperature? ',
        answers: [
            { text: 'butter', correct: false },
            { text: 'chocolate', correct: true },
            { text: 'cream cheese', correct: false },
            { text: 'lard', correct: false}
        ]
    },
    {
        question:' Traditional Italian pesto is made from basil, olive oil, and which nut? ',
        answers: [
            { text: 'walnut', correct: false },
            { text: 'pine nut', correct: true },
            { text: 'almond', correct: false },
            { text: 'cashew', correct: false}
        ]
    },
    {
        question:' 7 + 7 ÷ 7 + 7 x 7 - 7 ',
        answers: [
            { text: '00', correct: false },
            { text: '08', correct: false },
            { text: '56', correct: true },
            { text: '50', correct: false}
        ]
    },
    {
        question:' I am an odd number. Take away one letter and I become even. What number am I? ',
        answers: [
            { text: 'Eleven', correct: false },
            { text: 'Three', correct: false },
            { text: 'Seven', correct: true },
            { text: 'Five', correct: false}
        ]
    },
    {
        question:' What is the resulting flavor when chocolate is added to coffee?',
        answers: [
            { text: 'cappuccino', correct: false },
            { text: 'cocoa', correct: false },
            { text: 'latte', correct: false },
            { text: 'mocha', correct: true}
        ]
    }
]

function timer001(){
    timer = timer - 1;
    if (timer < 100){
        time001.innerHTML = timer;
    }

    if (c < 1) {
        window.clearInterval(update);
    }
}

update = setInterval("timer001()", 1000);
