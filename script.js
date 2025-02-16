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


function checkNeighbors(){
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
      if (!upLCell || !upCell || !upRCell || !rightCell || !downRCell || !downCell || !downLCell || !leftCell){

         continue;
         };
   

      let neighborsAlive = (upLCell.classList.contains('alive'))+
      (upCell.classList.contains('alive'))+
      (upRCell.classList.contains('alive'))+
      (rightCell.classList.contains('alive'))+
      (downRCell.classList.contains('alive'))+
      (downCell.classList.contains('alive'))+
      (downLCell.classList.contains('alive'))+
      (leftCell.classList.contains('alive'));
      
          if (state.classList.contains('alive') && (neighborsAlive<2)){
         state.classList.toggle('limbo');
         
      } else if (state.classList.contains('alive') && (neighborsAlive == 2 || neighborsAlive == 3)){
         console.log("I'm still alive!");
      } else if (state.classList.contains('alive') && (neighborsAlive > 3)){
         state.classList.toggle('limbo');
      } else if (state.classList.contains('dead') && (neighborsAlive == 3)){
         state.classList.toggle('limbo');
      }
        
         
        
      } 
   };

   // after cells have checked neighbors, they determine if they will switch to dead/alive
   //this function switches their state
   function changeCells(){
         for (let i = 0; i < cellArray.length; i++){
            let cellClass = ('.cell'+i);
            let state = document.querySelector(cellClass);

            if (state.classList.contains('limbo')){
               state.classList.toggle('limbo');
               state.classList.toggle('alive');
               state.classList.toggle('dead');
            }
   }
};

//When this button is pressed it will look at all cells (except the edges) and go through one generation.
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
   checkNeighbors();
   changeCells();
});

// button to run constant generations, 2 each second
const continuous = document.querySelector('#multi');
let intervalid;
let intervalid2;
continuous.addEventListener('click', () => {
 
      intervalid = setInterval(checkNeighbors, 500);
      intervalid2 = setInterval(changeCells, 500);

      
});
// button to stop generations
const stopbtn = document.querySelector('#stop');
stopbtn.addEventListener('click', () => {
   setTimeout(() => {
      clearInterval(intervalid);
      clearInterval(intervalid2);
   }, 1);
});
   

         

     
/*
const multibtn = document.querySelector('#multi');
multibtn.addEventListener('click', (num) => {
      for (let i = 0; i < num; i++){
      checkNeighbors();
      changeCells();
   }
});
*/
/*
Any live cell with fewer than two live neighbours dies, as if by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/