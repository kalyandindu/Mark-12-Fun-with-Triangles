var quizForm = document.querySelector(".quiz-form");
var btnClick = document.querySelector("#btn-click");
var outputContainer = document.querySelector("#output-container");

var answers = ["120", "right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for(let values of formResult.values()){
        console.log(values);
        if(values === answers[index]){
            ++score
        }
        ++index;
        
    }
    outputContainer.innerHTML = "Your score is: " + score;
    
}

btnClick.addEventListener("click", calculateScore);