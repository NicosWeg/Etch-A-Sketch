const container = document.querySelector('.container');
const clear = document.querySelector('.button-3');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

let isTouched = false;
function createGrid(int) {
  for (let i = 0; i<int*int; i++) {
    const gridItem = document.createElement('div');
    gridItem.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    });
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
  }
};

createGrid(16);

if(isTouched) {
   gridItem.addEventListener('click', (event) => {
      event.target.removeEventListener('mouseover');
    })
    isTouched = false;
}




