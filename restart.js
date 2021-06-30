export function request(gameBoard){
    
    let block = document.createElement('div');
    block.classList.add('restart')

    let heading = document.createElement('h2');
    heading.style.fontSize = '5vmin';
    heading.style.color = 'beige';
    heading.innerText = 'you died, Want to try again?';
    block.appendChild(heading);
     
    let yesElement = document.createElement('div');
    yesElement.innerText = 'Yes';
    yesElement.classList.add('yesButton');

    let noElement = document.createElement('div');
    noElement.innerText = 'No';
    noElement.classList.add('noButton');

    block.appendChild(yesElement);
    block.appendChild(noElement);

    yesElement.addEventListener('click', () =>{
        location.reload();
        block.remove();
    })
    noElement.addEventListener('click', ()=>{
        block.remove();
    }) 

    gameBoard.appendChild(block)

}


