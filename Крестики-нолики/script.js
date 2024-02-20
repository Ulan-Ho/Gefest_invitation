let currentPlayer = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let gameActive = true;

const statusElement = document.getElementById('status');
const boardElement = document.getElementById('board');

const checkWinner = () => {
  const winPatterns = [
    [[0, 0], [0, 1], [0, 2]], // Rows
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]], // Columns
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]], // Diagonals
    [[0, 2], [1, 1], [2, 0]]
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
      gameActive = false;
      return board[a[0]][a[1]];
    }
  }

  if (board.flat().every(cell => cell !== '')) {
    gameActive = false;
    return 'Draw';
  }

  return null;
};

const updateStatus = () => {
  const winner = checkWinner();

  if (winner) {
    statusElement.textContent = winner === 'Draw' ? 'It\'s a Draw!' : `Player ${winner} wins!`;
  } else {
    statusElement.textContent = `Next player: ${currentPlayer}`;
  }
};

const handleClick = (row, col) => {
  if (!gameActive || board[row][col] !== '') {
    return;
  }

  board[row][col] = currentPlayer;
  updateStatus();

  if (!gameActive) {
    highlightWinnerCells();
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};


const resetGame = () => {
    currentPlayer = 'X';
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    gameActive = true;
    updateStatus();
    renderBoard();
  };

const highlightWinnerCells = () => {
  const winnerCells = checkWinnerCells();
  if (winnerCells) {
    winnerCells.forEach(cell => {
      const [row, col] = cell;
      const index = row * 3 + col;
      const cellElement = document.getElementById(`cell-${index}`);
      cellElement.classList.add('winner');
    });
  }
};

const checkWinnerCells = () => {
  const winPatterns = [
    [[0, 0], [0, 1], [0, 2]], // Rows
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]], // Columns
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]], // Diagonals
    [[0, 2], [1, 1], [2, 0]]
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
      return [a, b, c];
    }
  }

  return null;
};

const createBoard = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.id = `cell-${i * 3 + j}`;
      cell.onclick = () => handleClick(i, j);
      boardElement.appendChild(cell);
    }
  }
};

const renderBoard = () => {
    boardElement.innerHTML = ''; // Очистка доски перед отрисовкой
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${i * 3 + j}`;
        cell.onclick = () => handleClick(i, j);
  
        // Добавим содержимое (X или O) в ячейки
        if (board[i][j] === 'X') {
          const xSymbol = document.createElement('div');
          xSymbol.className = 'symbol';
          xSymbol.textContent = 'X';
          cell.appendChild(xSymbol);
        } else if (board[i][j] === 'O') {
          const oSymbol = document.createElement('div');
          oSymbol.className = 'symbol';
          oSymbol.textContent = 'O';
          cell.appendChild(oSymbol);
        }
  
        boardElement.appendChild(cell);
      }
    }
  };
createBoard();
updateStatus();
