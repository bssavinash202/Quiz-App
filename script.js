let questArray = [
    {question: "What is the capital of France?", opt1: "Paris", opt2: "London", opt3: "Berlin", opt4: "Rome", answer: "Paris"},
    {question: "Which planet is known as the Red Planet?", opt1: "Earth", opt2: "Venus", opt3: "Mars", opt4: "Jupiter", answer: "Mars"},
    {question: "What is the largest ocean on Earth?", opt1: "Indian Ocean", opt2: "Pacific Ocean", opt3: "Atlantic Ocean", opt4: "Arctic Ocean", answer: "Pacific Ocean"},
    {question: "Who wrote 'Hamlet'?", opt1: "Leo Tolstoy", opt2: "Mark Twain", opt3: "William Shakespeare", opt4: "Charles Dickens", answer: "William Shakespeare"},
    {question: "Which element has the chemical symbol 'O'?", opt1: "Gold", opt2: "Oxygen", opt3: "Iron", opt4: "Carbon", answer: "Oxygen"},
    {question: "Which country hosted the 2024 Summer Olympics?", opt1: "Japan", opt2: "Brazil", opt3: "France", opt4: "USA", answer:"France"},
    {question: "What is the hardest natural substance on Earth?", opt1: "Gold", opt2: "Iron", opt3: "Diamond", opt4: "Silver", answer: "Diamond"},
    {question: "What is the smallest prime number?", opt1: "0", opt2: "1", opt3: "2", opt4: "3", answer: "2"},
    {question: "Which planet is known as the Earth's twin?", opt1: "Mars", opt2: "Venus", opt3: "Jupiter", opt4: "Saturn", answer: "Venus"},
    {question: "What is the largest desert in the world?", opt1: "Sahara", opt2: "Gobi", opt3: "Arctic", opt4: "Antarctica", answer: "Antarctica"}
];
let questionInd=0;
let correct =0;
let incorrect = 0;
let isSelectedopt= false
let scoreEle = document.getElementById('score')
    scoreEle.style.display='none'

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


function display(){
    queEle.innerText=questArray[questionInd].question
    opt1Ele.innerText=questArray[questionInd].opt1
    opt2Ele.innerText=questArray[questionInd].opt2
    opt3Ele.innerText=questArray[questionInd].opt3
    opt4Ele.innerText=questArray[questionInd].opt4
    displayDetails()
}
display()
console.log(questArray.length)
function next(){
    questionInd++;
    isSelectedopt=false

    if(questionInd+1>questArray.length){
        document.getElementById('score').style.display="block"
        alert("all questions are completed")
        return;
    }
    display();
    let opts = document.getElementsByClassName('opt')
console.log(opts)
for(let i=0;i<opts.length;i++){
    opts[i].style.backgroundColor=""
    opts[i].style.color=""
}
}
function displayDetails(){
    document.getElementById('total').innerText=`${questionInd+1}/${questArray.length}`
}



function checkAns(event,opt){
    
    if(isSelectedopt==false){
        let ele=event.currentTarget
        let option = `opt${opt}`
        let select = questArray[questionInd][option]
        let answer = questArray[questionInd].answer
        console.log(select,answer)
        if(select==answer){
            ele.style.backgroundColor="#33CA7F"
            ele.style.color="white"
            correct++;
            document.getElementById('correctId').innerText=correct;
            document.getElementById('percent').innerText=`${(correct/questArray.length)*100} %`
        }
        else{
            ele.style.backgroundColor="#D64045"
            ele.style.color="white"
            incorrect++;
            document.getElementById('incorrectId').innerText=incorrect;
    
        }
        isSelectedopt=true
    }
    
}