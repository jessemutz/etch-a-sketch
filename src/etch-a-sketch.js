const sketcher = document.getElementById("sketcher");
var gridSize = 16;
var gridSquare = gridSize * gridSize;


// createGrid(gridSize);
for(var i = 0; i < gridSquare; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  
  sketcher.appendChild(pixel);
}

sketcher.setAttribute('style', `width: calc(var(--size-base) * ${gridSize})`);