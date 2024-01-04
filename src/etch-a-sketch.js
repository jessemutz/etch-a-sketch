const DEFAULT_GRID_SIZE = 24
const DEFAULT_COLOR = "var(--brand)"

let currentColor = DEFAULT_COLOR
let currentGridSize = DEFAULT_GRID_SIZE
let gridSquare = currentGridSize * currentGridSize

let grid = document.getElementById('grid')
let btnReset = document.getElementById('reset-button')

grid.setAttribute('style', `width: calc(${currentGridSize} * var(--size-base) )`)

// createGrid(DEFAULT_GRID_SIZE);
for(var i = 0; i < gridSquare; i += 1) {
  const gridElement = document.createElement('div')
  gridElement.addEventListener('mouseover', changeColor)
  gridElement.className = 'pixel'
  grid.appendChild(gridElement)
}

function changeColor(e) {
  e.target.style.backgroundColor = currentColor
}

function resetColor() {
  let pixels = document.querySelectorAll('.pixel')
  pixels.forEach(Object =>
    Object.removeAttribute('style')
  )
}

btnReset.addEventListener('click', resetColor)