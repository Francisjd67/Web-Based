let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math. random()*21)+30;

for (let i = 0; i < squareCount; i++) {

    let square = document.createElement("div");
    square. className = "square";
    square. style. left = parseInt(Math.random()*650) + "px";
    square. style. top = parseInt (Math. random()*300) + "px";

    squareArea.append (square) ;
}