let button = document.querySelector("button");
let result = document.querySelector(".weatherneeds")
button.addEventListener("click", function() {
    let weather = document.querySelector(".weather").value;
    
    // 1. Write a conditional statement:
    //  - If the input is "rainy", change the text in the paragraph tag to "Bring an umbrella!"
    //  - Else, change the text in the paragraph tag to "Enjoy the sun!"
    if (weather == "rainy"){
        result.innerHTML = "Bring an umbrella";
    }
    else {
        result.innerHTML = "Enjoy the sun!"
    }

});