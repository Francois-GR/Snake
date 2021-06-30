
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, snakeIntersection, getSnakeHead} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'
import { request } from './restart.js';

let lastRenderTime = 0;
let gameBoard = document.getElementById('game-board')
let gameOver = false;
function main(currentTime){

    if(gameOver){
        request(gameBoard)
        return
    }
    const delta = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main);
    if(delta < 1/SNAKE_SPEED) return
    lastRenderTime = currentTime
   
    update()
    draw()
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

