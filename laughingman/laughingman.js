const SQUARE_COUNT=3;
const TIMER_SPEED=500
const SPEED = 5;
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#square").addEventListener("click" , () => {
        alert("You clicked!");
    });

    let box = document.querySelector("#box");

    for(let i=0; i<SQUARE_COUNT; i++){

        let square = document.createElement('img');
         square.src = "laughin_man.jpg";
         square.alt = "Laughing Man";
         square.className = "square";
         box.appendChild(square);
    }

    Array.from(box.children).forEach(()=> {
        const parent = element.parentElement;
        const maxX = parent.clientWidth - element.clientWidth;
        const maxY = parent.clientHeight - element.clientHeight;
    
        let dx = SPEED * (Math.random()*2-1);
        let dy = SPEED * (Math.random()*2-1);

        let x = parseInt(element.style.left) || 225;
        let y = parseInt(element.style.top) || 175;
        setInterval(() => { 

            if(x <= 0 || x >= maxX){
                dx *= -1;
            }
            if(y <= 0 || y >= maxY){
                dy *= -1;
            }

            x += dx;
            y += dy;

            element.style.left = x + "px";
            element.style.top = y + "px";
        }, TIMER_SPEED) 
    });

});