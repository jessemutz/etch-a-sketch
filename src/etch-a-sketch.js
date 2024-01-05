// Set Defaults
const DEFAULT_GRID_SIZE = 20
const DEFAULT_COLOR = "var(--brand)"

let chosenGridSize = DEFAULT_GRID_SIZE
let chosenColor = DEFAULT_COLOR

// DOM Elements
let grid = document.getElementById('grid')
let btnReset = document.getElementById('reset-button')
let huePicker = document.getElementById('hue-picker')

// Event Listeners
huePicker.addEventListener('input', setThemeColor)
btnReset.addEventListener('click', resetColor)

function setThemeColor() {
  let themeHueColor = document.querySelector(':where(html)')
  let hueText = document.getElementById('hue-value')
  let hueValue = huePicker.value

  themeHueColor.style.setProperty('--brand-hue', hueValue)
  hueText.textContent = hueValue
}

// Set grid size using CSS Grid rules.
function setGridSize(size) {
  grid.style.cssText = `
  grid-template-rows: repeat(${size}, 1fr);
  grid-template-columns: repeat(${size}, 1fr);
  width: calc(var(--size-base) * ${size})
  `;
}

function createGrid() {
  const gridSquare = chosenGridSize * chosenGridSize
  for (var i = 0; i < gridSquare; i += 1) {
    const gridElement = document.createElement('div')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.className = 'pixel'
    grid.appendChild(gridElement)
  }
}

// Callback to change color on mouseover
function changeColor(e) {
  e.target.style.backgroundColor = chosenColor
}

function resetColor() {
  let pixels = document.querySelectorAll('.pixel')
  pixels.forEach(pixel => pixel.removeAttribute('style'))
}

function initializeGrid() {
  setGridSize(chosenGridSize)
  createGrid()
}

// Initialize grid on page load
initializeGrid();