import React from "react";
import { createRoot } from "react-dom/client";
import { Sandpack } from "@codesandbox/sandpack-react";

const root = createRoot(document.getElementById("root"));
const sandpackComponent = React.createElement(
Sandpack,
{ template: "react",
files:{
    "/FirstGame.js": `import React, { useState } from 'react';

    const Board = ({ squares, onClick }) => {
      const renderSquare = (index) => {
        return <button className="square" onClick={() => onClick(index)}>{squares[index]}</button>;
      };
    
      return (
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
    };
    
    const GameBoard = () => {
      const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
      const [stepNumber, setStepNumber] = useState(0);
      const [isXNext, setIsXNext] = useState(true);
    
      const current = history[stepNumber];
      const winner = calculateWinner(current.squares);
      const status = winner
        ? "Winner: " + winner
        : "Next player:" + isXNext ? 'X' : 'O';
    
      const handleClick = (index) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.slice();
    
        if (squares[index] || winner) {
          return;
        }
    
        squares[index] = isXNext ? 'X' : 'O';
        setHistory(newHistory.concat([{ squares }]));
        setStepNumber(newHistory.length);
        setIsXNext(!isXNext);
      };
    
      const jumpTo = (step) => {
        setStepNumber(step);
        setIsXNext(step % 2 === 0);
      };
    
      return (
        <div>
          <div className="status">{status}</div>
          <Board squares={current.squares} onClick={(index) => handleClick(index)} />
          <div className="game-info">
            <ol>
              {history.map((step, move) => (
                <li key={move}>
                  <button onClick={() => jumpTo(move)}>
                    {move === 0 ? 'Go to game start' : "Go to move #"+move}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      );
    };
    
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
    
      return null;
    };
    
    export default GameBoard;
    `}},
null
);
root.render(sandpackComponent);