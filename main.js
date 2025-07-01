const container = document.querySelector('.container');
const clear = document.querySelector('.button-3');
const slider = document.getElementById('clear-range');
const color = document.getElementById('color');
const cursor = document.querySelector('.cursor');
const heart = document.querySelector('.button-2');
const ball = document.querySelector('.ball');
const ballButton = document.querySelector('.button-4');

container.style.display = 'flex';
container.style.flexWrap = 'wrap';

let isTouched = false;
color.value = '#000000';
let currentValue;
let isColoured = false;
let isClicked = false;

color.addEventListener('change', (event) => {
  currentValue = event.target.value;
  isColoured = true;
});


function createGrid(int) {
  for (let i = 0; i<int*int; i++) {
    const gridItem = document.createElement('div');
    gridItem.addEventListener('mousedown', () => {
      isTouched = true;
    });
    gridItem.addEventListener('mouseup', () => {
      isTouched = false;
    });
    gridItem.addEventListener('mouseover', (event) => {
      if(isTouched) {
        if(isColoured) {
             event.target.style.backgroundColor = currentValue;
        }
        else {
          event.target.style.backgroundColor = 'black';
        }
        
      }
    });
    slider.addEventListener('change', () => {
      gridItem.style.backgroundColor = 'white';
    })
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
  }
};

createGrid(16);


/* <----------Move the ball to where pointer clicked ------------> */
/*
const moveCursor = () => {
  window.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
})
}

window.addEventListener('load', moveCursor);

window.addEventListener('click', (e) => {

  ball.style.transform = `translateY(${e.clientY - 15}px)`;
  ball.style.transform += `translateX(${e.clientX - 15}px)`;
}, false);*/





