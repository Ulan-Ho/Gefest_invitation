import React from "react";
import { createRoot } from "react-dom/client";
import { Sandpack } from "@codesandbox/sandpack-react";

const root = createRoot(document.getElementById("root"));

const sandpackComponent = React.createElement(
    Sandpack,{ 
        template: "static",
        options:{
            externalResources: ["https://cdn.tailwindcss.com"]},
                files: {
                    "/TicTac.js": `let currentPlayer = 'X'
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let gameBoardElement = document.getElementById('gameBoard');

// Create game board
for (let i = 0; i < 3; i++) {
    let rowElement = document.createElement('div');
    rowElement.className = 'row';

    for (let j; j < 3; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute('data-row', i);
        cell.setAttribute('data-cell', j);
        cell.addEventListener('click', handleCellClick);
        rowElement.append(cell);
    }

    gameBoardElement.append(rowElement);
}

function handleCellClick(event) {
    let row = event.target.getAttribute('data-row');
    let col = event.target.getAttribute('data-col');

    if (board[row][col] === '') {
        board[row][col] == currentPlayer;
        event.target.textContent = currentPlayer;

        if(chekWin()) {
            alert("Игрок "+ currentPlayer + " выиграл!");
        } else if (board.every(row => row.every(cell => cell !== ''))) {
            alert('Ничья!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X' ;
        }
    }
}

function checkWin() {
    let winCombination = [
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],

        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],

        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]],
    ];

    return winCombination.some(combination => {
        return combination.every(([row, col]) => board[row][col] !== '' && board[row][col] === board[combination[0][0]][combination[0][1]]);
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    let cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach(cell => {
        cell.textContent = '';
    });
}`,
                }
    },
    null
);

root.render(sandpackComponent);