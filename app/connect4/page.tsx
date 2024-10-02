'use client';

import React, { useState, useEffect } from 'react';

const TicTacToeGame: React.FC = () => {
  const BOARD_SIZE = 3;
  const INITIAL_BOARD = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));

  const [gameStarted, setGameStarted] = useState(false);
  const [board, setBoard] = useState<string[][]>(INITIAL_BOARD);
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [score, setScore] = useState<{ X: number; O: number }>({ X: 0, O: 0 });
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        startGame();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const startGame = () => {
    setBoard(INITIAL_BOARD);
    setCurrentPlayer('X');
    setGameStarted(true);
    setMessage('');
  };

  const handleClick = (row: number, col: number) => {
    if (!gameStarted || board[row][col]) return;

    const newBoard = board.map((boardRow, i) =>
      boardRow.map((cell, j) => (i === row && j === col ? currentPlayer : cell))
    );

    setBoard(newBoard);

    if (checkWin(newBoard, currentPlayer)) {
      setScore({ ...score, [currentPlayer]: score[currentPlayer] + 1 });
      setMessage(`Player ${currentPlayer} wins! Press Space to restart.`);
      setGameStarted(false);
    } else if (newBoard.flat().every((cell) => cell)) {
      setMessage("It's a tie! Press Space to restart.");
      setGameStarted(false);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWin = (board: string[][], player: 'X' | 'O') => {
    // Check rows and columns
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (
        board[i].every((cell) => cell === player) ||
        board.map((row) => row[i]).every((cell) => cell === player)
      ) {
        return true;
      }
    }

    // Check diagonals
    if (
      board.every((row, idx) => row[idx] === player) ||
      board.every((row, idx) => row[BOARD_SIZE - idx - 1] === player)
    ) {
      return true;
    }

    return false;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.score}>
        Score - X: {score.X} | O: {score.O}
      </h1>
      <div style={styles.board}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                style={styles.cell}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      {message && <h2 style={styles.message}>{message}</h2>}
      {!gameStarted && (
        <h2 style={styles.startMessage}>Press Space to Start/Restart the Game</h2>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  board: {
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridGap: '5px',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '5px',
  },
  cell: {
    width: '100px',
    height: '100px',
    backgroundColor: '#222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
  },
  startMessage: {
    marginTop: '20px',
    color: '#0f0',
  },
};

export default TicTacToeGame;
