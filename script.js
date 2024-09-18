// My variables using queryselector
let myH1 = document.querySelector("#myH1");
let myButton = document.querySelector("#myButton");

// Add event listener click to change H1 text
myButton.addEventListener("click", function(){
        myH1.innerHTML="Goodbye World";
    });