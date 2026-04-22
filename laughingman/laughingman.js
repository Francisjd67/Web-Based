const SQUARE_COUNT=3;


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#square").addEventListener("click" , () => {
        alert("You clicked!");
    });

    let box = document.querySelector("#box");

    for(let i=0; i<SQUARE_COUNT; i++){

        let square = document.createElement('img');
         square.src = "laughin_man.jpg";
         square.alt = "Laughing Man";
         square.class = "square";
         box.appendChild(square);
    }
});