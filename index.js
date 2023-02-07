const quizData = [
    {
        question: 'How old are you?',
        a: '24',
        b: '22',
        c: '21',
        d: '23',
        correct: 'b'
    },
    {
        question: 'What is your name?',
        a: 'Aamir',
        b: 'Mansoor',
        c: 'Zohaib',
        d: 'Nawar',
        correct: 'a'
    },
    {
        question: 'WHere do you live?',
        a: 'Mardan',
        b: 'Peshawar',
        c: 'Bakhshali',
        d: 'Gujrat',
        correct: 'c'
    },
    {
        question: 'Pakistan is What?',
        a: 'Country',
        b: 'State',
        c: 'Province',
        d: 'None',
        correct: 'a'
    },
]

const qEl = document.getElementById('question')
const finish = document.getElementById('quiz')
const answerEls = document.querySelectorAll(".answer")
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQ = 0
let score = 0
// let answerEl = undefined
// let answerEls = 0

loadQuiz()

function getSelected() {

    let answer = undefined

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected()
    if (answer) {
        console.log("run1")
        console.log(answer + " selected Answer")
        console.log(quizData[currentQ].correct + " correct Answer")
        if (answer === quizData[currentQ].correct) {
            console.log("run2 check correct")
            score++
        }
        currentQ++
        if (currentQ < quizData.length) {

            loadQuiz()
            console.log("run Load Quiz function")
        }
        else {
            // alert("Wow... You Finished the Quiz")
            finish.innerHTML = `
            <h2>You Have Scored '${score}' out of '${quizData.length}'</h2>
            <button style="background-color: red; color: white;" onclick="location.reload()">Reload</button>
            `

        }
    }
})

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

function loadQuiz() {

    deselectAnswer()
    console.log("current quiz " + currentQ)
    const currentQuizData = quizData[currentQ]
    qEl.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d


}
