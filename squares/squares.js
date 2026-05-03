let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random()*21)+30;
//attach the addSquare function to the button
document.querySelector("#add").onclick=addSquare;
for (let i = 0; i < squareCount; i++) {
    addSquare();
    
    //use the addSquare function instead of the code here to add squares
}
function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addSquare(){
    //Make this add a single square
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random()*650) + "px";
    square.style.top = parseInt(Math.random()*300) + "px";
    square.style.backgroundColor = getRandomColor();
    //add a click function to each square
    square.onclick=function(){
        this.style.backgroundColor = getRandomColor();
    };
    squareArea.append(square);
}
//write the function to change all colors
//get all the squares as an array 
//call the getRandomColor on them to change their colors
document.querySelector("#change").onclick=function(){
    let squares = document.querySelectorAll(".square");
    squares.forEach(function(square){
        square.style.backgroundColor = getRandomColor();
    });
};