const result = document.querySelector("p");
const body = document.querySelector("body");
const btn = document.querySelector("btn");
let i = 1000;


function ghoul() {
  setInterval(() => {
    i === -1 ? clearInterval : result.innerText = `${i} - 7 = ${i -= 7}`; console.log(i);
  }, 200);
}