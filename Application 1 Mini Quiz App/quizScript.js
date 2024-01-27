// ========================= QUESTION LIST: ================================== //

const questions = [
//EASY ROUND QUESTIONS 

// --- QUESTION ONE ---
    {
        question: "How many years does it take to finish a typical college degree?",
        answers: [
            {text: "3", correct: "false"},
            {text: "1", correct: "false"},
            {text: "2", correct: "false"},
            {text: "4", correct: "true"},
        ]
    },
// --- QUESTION TWO ---
    {
        question: "What does this code result to?: int x = 4, y = 2; sum = (x*x)+y; printf('%d', sum);",
        answers: [
            {text: "10", correct: "false"},
            {text: "18", correct: "true"},
            {text: "NULL", correct: "false"},
            {text: "2", correct: "false"},
        ]
    },
// --- QUESTION THREE ----
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            {text: "Golgi Apparatus", correct: "false"},
          {text: "Ribosomes", correct: "false"},
           {text: "Endoplasmic Reticulum", correct: "false"},
          {text: "Mitochondria", correct: "true"},
        ]
    },

// --- QUESTION FOUR ----
{
    question: "Which country is considered a Third World country?",
    answers: [
        {text: "Afghanistan", correct: "true"},
      {text: "France", correct: "false"},
       {text: "Argentina", correct: "false"},
      {text: "South Korea", correct: "false"},
    ]
},

// --- QUESTION FIVE ----
{
    question: "What is the maximum runtime for a president within the Philippines?",
    answers: [
        {text: "5", correct: "false"},
      {text: "6", correct: "true"},
       {text: "10", correct: "false"},
      {text: "3", correct: "false"},
    ]
},

//MEDIUM ROUND QUESTIONS 

// --- QUESTION ONE ---
{
    question: "What is the derivative of 6x^4 - 8x^3 + 12x^2 + 24x + 42?",
    answers: [
        {text: "10x^3 - 11x^2 + 14x + 24", correct: "false"},
        {text: "24x^4 - 24x^3 + 24x^2 + 24x + 42", correct: "false"},
        {text: "24(x^3 + x^2 + x + 1)", correct: "true"},
        {text: "6/5 x^5 - 2x^4 + 4x^3 + 12x^2 + 42x + C", correct: "false"},
    ]
},
// --- QUESTION TWO ---
{
    question: "What is the literal meaning of the dinosaur: 'Baryonyx'?",
    answers: [
        {text: "Snouted Lizard", correct: "false"},
        {text: "Barrier Onyx", correct: "false"},
        {text: "Heavy Claw", correct: "true"},
        {text: "Jagged Jaw", correct: "false"},
    ]
},
// --- QUESTION THREE ----
{
    question: "How many teeth does the average adult have?",
    answers: [
        {text: "32", correct: "true"},
      {text: "34", correct: "false"},
       {text: "30", correct: "false"},
      {text: "33", correct: "false"},
    ]
},

// --- QUESTION FOUR ----
{
question: "What is the optimal pH level for drinkable water?",
answers: [
    {text: "5 pH", correct: "false"},
  {text: "9 pH", correct: "false"},
   {text: "7 pH", correct: "true"},
  {text: "4 pH", correct: "false"},
]
},

// --- QUESTION FIVE ----
{
question: "Who painted the classic painting in 1893 called: 'The Scream'?",
answers: [
    {text: "Leonardo Da Vinci", correct: "false"},
  {text: "Vincent Van Gogh", correct: "false"},
   {text: "Johannes Vermeer", correct: "false"},
  {text: "Edvard Munch", correct: "true"},
]
},

//HARD ROUND QUESTIONS 

// --- QUESTION ONE ---
{
    question: "A chandelier, weighing 159.31kg, is hanging onto the ceiling 2.74m from the ground. Calculate for its Potential Energy",
    answers: [
        {text: "4222.145 J", correct: "false"},
        {text: "4828.175 J", correct: "false"},
        {text: "4282.157 J", correct: "true"},
        {text: "4254.177 J", correct: "false"},
    ]
},
// --- QUESTION TWO ---
{
    question: "What is the oldest shrine in Japan?",
    answers: [
        {text: "Senso-ji Temple", correct: "false"},
        {text: "Izumo-taisha", correct: "true"},
        {text: "Zojo-ji Shrine", correct: "false"},
        {text: "Meiji Shrine", correct: "false"},
    ]
},
// --- QUESTION THREE ----
{
    question: "What refers to 'having a non-fixed gender identity that constantly shifts overtime'?",
    answers: [
        {text: "Non-Binary", correct: "false"},
      {text: "Genderfluid", correct: "true"},
       {text: "Asexual", correct: "false"},
      {text: "Demisexual", correct: "false"},
    ]
},

// --- QUESTION FOUR ----
{
question: "What is the name of Mozart's unfinished symphony?",
answers: [
    {text: "Eine Kleine Nachtmusik", correct: "false"},
  {text: "Lacrimosa", correct: "false"},
   {text: "Requiem Mass in D Minor", correct: "true"},
  {text: "The Marriage of Figaro", correct: "false"},
]
},

// --- QUESTION FIVE ----
{
question: "A radioactive substance has an initial mass of 45g, and has a half life of 3.12 days. How much will remain after 17 days?",
answers: [
    {text: "1.03g", correct: "true"},
  {text: "0.77g", correct: "false"},
   {text: "0.999g", correct: "false"},
  {text: "1.23 g", correct: "false"},
]
},
];

// ======================== ACTUAL FUNCTION WORK AREA =========================== //

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next");

let questionIndex = 0;
let points = 0;

const difficultyIndicator = document.getElementById("difficulty");

function indicateDifficulty(){
    if (questionIndex >= 0 && questionIndex <= 4){
        difficultyIndicator.innerHTML = "Easy Difficulty";
        difficultyIndicator.style.color = "#0C9E09";
    }
    else if (questionIndex >= 5 && questionIndex <= 9){
        difficultyIndicator.innerHTML = "Medium Difficulty";
        difficultyIndicator.style.color = "#E1A700";
    }
    else {
        difficultyIndicator.innerHTML = "Hard Difficulty";
        difficultyIndicator.style.color = "#B8130C";
    }
}


function startTheQuiz(){
    questionIndex = 0;
    points = 0;
    nextButton.innerHTML = "Next";
    indicateDifficulty();
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("buttonAnswer");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedAnswer = e.target;
    const isCorrect = selectedAnswer.dataset.correct === "true";
    if (isCorrect){
        selectedAnswer.classList.add("correct");
        points++;
    }
    else {
        selectedAnswer.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showPoints(){
    resetState();
    difficultyIndicator.innerHTML = "You got " + points + " out of " + questions.length + "!";
    if (points >= 0 && points <=5){
        questionElement.innerHTML = "Better Luck Next Time!";
    }
    else if (points >= 6 && points <= 10){
        questionElement.innerHTML = "Pretty Good Job!";
    }
    else{
        questionElement.innerHTML = "Amazing Work There, Genius!";
    }
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    questionIndex++;
    if (questionIndex < questions.length){
       indicateDifficulty();
       showQuestion();
    }
    else{
       difficultyIndicator.style.color = "#fff";
       showPoints();
    }
}

nextButton.addEventListener("click", ()=>{
    if (questionIndex < questions.length){
        handleNextButton();
    }
    else{
        startTheQuiz();
    }
})

indicateDifficulty();
startTheQuiz();