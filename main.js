const grid_container = document.querySelector('.grid_container');




function createGrid(){
    for (let i = 0; i < 256; i++) {
        const grid_square = document.createElement('div');
        const hover_effect = document.createElement("div");
        hover_effect.setAttribute('class', 'hover-effect'); 
        grid_square.appendChild(hover_effect);
        grid_container.appendChild(grid_square);
    }
}

createGrid();

