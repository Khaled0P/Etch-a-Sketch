const container = document.querySelector('.container');
let gridSize;

function randomRGB (){
    let random = Math.floor(Math.random() * 255);
    return random;
};

function createGrid(x =16){
    let boxWidth = 600/x;
    let boxHeight = 400/x;
    for (i = 0; i<x;i++){
        for(j=0; j<x;j++){
            let gridBox = document.createElement('div');
            gridBox.className = 'gridBox';
            gridBox.style.width = `${boxWidth}px`;
            gridBox.style.height = `${boxHeight}px`;
            container.appendChild(gridBox);
            gridBox.addEventListener('mouseover', ()=> {
            gridBox.style.backgroundColor= `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
            })
        }
    }

}

function reset(){
    let gridBox = document.querySelectorAll('.gridBox');
    gridBox.forEach((box) => {
        box.style.backgroundColor = 'white';
    })
}

function gridSizef(){
    let gridSize = prompt('enter grid size');
    while (Number(gridSize) > 100 || isNaN(Number(gridSize))){
        gridSize = prompt("must be a number below 100, try again!");
    }
        let gridBox = document.querySelectorAll('.gridBox');
        gridBox.forEach((box) => {
        box.remove();
    })
        createGrid(gridSize);

}

createGrid(gridSize);