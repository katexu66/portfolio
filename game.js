const canvas = document.getElementById("gameCanvas");
console.log("canvas:", canvas);

const ctx = canvas?.getContext("2d");
console.log("ctx:", ctx);

// Initializing arrow key variables
const GLOBALS = {
  up: false,
  down: false,
  left: false,
  right: false
};

// Birb sprite
const character = new Image();
character.src = "assets/birb_forward.png";

character.onload = () => {
  console.log("image loaded");
  ctx.drawImage(character, 550, 500, 70, 70); // first two numbers are location, second two are size %
};

character.onerror = () => {
  console.error("image failed to load");
};
