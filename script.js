const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById ('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)


function startGame(){
    // console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question){
    questionElement.innerText = question.question
}


function selectAnswer(){

}

const questions = [
    {
        question:' What is 20 + 20? ',
        answers: [
            { text: '60', correct: false },
            { text: '20', correct: true }
        ]
    }
]