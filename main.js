const container = document.querySelector('.container');
const input = document.getElementById('size-grid');
const set = document.getElementById('set-grid-size')
const hexelop = document.querySelector('.button-3');
const slider = document.getElementById('clear-range');
const color = document.getElementById('color');
const cursor = document.querySelector('.cursor');
const heart = document.querySelector('.button-2');
const ball = document.querySelector('.ball');
const ballButton = document.querySelector('.button-4');
const secretMes = document.querySelector('.secret-message');



let isTouched = false;
color.value = '#000000';
let currentValue;
let isColoured = false;
let isClicked = false;
let gridSize = 16;



color.addEventListener('change', (event) => {
  currentValue = event.target.value;
  isColoured = true;
});


set.addEventListener('click', () => {
  if(input.value > 4 && input.value <= 100) {
     gridSize = parseInt(input.value);
      input.value = '';
      clearGrid();
  }else {
    alert('Enter a number between 4-100');
  }
 
});

hexelop.addEventListener('click', () => {
 currentValue = 'white';
 isColoured = true;
 color.value = '#ffffff';
});

heart.addEventListener('click', () => {
  currentValue = `rgb(${Math.floor(Math.random() *250)}, ${Math.floor(Math.random() *250)}, ${Math.floor(Math.random() *250)})`;
  isColoured = true;
  color.value = '#ffffff';
})


function createGrid(int) {
  container.style.gridTemplateColumns = `repeat(${int}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${int}, 1fr)`;

  for (let i = 0; i<int*int; i++) {
    const gridItem = document.createElement('div');
    gridItem.addEventListener('mousedown', () => {
      isTouched = true;
    });
    gridItem.addEventListener('mouseup', () => {
      isTouched = false;
    });
    gridItem.addEventListener('mouseover', setColor);
    slider.addEventListener('change', clearGrid);
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
  }
};

function setColor() {
  if(isTouched) {
    if(isColoured) {
      this.style.backgroundColor = currentValue;
    }
    else {
      this.style.backgroundColor = 'black';
    }
  }
}

createGrid(gridSize);

function clearGrid() {
  container.innerHTML = '';
  createGrid(gridSize);
}
ballButton.addEventListener('click', () => {
  if (!isClicked) {
    moveCursor();
    alert('TO STOP RELOAD THE PAGE (づ ◕‿◕ )づ');
  }
})


/* <----------Move the ball to where pointer clicked ------------> */

const moveCursor = () => {
  window.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
})
}


window.addEventListener('click', (e) => {

  ball.style.transform = `translateY(${e.clientY - 15}px)`;
  ball.style.transform += `translateX(${e.clientX - 15}px)`;
}, false); 



