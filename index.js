// Write your code here!
// const divElement = document.createElement("div");
// document.body.append(divElement);

// const ulElement = document.createElement("ul");
// for (let i = 0; i < 100; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   li.style.color = `#2764${i}B`;
//   ulElement.append(li);
// }

// document.body.append(ulElement);

console.log(document.querySelector("h1").textContent);
const firstHeading = document.querySelector("#firstHeading");
firstHeading.remove();

document.getElementById("main").remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Christopwerwer is the champion";
