import { onSnake, expandSnake } from "./snake.js";
import {getRandomPosition} from "./grid.js"


let food = getNewPostion()
const EXPANSION_RATE = 1;
let scoreCounter = 0;

export function update(){
   if(onSnake(food)){
       expandSnake(EXPANSION_RATE)
       food = getNewPostion()
       scoreCounter++;
   }
   document.getElementById('score').innerText = 'Score: '+scoreCounter

}

export function draw(gameBoard){

    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement)

}

function getNewPostion(){
    let newFoodPos 
    while(newFoodPos == null || onSnake(newFoodPos)){
        newFoodPos = getRandomPosition()
    }

    return newFoodPos;
}

