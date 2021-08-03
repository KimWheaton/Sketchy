import Dot from "./dot.js";
import InputHandler from "./input.js";

let canvas = document.getElementById("drawScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let dot = new Dot(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(dot);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // ctx.clearRect(0, 0, 600, 400);
    dot.update(deltaTime);
    dot.draw(ctx);

    requestAnimationFrame(gameLoop);
     
}

gameLoop();

