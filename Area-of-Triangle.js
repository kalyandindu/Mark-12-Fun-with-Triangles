var angleInput = document.querySelectorAll(".angle-input");
var buttonClick = document.querySelector("#btn-click");
var outputContainer = document.querySelector("#output-container");

buttonClick.addEventListener("click", AreaofTriangle);

function AreaofTriangle(){
    var perimeter = 0;
    
    for(let i = 0; i<angleInput.length; i++){
    perimeter += Number(angleInput[i].value);
    }
    
    var sP = perimeter/2; //sP = semiperimeter
    var area = Math.sqrt(sP*(sP-Number(angleInput[0].value))*(sP-Number(angleInput[1].value))*(sP-Number(angleInput[2].value)));
    outputContainer.innerHTML = "Area of given triangle is: " + area;
}