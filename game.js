
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, snakeIntersection, getSnakeHead} from './snake.js'
import {update as updateFood, draw as drawFood, scoreCounter as score} from './food.js'
import {outsideGrid} from './grid.js'
import { request } from './restart.js';

console.log("Hey! why are you digging through my guts!");

let lastRenderTime = 0;
let gameBoard = document.getElementById('game-board')
let gameOver = false;
let record;
function main(currentTime){
    record = Number(localStorage.getItem('record'));
    if(record>0){
        document.getElementById('record').innerText = 'Record: '+ record;
    }

    if(gameOver){   
        if(record>0){
            if(score > record){
                localStorage.setItem('record', score);
                document.getElementById('record').innerText = 'Record: '+ score;
            }
        }
        else{
            localStorage.setItem('record', score);
        }
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

