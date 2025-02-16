const container = document.querySelector('#container');

// create an array of cells
const cellArray = [];

let makeBoxes = (num) => {
   for (let i = 0; i < num; i++) {
   let newCell = document.createElement('div');
   newCell.classList.add(`cell${i}`);
   newCell.classList.add('dead');
   newCell.id = ('cellid');
   newCell.style.width = '45px';
   newCell.style.height = '45px';
   newCell.textContent = (`cell${i}`);
   container.appendChild(newCell);
   cellArray.push(`cell${i + 1}`)
   }
}
makeBoxes(520);

//When a cell is clicked it will switch between dead/alive
let alive = false;

for (let i = 0; i < cellArray.length; i++) {
   let cellClass = ('.cell'+i);
   let state = document.querySelector(cellClass)
  
   state.addEventListener('click', () => {
      if (alive == false){
         alive = true;
         state.classList.toggle('alive');
         state.classList.toggle('dead');
      } else if (alive == true){
         alive = false;
         state.classList.toggle('alive');
         state.classList.toggle('dead');

      }
      

});
}


// let the cell look at all 8 neighbors


//function checkNeighbors(){
for (let i = 0; i < cellArray.length; i++) {
      let cellClass = ('.cell'+i);
      let upL =('.cell'+(i-41));
      let up = ('.cell'+(i-40));
      let upR =('.cell'+(i-39));
      let right =('.cell'+(i+1));
      let downR =('.cell'+(i+41));
      let down =('.cell'+(i+40));
      let downL =('.cell'+(i+39));
      let left =('.cell'+(i-1));
      
      let upLCell = document.querySelector(upL);
      let upCell = document.querySelector(up);
      let upRCell = document.querySelector(upR);
      let rightCell = document.querySelector(right);
      let downRCell = document.querySelector(downR);
      let downCell = document.querySelector(down);
      let downLCell = document.querySelector(downL);
      let leftCell = document.querySelector(left);
      let state = document.querySelector(cellClass);
      
   


   state.addEventListener('click', () => {
   
     let neighborsAlive = (upLCell.classList.contains('alive'))+
     (upCell.classList.contains('alive'))+
     (upRCell.classList.contains('alive'))+
     (rightCell.classList.contains('alive'))+
     (downRCell.classList.contains('alive'))+
     (downCell.classList.contains('alive'))+
     (downLCell.classList.contains('alive'))+
     (leftCell.classList.contains('alive'));
    if (state.classList.contains('alive') && (neighborsAlive<2)){
      console.log('I died');
    } else if (state.classList.contains('alive') && (neighborsAlive == 2 || neighborsAlive == 3)){
      console.log('Im still alive');
    } else if (state.classList.contains('alive') && (neighborsAlive > 3)){
      console.log('i died');
    } else if (state.classList.contains('dead') && (neighborsAlive == 3)){
      //It comes to life
    }
   
   
      });
   }


/*
const button = document.querySelector('#btn');
button.addEventListener('click', checkNeighbors);
*/
/*
Any live cell with fewer than two live neighbours dies, as if by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

*/