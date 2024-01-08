//= Variables & UI Setup
// DOM Finders to make code more readable
const getById = (id) => document.getElementById(id);

// Default Variables
const DEFAULT_GRID_SIZE = 20
const DEFAULT_COLOR = "var(--brand)"

// Selected colors
let chosenColor = DEFAULT_COLOR
let chosenGridSize = DEFAULT_GRID_SIZE

// User Interface
let grid = getById('grid')
let btnReset = getById('reset-button')
let huePicker = getById('hue-picker')


//= Application functions
function setThemeColor() {
  let hueValue = huePicker.value
  let themeHueColor = document.querySelector(':where(html)')
  let hueText = getById('hue-value')
  themeHueColor.style.setProperty('--brand-hue', hueValue)
  hueText.textContent = hueValue
}


function initializeGrid() {
  setGridSize(chosenGridSize)
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
  const gridSquare = chosenGridSize * chosenGridSize
  for (var i = 0; i < gridSquare; i += 1) {
    const gridElement = document.createElement('div')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.className = 'pixel'
    grid.appendChild(gridElement)
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = chosenColor
}

function resetColor() {
  let pixels = document.querySelectorAll('.pixel')
  pixels.forEach(pixel => pixel.removeAttribute('style'))
}

huePicker.addEventListener('input', setThemeColor)
btnReset.addEventListener('click', resetColor)

// Initialize grid on page load
initializeGrid();