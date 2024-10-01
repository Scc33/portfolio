'use client';

import React, { useState, useEffect } from 'react';

type Player = 'X' | 'O' | null;

interface Score {
  X: number;
  O: number;
}

const BOARD_SIZE = 3; // Change this to 4 or 5 for larger boards

const createEmptyBoard = (): Player[][] => {
  return Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null));
};

const checkWinner = (board: Player[][]): Player | 'Draw' | null => {
  const lines: Player[][] = [];

  // Rows and Columns
  for (let i = 0; i < BOARD_SIZE; i++) {
    lines.push(board[i]); // rows
    lines.push(board.map((row) => row[i])); // columns
  }

  // Diagonals
  lines.push(board.map((row, idx) => row[idx])); // top-left to bottom-right
  lines.push(board.map((row, idx) => row[BOARD_SIZE - idx - 1])); // top-right to bottom-left

  for (const line of lines) {
    if (line.every((cell) => cell === 'X')) return 'X';
    if (line.every((cell) => cell === 'O')) return 'O';
  }

  // Check for Draw
  if (board.every((row) => row.every((cell) => cell !== null))) {
    return 'Draw';
  }

  return null;
};

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[][]>(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
  const [score, setScore] = useState<Score>({ X: 0, O: 0 });
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const initializeGame = (): void => {
    setBoard(createEmptyBoard());
    setCurrentPlayer('X');
    setWinner(null);
    setGameStarted(true);
  };

  const handleCellClick = (rowIndex: number, colIndex: number): void => {
    if (!gameStarted || winner || board[rowIndex][colIndex]) return;

    const newBoard = board.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        if (rIdx === rowIndex && cIdx === colIndex) {
          return currentPlayer;
        }
        return cell;
      })
    );

    setBoard(newBoard);

    const gameResult = checkWinner(newBoard);
    if (gameResult) {
      setWinner(gameResult);
      if (gameResult === 'X' || gameResult === 'O') {
        setScore((prevScore) => ({
          ...prevScore,
          [gameResult]: prevScore[gameResult] + 1,
        }));
      }
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === ' ' || event.code === 'Space') {
        initializeGame();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.score}>
        Score - X: {score.X} | O: {score.O}
      </h1>
      {!gameStarted && (
        <div style={styles.message}>Press Space to Start the Game</div>
      )}
      {gameStarted && (
        <>
          {winner && winner !== 'Draw' && (
            <div style={styles.message}>
              Player {winner} Wins! Press Space to Restart
            </div>
          )}
          {winner === 'Draw' && (
            <div style={styles.message}>
              It's a Draw! Press Space to Restart
            </div>
          )}
          <div style={styles.board}>
            {board.map((row, rowIndex) => (
              <div key={rowIndex} style={styles.row}>
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    style={styles.cell}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {!winner && (
            <div style={styles.message}>
              Current Player: {currentPlayer}
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Inline CSS styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  score: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#333',
  },
  message: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  board: {
    display: 'inline-block',
    backgroundColor: '#444',
    padding: '10px',
    borderRadius: '10px',
  },
  row: {
    display: 'flex',
  },
  cell: {
    width: '100px',
    height: '100px',
    backgroundColor: '#fff',
    margin: '5px',
    borderRadius: '10px',
    fontSize: '60px',
    fontWeight: 'bold',
    lineHeight: '100px',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
  },
};

export default TicTacToe;
