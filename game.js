const container =  document.querySelector('#container');


function addGrid(){  

  let content = document.createElement('div');
 
 for (let i = 0; i <= 256; i++){// 16x16 = 256 grid of square divs
  
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

  addGrid();