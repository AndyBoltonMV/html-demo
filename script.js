// Grab an element from HTML document
// Document object is literally the html doc
const main = document.querySelector("main");
let str = "Steve";
// Affecting the contents of a tag directly
main.innerHTML = `
    <p>This is slightly better practice ${str}</p>
`;
// Creating DOM nodes and appending them to the DOM
const pTag = document.createElement("p");
const node = document.createTextNode("This is good practice");
pTag.appendChild(node);
main.appendChild(pTag);

// Event listener added to the main element, when clicked the callback function will run
main.addEventListener("click", addStuffToDom);

// Callback function that creates DOM nodes
function addStuffToDom(event) {
  console.log("You click in the right place");
  const pTag = document.createElement("p");
  const node = document.createTextNode("This is good practice StephGabbie");
  pTag.appendChild(node);
  main.appendChild(pTag);
}
