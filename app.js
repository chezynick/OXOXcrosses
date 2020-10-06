//create a gameboard array with 9 empty values all with the class of 'space' 
const gameBoard = new Array();
function makeBoard  ()  {
    
    for(let i=0;i<9;i++){
        const text = ''
       
        gameBoard.push(text)
        }        
  renderBoard()      
};
makeBoard();
 
//create a player constructor with takeTurn function
const playerMaker = (name, icon) => {
    const takeTurn = () => {
        let board = document.querySelectorAll('.space');
         for(let i=0;i<board.length;i++){
        board[i].addEventListener('click', placeIcon)
        function placeIcon (){
        //    gameBoard[i].push(icon);
                board[i].innerHTML = icon;
            }
        }
  };
    return { name, icon, takeTurn };
};
//create the 2 players player a/player b for now 
const player1 = playerMaker('Player 1', 'x');
const player2 = playerMaker('Player 2', 'o');

//render the board
function renderBoard() {
    let emptyBoard = document.getElementById('board');
    
    for(let i =0;i<gameBoard.length;i++){
        let box = document.createElement('div');
        box.classList.add('space');
        box.innerHTML = gameBoard[i];
        emptyBoard.appendChild(box);
    }
    
        
    };


//an object to control the flow of the game eg. with each turn a click will change the array to
//if last x = o then next symbol will be X or if O<X next symbol will be O
//X or O and return to render the board

//function to determine if a win has been achieved if not repeat