import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
let newSeg = 0
const snakeBody = [{x: 11, y: 11}]

export function update(){
    const inputDirection = getInputDirection()
    addSegments();

    for (let i = snakeBody.length - 2; i >= 0  ; i--) {
        snakeBody[i+1] = {...snakeBody[i]}
        
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    
     snakeBody.forEach(segment =>{
         const snakeElement = document.createElement('div');
         snakeElement.style.gridRowStart = segment.y;
         snakeElement.style.gridColumnStart = segment.x;
         if(segment === snakeBody[0]){
             snakeElement.setAttribute('id', 'snakehead');
         }
         snakeElement.classList.add('snake')
         gameBoard.appendChild(snakeElement)
     })

}

export function expandSnake(amount){
    newSeg +=amount
}

export function onSnake(pos, {ignoreHead = false} = {}){
    return snakeBody.some((seg , index) =>{
        if(ignoreHead && index === 0) return false;
        return equalPos(seg, pos);
    })
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true});
}

function equalPos(pos1, pos2){
    return (
        pos1.x === pos2.x && pos1.y == pos2.y
    )
}

function addSegments(){
    for(let i = 0; i< newSeg; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }

    newSeg = 0;
}