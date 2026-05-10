var SQUARE_COUNT=3;

const TIMER_SPEED=100
const SPEED = 10;
document.addEventListener('DOMContentLoaded', () => {
    const specialSquare = document.querySelector("#square");
    specialSquare.addEventListener("mouseover", (event)=>{
        event.target.style.backgroundColor = newColor();
    });
    specialSquare.addEventListener("click" , () => {
        SQUARE_COUNT++;
        createSquare();
        
    });

    let box = document.querySelector("#box");

    for(let i=0; i<SQUARE_COUNT; i++){
        createSquare();
        
    }

});

function createSquare(){
    let square = document.createElement('img');
    square.src = "laughing_man.jpg";
    square.alt = "Laughing Man";
    square.className = "square";
    box.appendChild(square);
    square.addEventListener("mouseover", (event)=>{
        event.target.src = "Orochimaru.jpg";
    });
    square.addEventListener("mouseout", (event)=>{  
        event.target.src = "laughing_man.jpg";
    });
   
    const parent = square.parentElement;
    const maxX = parent.clientWidth - square.clientWidth;
    const maxY = parent.clientHeight - square.clientHeight;

    let dx = SPEED * (Math.random()*2-1);
    let dy = SPEED * (Math.random()*2-1);

    let x = parseInt(square.style.left) || 225;
    let y = parseInt(square.style.top) || 175;

    setInterval(() => { 

        if(x <= 0 || x >= maxX){
            dx *= -1;
            square.style.borderColor = newColor();
        }
        if(y <= 0 || y >= maxY){
            dy *= -1;
            square.style.borderColor = newColor();
        }

        x += dx;
        y += dy;

        square.style.left = x + "px";
        square.style.top = y + "px";
    }, TIMER_SPEED)
}

function newColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);    
    return `rgb(${r}, ${g}, ${b})`;
}