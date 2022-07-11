const container =  document.querySelector('#container');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () =>
addGrid());

function addColor(){

  let squares = container.querySelectorAll('.square');

    squares.forEach(square => {
      square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });
    });
    
    squares.forEach(square => {
      square.addEventListener('mouseleave', () => {
      square.style.backgroundColor = 'black';
    }); 
    });
}

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
        addColor(); 
}  