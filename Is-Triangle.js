var angle = document.querySelectorAll(".angle-input");
var button = document.querySelector("#btn-click");
var outputContainer = document.querySelector("#output-container");

button.addEventListener("click", isTriangle);

function isTriangle(){
    var total =  calculateSumOfAngles(angle[0].value, angle[1].value, angle[2].value)
    if(total === 180){
        outputContainer.innerHTML = "Yes!, Given angles form a Triangle" ;
    }
    else{
        outputContainer.innerHTML = "No, Given angles doesn't form a Triangle" ;
    }
}

function calculateSumOfAngles(angle1, angle2, angle3){
    var sumOfAngles = Number(angle1) + Number(angle2) + Number(angle3);
    return sumOfAngles;
}