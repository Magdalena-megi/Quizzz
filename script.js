const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  console.log(currentQuestionIndex)
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

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
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
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'How many stripes are on the US flag?',
    answers: [
      { text: '13', correct: true },
      { text: '14', correct: false }
    ]
  },
  {
    question: 'How many time zones are there in Russia?',
    answers: [
      { text: '0', correct: false },
      { text: '8', correct: false },
      { text: '11', correct: true },
      { text: '9', correct: false }
    ]
  },
  {
    question: 'How long does it take to get to the Mariana Trench?',
    answers: [
      { text: '4h', correct: true },
      { text: '1 Month', correct: false },
      { text: '6Month', correct: false },
      { text: 'IDK', correct: false }
    ]
  },

  {

    question: 'How many letters does the Hawaiian alphabet have?',
    answers: [
      { text: '24', correct: false },
      { text: '19', correct: false },
      { text: '54', correct: false },
      { text: '12', correct: true }
    ]
  },
  {
    question: 'Which country is the second largest in the world by area?',
    answers: [
      { text: 'Russia', correct: false },
      { text: 'Canada', correct: true },
      { text: 'Srbjaaaa', correct: false },
      { text: 'Africa', correct: false }
    ]
  },
  {
    question: 'since when does the bbw exist?',
    answers: [
      { text: '1836', correct: true },
      { text: '1854', correct: false },
      { text: '1976', correct: false },
      { text: '1983', correct: false }
    ]
  },
  {
    question: 'When did Christopher Columbus discover America?',
    answers: [
      { text: '1476', correct: false },
      { text: '2022', correct: false },
      { text: '1598', correct: false },
      { text: '1492 ', correct: true }
    ]
  }, {
    question: 'which is the best selling book in the world?',
    answers: [
      { text: 'Harry Potter', correct: false },
      { text: 'Bible', correct: true },
      { text: 'Koran', correct: false },
      { text: 'Don Quijote ', correct: false }
    ]
  },
  {
    question: 'which is the best selling book in the world?',
    answers: [
      { text: 'Harry Potter', correct: false },
      { text: 'Bible', correct: true },
      { text: 'Koran', correct: false },
      { text: 'Don Quijote ', correct: false }
    ]
  },
  {
    question: 'How fast is the fastest animal?',
    answers: [
      { text: '157,03', correct: false },
      { text: '103', correct: true }
    ]
  }
]