//create a player constructor with takeTurn function
const PlayerMaker = (name, icon) => {
    const takeTurn = () => {
        let board = document.querySelectorAll('.space');
        let instruct = document.getElementById('playOrder');
        instruct.innerText = name + ' place your ' + icon;
         for(let i=0;i<board.length;i++){
        board[i].addEventListener('click', placeIcon)
        function placeIcon (){
           if (gameBoard[i] === ' '){
               gameBoard[i] = icon;
               renderBoard()
           } else {
               alert('try again')
           };     
            };      
        };
  };
    return { name, icon, takeTurn };
};


//create a gameboard array with 9 empty values all with the class of 'space' 
let gameBoard = new Array();

//create the 2 players player a/player b for now 
        let player1 = PlayerMaker('Player 1', 'x');
        let player2 = PlayerMaker('Player 2', 'o');
        
//call makeBoard to start game

makeBoard();
function makeBoard  ()  {

    for(let i=0;i<9;i++){
        const text = ' '
        gameBoard.push(text)
        }          
  renderBoard()     
};

const nameChange = (() =>{
    let button = document.getElementById('nameChange');
    button.addEventListener('click', change)
    function change (){
        player1.name = prompt('player 1 What is your Name?');
        player2.name = prompt('player 2 what is your name?');
        let play1 = document.getElementById('player1');
        let play2 = document.getElementById('player2');
        play1.innerText = player1.name + ' is playing as ' + player1.icon;
        play2.innerText = player2.name + ' is playing as ' + player2.icon;
        button.style.display = 'none';
    }
})();

 
//render the board
function renderBoard() {
    let emptyBoard = document.getElementById('board');
    board.innerHTML = '';
    for(let i =0;i<gameBoard.length;i++){
        let box = document.createElement('div');
        box.classList.add('space');
        box.innerHTML = gameBoard[i];
        emptyBoard.appendChild(box);
    }  
    nextTurn(); 
    };


//an object to control the flow of the game eg. with each turn a click will change the array to
//if last x = o then next symbol will be X or if O<X next symbol will be O
//X or O and return to render the board
function nextTurn(){
    
    if (gameBoard[0] + gameBoard[1] + gameBoard[2] === 'xxx' || gameBoard[3] + gameBoard[4] + gameBoard [5] === 'xxx' 
        ||gameBoard[6] + gameBoard[7] + gameBoard[8] === 'xxx' || gameBoard[0] +gameBoard[3] + gameBoard [6] === 'xxx' 
        ||gameBoard[1]+ gameBoard[4] + gameBoard[7] === 'xxx' || gameBoard[2] +gameBoard[5]+gameBoard[8] === 'xxx'
        ||gameBoard[0]+ gameBoard[4]+gameBoard[8] === 'xxx' || gameBoard[2] + gameBoard[4] + gameBoard[6] === 'xxx') {
        winner(player1)
        } if (gameBoard[0] + gameBoard[1] + gameBoard[2] === 'ooo' || gameBoard[3] + gameBoard[4] + gameBoard [5] === 'ooo' 
        ||gameBoard[6] + gameBoard[7] + gameBoard[8] === 'ooo' || gameBoard[0] +gameBoard[3] + gameBoard [6] === 'ooo' 
        ||gameBoard[1]+ gameBoard[4] + gameBoard[7] === 'ooo' || gameBoard[2] +gameBoard[5]+gameBoard[8] === 'ooo'
        ||gameBoard[0]+ gameBoard[4]+gameBoard[8] === 'ooo' || gameBoard[2] + gameBoard[4] + gameBoard[6] === 'ooo') {
        winner(player2);
        } else {
    let howMany = gameBoard.filter(a => a === ' ');
    if (howMany.length === 0){
        alert('No winner this time')
        gameBoard = []
        makeBoard();
    } else if((howMany.length % 2) === 0){
        player2.takeTurn();
    } else{
        player1.takeTurn();
    };
};
};

//winner function with play again option
const winner = (a) => {
    //select winnerBox from HTML
    let winBox = document.getElementById('winnerBox');
    let winName = document.getElementById('player');
    let nextGame = document.getElementById('button');
    //change text on player
    winName.innerText = a.name;
    //change display on winnerBox
    winBox.style.display = 'flex';
    nextGame.addEventListener('click', () => {
        winBox.style.display = 'none'
        gameBoard = []
        makeBoard();
    });

};
