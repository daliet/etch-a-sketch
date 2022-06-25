const container =  document.querySelector('#container');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () =>
addGrid());

function addGrid(){  

let input = prompt("Please enter the number of squares per side");
container.style.cssText = 'grid-template-rows: repeat('+input+' , 1fr); grid-template-columns: repeat('+input+', 1fr)';

let content = document.createElement('div');
 
 for (let i = 0; i <= input * input; i++){
  
    content = document.createElement('div'); 
    content.classList.add('square');
    squares = container.querySelectorAll('.square')
    container.appendChild(content);
        
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
    return content; 
  }  