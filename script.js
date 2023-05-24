function Random() {
  const max = 100;
  return Math.round(Math.random() * max);
}

const btn = document.getElementById("button");
const div1 = document.getElementById("div1");

btn.onclick = function () {
  div1.innerHTML = Random();
};

const daw = document.querySelector(".daw");
console.log(daw)

daw.addEventListener(
  "mousemove",
  (e) => {
    let x = e.pageX,
      y = e.pageY;
    console.log(`${x - daw.offsetLeft}:${y - daw.offsetTop}`);
  },
);

const btns = document.querySelectorAll(".text");
for (let btn of btns) {
  btn.onclick = () => {
    const text = btn.parentElement.querySelector(".hide-text");
    text.style.display = text.style.display === "none" ? "block" : "none";
  };
}

const btn1 = document.querySelectorAll(".language");
for (let btn of btn1) {
  btn1.onclick = () => {
    const textOne = btn1.parentElement.querySelector(".list");
    textOne.style.display = textOne.style.display === "none" ? "block" : "none";
  };
}