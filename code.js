const container = document.querySelector('.container');
let gridSize;


function createGrid(x =16){
    for (i = 0; i<x;i++){
        for(j=0; j<x;j++){
            let gridBox = document.createElement('div');
            gridBox.className = 'gridBox';
            container.appendChild(gridBox);
            gridBox.addEventListener('mouseover', ()=> {
                gridBox.style.backgroundColor= 'black';
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

createGrid(gridSize);