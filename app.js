let drawing = false;

let input = prompt(
  "Please choose a number between 10 and 100 for the grid.",
  "16",
);
let gridNumber = Number(input);
if (!Number.isInteger(gridNumber) || gridNumber < 10 || gridNumber > 100) {
  gridNumber = 16;
}

const canvasWidth = 500;
const container = document.querySelector(".container");

for (let i = 0; i < gridNumber * gridNumber; i++) {
  const grid = document.createElement("div");
  grid.id = `grid${i}`;
  grid.style.width = grid.style.height = `${canvasWidth / gridNumber}px`;
  grid.style.border = "0.1px solid black";
  grid.style.boxSizing = "border-box";
  container.appendChild(grid);

  grid.addEventListener("mousedown", () => {
    drawing = true;
    grid.style.backgroundColor = "black";
  });
  grid.addEventListener("mousemove", () => {
    if (!drawing) return;
    grid.style.backgroundColor = "black";
  });
  document.addEventListener("mouseup", () => {
    drawing = false;
  });

  // mouseup event needs to be added in document, if it is added for grid, the following issue will happen
  //1. move outside the grid
  //2. release mouse button, mouseup does NOT fire on grid
  //3. drawing stays true

  // grid.addEventListener("mouseup", () => {
  //   drawing = false;
  // });
}
