const container = document.querySelector(".container");

let gridNumber = 16;
let drawing = false;

for (let i = 0; i < gridNumber * gridNumber; i++) {
  const grid = document.createElement("div");
  grid.id = `grid${i}`;
  grid.style.width = grid.style.height = `${600 / gridNumber}px`;
  grid.style.border = "0.7px solid black";
  grid.style.boxSizing = "border-box";
  container.appendChild(grid);

  grid.addEventListener("mousedown", () => {
    drawing = true;
  });
  grid.addEventListener("mousemove", () => {
    if (!drawing) return;
    grid.style.background = "black";
  });
  grid.addEventListener("mouseup", () => {
    drawing = false;
  });
}
