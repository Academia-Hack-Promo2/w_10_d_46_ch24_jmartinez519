//Limpia el tablero para el nuevo juego

var cleanBoard = function(){

  document.getElementById('r1').innerHTML = " ";
  document.getElementById('r4').innerHTML = " ";
  document.getElementById('r7').innerHTML = " ";
  document.getElementById('r2').innerHTML = " ";
  document.getElementById('r5').innerHTML = " ";
  document.getElementById('r8').innerHTML = " ";
  document.getElementById('r3').innerHTML = " ";
  document.getElementById('r6').innerHTML = " ";
  document.getElementById('r9').innerHTML = " ";
};


var game = function(board, userName, computerName){
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
      return " La Vieja";
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
    var coord = String(xInt) + String(yInt);
    if (checkPlay(board, xInt ,yInt)){
      switch (coord) {
        case '00':
          document.getElementById('r1').innerHTML = symbol;
          break;
        case '01':
          document.getElementById('r4').innerHTML = symbol;
          break;
        case '02':
          document.getElementById('r7').innerHTML = symbol;
          break;
        case '10':
          document.getElementById('r2').innerHTML = symbol;
          break;
        case '11':
          document.getElementById('r5').innerHTML = symbol;
          break;
        case '12':
          document.getElementById('r8').innerHTML = symbol;
          break;
        case '20':
          document.getElementById('r3').innerHTML = symbol;
          break;
        case '21':
          document.getElementById('r6').innerHTML = symbol;
          break;
        case '22':
          document.getElementById('r9').innerHTML = symbol;
          break;
      }
      board[xInt][yInt] = symbol;

    }else{
      play(board, currentPlayer, symbol)
    }

  }else{
    var x = prompt("Ingresa la fila:");
    var y = prompt("Ingresa la columna:");
    var xInt = Number(x);
    var yInt = Number(y);
    var coord = String(xInt) + String(yInt);
    if (checkPlay(board, xInt ,yInt)){
      switch (coord) {
        case '00':
          document.getElementById('r1').innerHTML = symbol;

          break;
        case '01':
          document.getElementById('r4').innerHTML = symbol;

          break;
        case '02':
          document.getElementById('r7').innerHTML = symbol;

          break;
        case '10':
          document.getElementById('r2').innerHTML = symbol;

          break;
        case '11':
          document.getElementById('r5').innerHTML = symbol;

          break;
        case '12':
          document.getElementById('r8').innerHTML = symbol;

          break;
        case '20':
          document.getElementById('r3').innerHTML = symbol;

          break;
        case '21':
          document.getElementById('r6').innerHTML = symbol;

          break;
        case '22':
          document.getElementById('r9').innerHTML = symbol;

          break;
      }
      board[xInt][yInt] = symbol;
    }else{
      alert("Posicion Ocupada")
      play(board, currentPlayer, symbol)
    }
  }
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
  cleanBoard()
  var userName = "Jonathan";
  var computerName = "Chappie";
  var board = [["[ ]","[ ]","[ ]"],["[ ]","[ ]","[ ]"],["[ ]","[ ]","[ ]"]];
  var winner = game(board, userName, computerName);
  alert("El ganador es: " + winner);

};