let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");
let roButton = document.getElementById("dir");

let rgb1 = "#000";
let rgb2 = "#fff";
let deg = "0deg";

const hexValues = () => {
  let myHexValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors += myHexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const direction = () => {
  return `${Math.floor(Math.random() * 180)}deg`;
};

const updateGradient = () => {
  document.body.style.backgroundImage = `linear-gradient(${deg}, ${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(${deg}, ${rgb1}, ${rgb2});`;
};

const rotateButton = () => {
  deg = direction(); // Only update the direction (rotation)
  roButton.style.transform = `rotate(${deg})`; // Correctly applying rotation to the button
  updateGradient(); // Update the gradient with the new direction
};

const handleButton1 = () => {
  rgb1 = hexValues();
  btn1.innerText = rgb1;
  btn1.style.backgroundColor = rgb1;
  updateGradient();
};

const handleButton2 = () => {
  rgb2 = hexValues();
  btn2.innerText = rgb2;
  btn2.style.backgroundColor = rgb2;
  updateGradient();
};

roButton.addEventListener("click", rotateButton);
btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
