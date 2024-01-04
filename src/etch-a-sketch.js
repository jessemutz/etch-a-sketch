const DEFAULT_GRID_SIZE = 16;

let currentGridSize = DEFAULT_GRID_SIZE;
let gridSquare = currentGridSize * currentGridSize;
let grid = document.getElementById('grid');
grid.setAttribute('style', `width: calc(var(--size-base) * ${currentGridSize})`);

// createGrid(DEFAULT_GRID_SIZE);
for(var i = 0; i < gridSquare; i += 1) {
  const gridElement = document.createElement('div')
  gridElement.addEventListener('mouseover', changeColor)
  gridElement.className = 'pixel'
  grid.appendChild(gridElement)
}

function changeColor(e) {
  e.target.style.backgroundColor = "#bada55";
}