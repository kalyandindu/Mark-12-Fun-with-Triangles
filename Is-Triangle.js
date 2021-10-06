var angleOne = document.querySelector("#angle-one");
var angleTwo = document.querySelector("#angle-two");
var angleThree = document.querySelector("#angle-three");
var button = document.querySelector("#btn-click");
var outputContainer = document.querySelector("#output-container");

button.addEventListener("click", isTriangle);

function isTriangle(){
    var total =  calculateSumOfAngles(angleOne.value, angleTwo.value, angleThree.value)
    console.log(typeof(total));
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