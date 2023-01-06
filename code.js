const container = document.querySelector('.container');



function createGrid(){
    for (i = 0; i<16;i++){
        for(j=0; j<16;j++){
            let gridBox = document.createElement('div');
            gridBox.className = 'gridBox';
            container.appendChild(gridBox);
        }
    }

}

createGrid();