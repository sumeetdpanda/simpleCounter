function increaseFunction() {
    var number = document.querySelector(".counter").innerText;
    number ++;
    document.querySelector(".counter").innerText = number;
} 

function resetFunction() {
    document.querySelector(".counter").innerText = 0;
} 

function decreaseFunction() {
    var number = document.querySelector(".counter").innerText;
    number --;
    document.querySelector(".counter").innerText = number;
} 