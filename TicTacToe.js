const cellDivs = document.querySelectorAll(".grid-cell");

let xIsNext = true;

let winner;

for (const cell of cellDivs) {
  cell.addEventListener("click", makeMove);
}

function makeMove(e) {
  
   if (e.target.classList[2] === "x" || e.target.classList[2] === "o") {
    return;
  }
  
    if (xIsNext) {
    e.target.classList.add("x");
    xIsNext = false;
    checkGameStatus();
    } else {
    e.target.classList.add("o");
    xIsNext = true;
    checkGameStatus();
  }
}

  function checkGameStatus() {
   const topLeft = cellDivs[0].classList[2];
   const top = cellDivs[1].classList[2];
   const topRight = cellDivs[2].classList[2];
   const middleLeft = cellDivs[3].classList[2];
   const middle = cellDivs[4].classList[2];
   const middleRight = cellDivs[5].classList[2];
   const bottomLeft = cellDivs[6].classList[2];
   const bottom = cellDivs[7].classList[2];
   const bottomRight = cellDivs[8].classList[2];
  
   if (topLeft && topLeft === top && topLeft === topRight) {
     checkWinner(topLeft);
  }
    else if (middleLeft && middleLeft === middle && middleLeft === middleRight) {
     checkWinner(middleLeft);
  }
    else if (bottomLeft && bottomLeft === bottom && bottomLeft === bottomRight) {
     checkWinner(bottomLeft);
  }
    else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
     checkWinner(topLeft);
  }
    else if (top && top === middle && top === bottom) {
     checkWinner(top);
  }
    else if (topRight && topRight === middleRight && topRight === bottomRight) {
     checkWinner(topRight);
  }
    else if (topLeft && topLeft === middle && topLeft === bottomRight) {
     checkWinner(topLeft);
  }
    else if (bottomLeft && bottomLeft === middle && bottomLeft === topRight) {
     checkWinner(bottomLeft);
  }
    else if (topLeft && top && topRight && 
             middleLeft && middle && middleRight && 
             bottomLeft && bottom && bottomRight) {
       setTimeout(() => { alert("Cats game!"); }, 100);
       for (const cell of cellDivs) {
         setTimeout(() => { cell.classList.remove("x"); }, 100);
         setTimeout(() => { cell.classList.remove("o"); }, 100);
         xIsNext = true;
        }
    }
}    


function checkWinner(winner) {
  if (winner === "x") {
       setTimeout(() => { alert("X has won!"); }, 100);
       for (const cell of cellDivs) {
         setTimeout(() => { cell.classList.remove("x"); }, 100);
         setTimeout(() => { cell.classList.remove("o"); }, 100);
         xIsNext = true;
        }
  }  else if (winner === "o") {
       setTimeout(() => { alert("O has won!"); }, 100);
       for (const cell of cellDivs) {
         setTimeout(() => { cell.classList.remove("x"); }, 100);
         setTimeout(() => { cell.classList.remove("o"); }, 100);
         xIsNext = true;
        }
  }
}


