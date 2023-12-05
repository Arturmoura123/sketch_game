const grid_container = document.querySelector('.grid_container');
const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    
    let userInput = prompt("Please enter the number of squares you want");
    const parsedInput = parseInt(userInput);
 
    if (!isNaN(parsedInput) && parsedInput > 0 && parsedInput <100) {
        while (grid_container.firstChild) {
            grid_container.removeChild(grid_container.firstChild);
        }
        
        createGrid(parsedInput);
            } else {
        alert("Invalid input. Please enter a valid number greater than 0.");
    }
    }
)


function createGrid(number){
    for (let i = 0; i < number; i++) {
        const grid_square = document.createElement('div');
        const hover_effect = document.createElement("div");
        hover_effect.setAttribute('class', 'hover-effect'); 
        grid_square.appendChild(hover_effect);
        grid_container.appendChild(grid_square);
        }
}
