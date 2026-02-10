let drawing = false;
let gridNumber = 16;
const canvasWidth = 500;
const container = document.querySelector(".container");
const clearBtn = document.querySelector("#clearBtn");
const resizeBtn = document.querySelector("#resizeBtn");

function createGrids(gridNumber) {
  for (let i = 0; i < gridNumber * gridNumber; i++) {
    const grid = document.createElement("div");
    grid.id = `grid${i}`;
    grid.className = "grid";
    grid.style.width = grid.style.height = `${canvasWidth / gridNumber}px`;
    grid.style.border = "0.1px solid black";
    grid.style.boxSizing = "border-box";
    container.appendChild(grid);
  }
}

function enableDrawing() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((g) => {
    g.addEventListener("mousedown", () => {
      drawing = true;
      g.style.backgroundColor = "black";
    });
    g.addEventListener("mousemove", () => {
      if (!drawing) return;
      g.style.backgroundColor = "black";
    });
    document.addEventListener("mouseup", () => {
      drawing = false;
    });
  });
  // mouseup event needs to be added in document, if it is added for grid, the following issue will happen
  //1. move outside the grid
  //2. release mouse button, mouseup does NOT fire on grid
  //3. drawing stays true

  // grid.addEventListener("mouseup", () => {
  //   drawing = false;
  // });
}

function removeGrid() {
  document.querySelectorAll(".grid").forEach((g) => g.remove());
}

function handleClear() {
  document
    .querySelectorAll(".grid")
    .forEach((g) => (g.style.backgroundColor = "white"));
}

function handleResize() {
  const input = prompt("Enter grid size (10-100).", "16");
  if (input === null) return;

  gridNumber = Number(input);

  if (Number.isInteger(gridNumber) && gridNumber >= 10 && gridNumber <= 100) {
    removeGrid();
    createGrids(gridNumber);
    enableDrawing();
  } else {
    alert("Please enter a valid number between 10 to 100.");
  }
}

createGrids(gridNumber);
enableDrawing();

resizeBtn.addEventListener("click", handleResize);
clearBtn.addEventListener("click", handleClear);
