var input = document.querySelectorAll(".angle-input");
var buttonClick = document.querySelector("#btn-click");
var outputContainer = document.querySelector("#output-container");

buttonClick.addEventListener("click", CalculateHypotenuse);

function CalculateHypotenuse(){
    
    var hypotenuse = Math.sqrt((input[0].value)*(input[0].value) + (input[1].value)*(input[1].value));
    console.log(hypotenuse);
    outputContainer.innerHTML = "Length of Hypotenuse is: " + hypotenuse;
}