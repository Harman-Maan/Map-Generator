const container = document.getElementById("container");
let levelClasses = ["highest-land", "high-land", "normal-land", "low-land", "surface-water", "deep-water", "deepest-water"];
const width = 30;

for (let i = 0; i < 900; i++) {
  container.innerHTML += `<div class="box"></div>`;
}

let boxes = document.querySelectorAll(".box");
boxes = Array.from(boxes);

for (let i in boxes) {
  let randomLevel = Math.floor(Math.random() * 5);
  if (randomLevel === 0) {
    // Adding High Land
    boxes[i].classList.add("deepest-water");

    i = parseInt(i); // Converting i from string to number

    //adding land around the high-land
    let x = 0;
    let shouldGoLeft = true;
    let shouldGoRight = true;
    levelClasses.forEach((level) => {
      if (i - width * x > width - 1) boxes[i - width * x].classList.add(level); // Top
      if (i + width * x < boxes.length - width) boxes[i + width * x].classList.add(level); // Bottom
      (i - x + 1) % width > 0 && shouldGoLeft ? boxes[i - x].classList.add(level) : (shouldGoLeft = false); // Left
      (i + x) % width !== 0 && shouldGoRight ? boxes[i + x].classList.add(level) : (shouldGoRight = false); //Right
      x++;
    });
  }
}
