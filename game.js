const container =  document.querySelector('#container');
const play_button = document.querySelector('#play-btn');
const reset_button = document.querySelector('#reset-btn');
let squares = container.querySelectorAll('.square');

play_button.addEventListener('click', playGame);
reset_button.addEventListener('click', resetGame);

function addGrid(){  
  let content = document.createElement('div');  
  let input = prompt("Please enter the number of squares per side (2 - 100)");

  while((input == null || input > 100 || input < 2 || isNaN(input))){
    input = prompt ("Please enter the number of squares per side (2 - 100)");
  }

  for (let i = 0; i < input * input; i++){
      container.style.cssText = 'grid-template-rows: repeat('+input+' , 1fr); grid-template-columns: repeat('+input+', 1fr)';
      content = document.createElement('div'); 
      content.classList.add('square');
      container.appendChild(content);        
  }
}

function addColor(){
  squares = container.querySelectorAll('.square');

  function color(item){
      item.style.backgroundColor = 'black';
  }
  
  squares.forEach(square => {
    square.addEventListener('mouseover', (e) => {
      if(e.buttons == 1) color(square);//left click is pressed
    })
  })
}

function resetGame(){
  squares = container.querySelectorAll('.square');
  squares.forEach(square => square.style.backgroundColor = 'white');
}

function playGame(){
resetGame();
addGrid();
addColor();
}