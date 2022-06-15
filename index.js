

var audio = new Audio('tom-1.mp3')
for ( i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // var audio = new Audio("./sounds/tom-1.mp3")
        // audio.play();
        this.style.color = "white"
    })
}

 //// calculator in console
// function add( num1, num2) {
//     return num1 + num2; }
// function subtrackt(num1, num2) {
//     return num2 - num1;}
// function multyplay(num1, num2) {
//     return num1 * num2}
// function divide(num1, num2) {
//     return num2 / num1}
// function calculator( num1, num2, operator) { return operator(num1, num2)};
