const body = document.body;
body.style.boxSizing = `border-box`;
body.style.margin = `0`;
body.style.padding = `0`;
body.style.height = `100vh`;
body.style.display = `flex`;
body.style.justifyContent = `center`;
body.style.alignItems = `center`;

const container = document.createElement(`div`);
container.id = `container`;
container.style.width = `256px`;
container.style.height = `256px`;
container.style.display = `flex`;
container.style.flexFlow = `row wrap`;
container.style.justifyContent = `center`;
container.style.alignItems = `center`;
body.appendChild(container);

const createSquare = () => {
  const square = document.createElement(`div`);
  square.className = `square`;
  square.style.width = `12px`;
  square.style.height = `12px`;
  square.style.backgroundColor = `blue`;
  square.style.border = `2px solid black`;
  container.appendChild(square);
};

for (let index = 0; index < 256; index++) {
  createSquare();
}

let squares = document.querySelectorAll(`.square`);

squares.forEach((element) => {
  element.addEventListener(`mousemove`, (event) => {
    event.currentTarget.style.backgroundColor = `red`;
  });
});
