'use client';

import React, { useState, useEffect } from 'react';

type Player = 'X' | 'O' | null;

interface Score {
  X: number;
  O: number;
}

interface TicTacToeProps {
  boardSize?: 3 | 4 | 5;
}

const TicTacToe: React.FC<TicTacToeProps> = ({ boardSize = 3 }) => {
  const WIN_CONDITION = boardSize === 5 ? 4 : boardSize; // Win condition adjusts based on board size
  const [board, setBoard] = useState<Player[][]>(createEmptyBoard(boardSize));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
  const [score, setScore] = useState<Score>({ X: 0, O: 0 });
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  function createEmptyBoard(size: number): Player[][] {
    return Array.from({ length: size }, () => Array(size).fill(null));
  }

  const initializeGame = (): void => {
    setBoard(createEmptyBoard(boardSize));
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

  function checkWinner(board: Player[][]): Player | 'Draw' | null {
    // Check rows, columns, and diagonals for a win
    const lines = getAllLines(board);

    for (const line of lines) {
      const winner = checkLineForWin(line);
      if (winner) return winner;
    }

    // Check for Draw
    if (board.every((row) => row.every((cell) => cell !== null))) {
      return 'Draw';
    }

    return null;
  }

  function getAllLines(board: Player[][]): Player[][] {
    const size = board.length;
    const lines: Player[][] = [];

    // Rows and Columns
    for (let i = 0; i < size; i++) {
      lines.push(board[i]); // Row
      lines.push(board.map((row) => row[i])); // Column
    }

    // Diagonals
    lines.push(board.map((row, idx) => row[idx])); // Top-left to bottom-right
    lines.push(board.map((row, idx) => row[size - idx - 1])); // Top-right to bottom-left

    // Additional diagonals for larger boards (only for WIN_CONDITION less than board size)
    if (WIN_CONDITION < size) {
      for (let row = 0; row <= size - WIN_CONDITION; row++) {
        for (let col = 0; col <= size - WIN_CONDITION; col++) {
          // Diagonals from each starting point
          const diag1: Player[] = []; // <-- Explicitly typed as Player[]
          const diag2: Player[] = []; // <-- Explicitly typed as Player[]
          for (let i = 0; i < WIN_CONDITION; i++) {
            diag1.push(board[row + i][col + i]);
            diag2.push(board[row + WIN_CONDITION - 1 - i][col + i]);
          }
          lines.push(diag1);
          lines.push(diag2);
        }
      }
    }

    return lines;
  }

  function checkLineForWin(line: Player[]): Player | null {
    for (let i = 0; i <= line.length - WIN_CONDITION; i++) {
      const segment = line.slice(i, i + WIN_CONDITION);
      if (segment.every((cell) => cell === 'X')) return 'X';
      if (segment.every((cell) => cell === 'O')) return 'O';
    }
    return null;
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === ' ' || event.code === 'Space') {
        initializeGame();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [boardSize]);

  // Adjust styles based on board size
  const cellSize = Math.max(100 - (boardSize - 3) * 20, 60); // Decrease cell size for larger boards
  const styles = getStyles(cellSize);

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
              It&apos;s a Draw! Press Space to Restart
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

// Function to generate styles based on cell size
function getStyles(cellSize: number): { [key: string]: React.CSSProperties } {
  return {
    container: {
      textAlign: 'center',
      marginTop: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    score: {
      fontSize: '36px',
      marginBottom: '20px',
      color: '#fff', // White score color
    },
    message: {
      fontSize: '24px',
      color: '#fff', // White message color
      marginBottom: '10px',
    },
    board: {
      display: 'inline-block',
      backgroundColor: '#000', // Set the board background to black
      padding: '10px',
      borderRadius: '10px',
    },
    row: {
      display: 'flex',
    },
    cell: {
      width: `${cellSize}px`,
      height: `${cellSize}px`,
      backgroundColor: '#fff', // White cell background
      margin: '5px',
      borderRadius: '10px',
      fontSize: `${cellSize * 0.6}px`,
      fontWeight: 'bold',
      lineHeight: `${cellSize}px`,
      textAlign: 'center',
      cursor: 'pointer',
      userSelect: 'none',
      color: '#000', // Black text for X and O
    },
  };
}

export default TicTacToe;
