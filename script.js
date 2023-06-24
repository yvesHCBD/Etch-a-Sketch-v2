console.log("Hello");

const body = document.querySelector("body");
body.style.minHeight = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
// body.style.justifyContent = "space-evenly";
body.style.marginTop = "50px";

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
etchContainer.flexDirection = "column";

const gridSizebtn = document.createElement("button");
gridSizebtn.classList.add("gridSize-btn");
gridSizebtn.textContent = "Change Grid Size";
gridSizebtn.style.marginTop = "10px";

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
      // cell.style.flex = "0 1 0";
      cell.style.height = `${400 / num}px`; //always makes the dimension of each cell fit equally within the drawing window
      cell.style.width = `${400 / num}px`;
      column.appendChild(cell);
    }
    etchContainer.appendChild(column);
  }
}

gridSizebtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach((e) => {
    e.remove();
  }); //erases previous grid to make space for new grid

  let size = prompt(`Enter size of grid: 
  (ex: 16 means 16x16 grid)`);
  createGrid(size);
  paint();
});

bodyContainer.appendChild(h1);
bodyContainer.appendChild(etchContainer);
bodyContainer.appendChild(gridSizebtn);

createGrid(16); //default size
paint();

const resetGrid = document.createElement("button");
resetGrid.classList.add("resetGrid-btn");
resetGrid.textContent = "Reset Grid";
resetGrid.style.marginTop = "10px";
resetGrid.style.marginLeft = "5px";

bodyContainer.appendChild(resetGrid);

resetGrid.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach((e) => {
    e.remove();
  });
  createGrid(16);
  paint();
});

function removePaint() {
  const gridDivs = document.querySelectorAll(".cell");
  gridDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "";
    });
  });
}

function paint() {
  const gridDivs = document.querySelectorAll(".cell");
  gridDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  });
}

function clear() {
  const gridDivs = document.querySelectorAll(".cell");
  gridDivs.forEach((div) => {
    div.style.backgroundColor = "";
  });
}

const eraser = document.createElement("button");
eraser.classList.add("eraser-btn");
eraser.textContent = "Eraser";
eraser.style.marginLeft = "5px";

eraser.addEventListener("click", removePaint);

bodyContainer.appendChild(eraser);

const clearWindow = document.createElement("button");
clearWindow.classList.add("clearWindow-btn");
clearWindow.textContent = "Clear Window";
clearWindow.style.marginLeft = "5px";

clearWindow.addEventListener("click", clear);

bodyContainer.appendChild(clearWindow);

const paintbtn = document.createElement("button");
paintbtn.classList.add("paint-btn");
paintbtn.textContent = "Paint";
paintbtn.style.marginLeft = "5px";

paintbtn.addEventListener("click", paint);

bodyContainer.appendChild(paintbtn);
