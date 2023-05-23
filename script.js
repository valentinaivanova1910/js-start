function Random() {
  const max = 100;
  return Math.round(Math.random() * max);
}

const btn = document.getElementById("button");
const div1 = document.getElementById("div1");

btn.onclick = function () {
  div1.innerHTML = Random();
};

const div = document.querySelector("div");

div.addEventListener(
  "mousemove",
  (e) => {
    let x = e.pageX,
      y = e.pageY;

    console.log(`${x - div.offsetLeft}:${y - div.offsetTop}`);
  },
  {
    capture: true,
  }
);
const btns = document.querySelectorAll(".text");
for (let btn of btns) {
  btn.onclick = () => {
    const text = btn.parentElement.querySelector(".hide-text");
    text.style.display = text.style.display === "none" ? "block" : "none";
  };
}
