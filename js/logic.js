var printBoard = function(board){
  console.log(board);
};

var initBoard = function(){
  var board = [];
  var i;
  var j;
  for (i = 0; i < 3; i++){
    board.push([]);
    for (j = 0; j < 3; j++){
      board[i][j] = "[ ]";
    }
  }
  return board;
};

var game = function(board, userName, computerName){
  var winner;
  while (true){
    winner = turn(board, userName, "X");
    if (winner === null){
      winner = turn(board, computerName, "O");
      if (winner !== null){
        return winner;
      }
    }else{
      return winner;
    }   
  }
  return winner;
};

var turn = function(board, currentPlayer, symbol){
  printBoard(board);
  board = play(board ,currentPlayer, symbol);
  var winner = checkWinner(board, currentPlayer); 
  return winner;
};

var checkWinner = function(board, currentPlayer){
  if( board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][2] != "[ ]" ||
    board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][2] != "[ ]" ||
    board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][2] != "[ ]" ||
    board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[2][0] != "[ ]" ||
    board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[2][1] != "[ ]" ||
    board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[2][2] != "[ ]" ||
    board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != "[ ]" ||
    board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] != "[ ]"){
    return currentPlayer;

  }else{
    if (checkFull(board)){
      return "Vieja";
    }
  }
  return null;
};

var checkFull = function(board){
  var i;
  var j;
  for (i = 0; i < 3; i++){
    for (j = 0; j < 3; j++){
      if (board[i][j] == "[ ]"){
        return false;
      }
    }
  }
  return true;
};

var play = function(board, currentPlayer, symbol){
  alert("Haz tu jugada " + currentPlayer);
  if (currentPlayer === "Chappie"){
    var xInt = Math.floor(Math.random() * (3 - 0));
    var yInt = Math.floor(Math.random() * (3 - 0));
    if (checkPlay(board, xInt ,yInt)){
      board[xInt][yInt] = symbol;
    }

  }else{
    var x = prompt("Ingresa la fila:");
    var y = prompt("Ingresa la columna:");
    var xInt = Number(x);
    var yInt = Number(y);
    if (checkPlay(board, xInt ,yInt)){
      board[xInt][yInt] = symbol;
    }
  }
  console.log(currentPlayer, xInt, yInt)
  return board;
};

var checkPlay = function(board, xInt, yInt){
  if (check_x(xInt) && check_y(yInt)){
    if (board[xInt][yInt] == "[ ]"){
      return true;
    }
  }
  return false;
};

var check_x = function(xInt){
  if (xInt === 0 || xInt == 1 || xInt == 2){
    return true;
  }else{
    return false;
  }
};

var check_y = function(yInt){
  if (yInt === 0 || yInt == 1 || yInt == 2){
    return true;
  }else{
    return false;
  }
};

var main = function(){

  var userName = prompt("Escriba su nombre");
  var computerName = "Chappie";
  var board = initBoard();
  var winner = game(board, userName, computerName);
  alert("El ganador es: " + winner);

}();