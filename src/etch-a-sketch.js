const DEFAULT_GRID_SIZE = 20
const DEFAULT_COLOR = "var(--brand)"

let currentColor = DEFAULT_COLOR
let currentGridSize = DEFAULT_GRID_SIZE
let grid = document.getElementById('grid')
let btnReset = document.getElementById('reset-button')
let huePicker = document.getElementById('hue-picker')

function setThemeColor() {
  let hueValue = huePicker.value
  let themeHueColor = document.querySelector(':where(html)')
  let hueText = document.getElementById('hue-value')
  themeHueColor.style.setProperty('--brand-hue', hueValue)
  hueText.textContent = hueValue
}


function initializeGrid() {
  setGridSize(currentGridSize)
  createGrid()
}

function setGridSize(size) {
  // grid.setAttribute('style', `width: calc(${size} * var(--size-base) )`)
  grid.style.cssText = `
  grid-template-rows: repeat(${size}, 1fr);
  grid-template-columns: repeat(${size}, 1fr);
  width: calc(var(--size-base) * ${size})
  `;
}

// createGrid(DEFAULT_GRID_SIZE);
function createGrid() {
  const gridSquare = currentGridSize * currentGridSize
  for (var i = 0; i < gridSquare; i += 1) {
    const gridElement = document.createElement('div')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.className = 'pixel'
    grid.appendChild(gridElement)
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = currentColor
}

function resetColor() {
  let pixels = document.querySelectorAll('.pixel')
  pixels.forEach(pixel => pixel.removeAttribute('style'))
}

huePicker.addEventListener('input', setThemeColor)
btnReset.addEventListener('click', resetColor)

// Initialize grid on page load
initializeGrid();