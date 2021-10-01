const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quizContent = document.getElementById('quiz');
const question = document.getElementById('question');
const a = document.getElementById('a');
const aText = document.getElementById('a_text');
const b = document.getElementById('b');
const bText = document.getElementById('b_text');
const c = document.getElementById('c');
const cText = document.getElementById('c_text');
const d = document.getElementById('d');
const dText = document.getElementById('d_text');
const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const repeat = document.getElementById('repeat');

let questionCounter = 0;
let correctQuestions = 0;

changeQuestion(questionCounter);

function changeQuestion(num) {
  a.checked = true;
  question.innerHTML = quizData[num].question;
  aText.innerHTML = quizData[num].a;
  bText.innerHTML = quizData[num].b;
  cText.innerHTML = quizData[num].c;
  dText.innerHTML = quizData[num].d;
}

function checkAnswer() {
  let selectedAnswer = a;
  answers.forEach(answerEl => (answerEl.checked ? (selectedAnswer = answerEl.id) : 0));
  return selectedAnswer;
}

submit.addEventListener('click', () => {
  checkAnswer() === quizData[questionCounter].correct ? ++correctQuestions : '';
  if (questionCounter < quizData.length - 1) {
    questionCounter++;
    changeQuestion(questionCounter);
  } else {
    quiz.innerHTML = `
    <h2 style="font-size: 4rem; text-align: center; color: purple">Congratulations You have
     ${correctQuestions} correct answers</h2>
    <button id="repeat">Repeat</button>
    `;
  }
});

quiz.addEventListener('click', e => {
  if (e.target.id === 'repeat') {
    location.reload();
  }
});
