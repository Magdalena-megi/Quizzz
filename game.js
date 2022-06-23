const question = document.querySelector('#question');
const choises = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const quesscoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


let questions = [
    {

        question: 'What is 2 + 2',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice3: '17',
        answer: 2,

    },
    {
        question: 'What is 2 + 2',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice3: '17',
        answer: 2,
    }, {
        question: 'What is 2 + 2',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice3: '17',
        answer: 2,
    }, {
        question: 'What is 2 + 2',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice3: '17',
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_Question = 4

startGame = () => {

    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

}

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionsCounter > MAX_Question) {
        localStorage.getItem('mostRecetStore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_Question}`
    progressBarFull.style.width = `${(questionCounter / MAX_Question) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choises.forEach(choises => {

        const number = choises.dataset['number']
        choises.innerText = currentQuestion['choice' + number]
    }
    )

    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true

}
choises.forEach(choice => {
     
    choice.addEventListener('click', e => {

        if(!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ?'correct' :
        'inncorect'

        if(classToApply === 'correct'){

            incrementScore (SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
        
            selectedChoice.parentElement.classList.remove(classToApply)

            getNewQuestion()


        }, 1000)

    } )
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
