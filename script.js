console.log("Hello");

const body = document.querySelector("body");
body.style.minHeight = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "space-evenly";
body.style.margin = "0";

const bodyContainer = document.createElement("div");
bodyContainer.classList.add("bodyContainer");
body.appendChild(bodyContainer);

const h1 = document.createElement("h1");
h1.classList.add("title");
h1.textContent = "Etch-a-Sketch";
h1.style.margin = "10px";

const etchContainer = document.createElement("div");
etchContainer.classList.add("etchContainer");

etchContainer.style.width = "400px";
etchContainer.style.height = "400px";
etchContainer.style.border = "2px solid black";
etchContainer.style.display = "flex";

bodyContainer.appendChild(h1);
bodyContainer.appendChild(etchContainer);

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < num; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      etchContainer.appendChild(cell);
      cell.style.margin = "0";
      cell.style.outline = "0.01px solid black";
      cell.style.display = "flex";
      cell.style.flex = "1 1 0";
      cell.style.height = "25px";
      cell.style.width = "25px";

      column.appendChild(cell);
    }
    etchContainer.appendChild(column);
  }
}
createGrid(16);

const gridDivs = document.querySelectorAll(".cell");

gridDivs.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
  });
});
