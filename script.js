let questArray = [
    {question: "What is the capital of France?", opt1: "Paris", opt2: "London", opt3: "Berlin", opt4: "Rome", answer: 1},
    {question: "Which planet is known as the Red Planet?", opt1: "Earth", opt2: "Venus", opt3: "Mars", opt4: "Jupiter", answer: 3},
    {question: "What is the largest ocean on Earth?", opt1: "Indian Ocean", opt2: "Pacific Ocean", opt3: "Atlantic Ocean", opt4: "Arctic Ocean", answer: 2},
    {question: "Who wrote 'Hamlet'?", opt1: "Leo Tolstoy", opt2: "Mark Twain", opt3: "William Shakespeare", opt4: "Charles Dickens", answer: 3},
    {question: "Which element has the chemical symbol 'O'?", opt1: "Gold", opt2: "Oxygen", opt3: "Iron", opt4: "Carbon", answer: 2},
    {question: "Which country hosted the 2024 Summer Olympics?", opt1: "Japan", opt2: "Brazil", opt3: "France", opt4: "USA", answer: 3},
    {question: "What is the hardest natural substance on Earth?", opt1: "Gold", opt2: "Iron", opt3: "Diamond", opt4: "Silver", answer: 3},
    {question: "What is the smallest prime number?", opt1: "0", opt2: "1", opt3: "2", opt4: "3", answer: 3},
    {question: "Which planet is known as the Earth's twin?", opt1: "Mars", opt2: "Venus", opt3: "Jupiter", opt4: "Saturn", answer: 2},
    {question: "What is the largest desert in the world?", opt1: "Sahara", opt2: "Gobi", opt3: "Arctic", opt4: "Antarctica", answer: 4}
];
let questionInd=0;
function start(event) {
    event.preventDefault();
    event.target.style.display="none"
    document.getElementById('display').style.display="block"
}
let queEle=document.getElementById('qtnId')
let opt1Ele=document.getElementById("opt1")
let opt2Ele=document.getElementById("opt2")
let opt3Ele=document.getElementById("opt3")
let opt4Ele=document.getElementById("opt4")
let totalEle=document.getElementById('total')


function display(){
    queEle.innerText=questArray[questionInd].question
    opt1Ele.innerText=questArray[questionInd].opt1
    opt2Ele.innerText=questArray[questionInd].opt2
    opt3Ele.innerText=questArray[questionInd].opt3
    opt4Ele.innerText=questArray[questionInd].opt4
}
display()
console.log(questArray.length)
function next(){
    questionInd++;
    if(questionInd+1>questArray.length){
        alert("all questions are completed")
    }
    else{
        totalEle.innerText=`${questionInd+1}/${questArray.length}`
        display();
    }
    
}