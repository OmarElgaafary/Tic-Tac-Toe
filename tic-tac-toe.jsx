
import { createSignal } from "solid-js"

import "./index.css"


function App() {
  const [board, setBoard] = createSignal([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const [player, setPlayer] = createSignal(1);
  const [gameRunning, setGameRunning] = createSignal(false);

  const resetGame = () => {
    setPlayer(1);
    setBoard([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  }

  const startGame = () => {
  setGameRunning(true);
  }

  function checkWinner(array) {
   
// [row][col] [i][j]
   for (let i = 0; i < 3; i++) {

      if (array[i][0] == array[i][1] && array[i][1] == array[i][2]) {
        if (array[i][0] == 1) {
          setGameRunning(false);
          return setTimeout(() => {window.alert("X won the game")}, 100);
        } else if (array[i][0] == 2) {
          setGameRunning(false);
          return setTimeout(() => {window.alert("O won the game")}, 100);
        }
      }

      if (array[0][i] == array[1][i] && array[1][i] == array[2][i]) {
        if (array[0][i] == 1) {
          setGameRunning(false);
          return setTimeout(() => {window.alert("X won the game")}, 100);
        } else if (array[0][i] == 2) {
          setGameRunning(false);
          return setTimeout(() => {window.alert("O won the game")}, 100);
        }
      }

      if (array[0][0] == array[1][1] && array[1][1] == array[2][2]) {
        if (array[0][0] == 1) {
          setGameRunning(false);
          return setTimeout(() => {window.alert("X won the game")}, 100);
        } else if (array[0][0] == 2) {
          setGameRunning(false);
          return setTimeout(() => {window.alert("O won the game")}, 100);
        }
      }

      if (array[0][2] == array[1][1] && array[1][1] == array[2][0]) {
        if (array[0][2] == 1) {
          setGameRunning(false);
          return setTimeout(() => {window.alert("X won the game")}, 100);
        } else if (array[0][2] == 2) {
          setGameRunning(false);
          return setTimeout(() => {window.alert("O won the game")}, 100);
        }
      }
    }

  }

  const cellClicked = (x, y) => {
    console.log("cell clicked at", x, y)
    
    if (gameRunning(true)) {
    let newArray = [...board()];

    if (newArray[x][y] > 0) {
      return;
    }

    newArray[x][y] = player();
    setBoard(newArray);
    setPlayer(player() == 1 ? 2 : 1);
    checkWinner(newArray);
  }
  }

  const getValue = (x, y) => {
    
    let data = [...board()];

    switch (data[x][y]) {
      case 0: return "";
      case 1: return "X";
      case 2: return "O";
    }


  }

  return (
    <div class="app">
        <h1>Tic-Tac-Toe Game!</h1>
        <div>
        <button class="button" onclick={startGame}>Start</button>
      </div><br></br>

      <div class="container" id="container">
        <div class="cell" id="block-0-0" onclick={() => cellClicked(0, 0)}>
          <span>{getValue(0, 0)}</span>
        </div>
        <div class="cell" id="block-0-1" onclick={() => cellClicked(0, 1)}>
          <span>{getValue(0, 1)}</span>
        </div>
        <div class="cell" id="block-0-2" onclick={() => cellClicked(0, 2)}>
          <span>{getValue(0, 2)}</span>
        </div>

        <div class="cell" id="block-1-0" onclick={() => cellClicked(1, 0)}>
          <span>{getValue(1, 0)}</span>
        </div>
        <div class="cell" id="block-1-1" onclick={() => cellClicked(1, 1)}>
          <span>{getValue(1, 1)}</span>
        </div>
        <div class="cell" id="block-1-2" onclick={() => cellClicked(1, 2)}>
          <span>{getValue(1, 2)}</span>
        </div>

        <div class="cell" id="block-2-0" onclick={() => cellClicked(2, 0)}>
          <span>{getValue(2, 0)}</span>
        </div>
        <div class="cell" id="block-2-1" onclick={() => cellClicked(2, 1)}>
          <span>{getValue(2, 1)}</span>
        </div>
        <div class="cell" id="block-2-2" onclick={() => cellClicked(2, 2)}>
          <span>{getValue(2, 2)}</span>
        </div><br></br>

      </div>
        <div >
        <button class="button" onclick={resetGame}>Rest</button>
      </div>

    </div>
  );
}

export default App;
