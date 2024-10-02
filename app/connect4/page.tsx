'use client';

import React, { useState, useEffect } from 'react';

const ROWS = 6;
const COLS = 7;

type CellType = 'Red' | 'Yellow' | null;
type PlayerType = 'Red' | 'Yellow';

const Connect4Game: React.FC = () => {
  const initializeBoard = () => {
    return Array(ROWS)
      .fill(null)
      .map(() => Array(COLS).fill(null));
  };

  const [board, setBoard] = useState<CellType[][]>(initializeBoard());
  const [currentPlayer, setCurrentPlayer] = useState<PlayerType>('Red');
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [winner, setWinner] = useState<PlayerType | 'Draw' | null>(null);
  const [score, setScore] = useState<{ Red: number; Yellow: number }>({
    Red: 0,
    Yellow: 0,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        startGame();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const startGame = () => {
    setBoard(initializeBoard());
    setCurrentPlayer('Red');
    setGameActive(true);
    setWinner(null);
  };

  const handleClick = (colIndex: number) => {
    if (!gameActive || winner) return;

    for (let row = ROWS - 1; row >= 0; row--) {
      if (!board[row][colIndex]) {
        const newBoard = board.map((row) => [...row]);
        newBoard[row][colIndex] = currentPlayer;
        setBoard(newBoard);

        if (checkWin(newBoard, row, colIndex, currentPlayer)) {
          setWinner(currentPlayer);
          setGameActive(false);
          setScore((prevScore) => ({
            ...prevScore,
            [currentPlayer]: prevScore[currentPlayer] + 1,
          }));
        } else if (isBoardFull(newBoard)) {
          setWinner('Draw');
          setGameActive(false);
        } else {
          setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
        }

        break;
      }
    }
  };

  const isBoardFull = (board: CellType[][]) => {
    return board.every((row) => row.every((cell) => cell !== null));
  };

  const checkWin = (
    board: CellType[][],
    row: number,
    col: number,
    player: PlayerType
  ) => {
    return (
      checkDirection(board, row, col, 0, 1, player) +
        checkDirection(board, row, col, 0, -1, player) >=
        3 ||
      checkDirection(board, row, col, 1, 0, player) +
        checkDirection(board, row, col, -1, 0, player) >=
        3 ||
      checkDirection(board, row, col, 1, 1, player) +
        checkDirection(board, row, col, -1, -1, player) >=
        3 ||
      checkDirection(board, row, col, 1, -1, player) +
        checkDirection(board, row, col, -1, 1, player) >=
        3
    );
  };

  const checkDirection = (
    board: CellType[][],
    row: number,
    col: number,
    rowDir: number,
    colDir: number,
    player: PlayerType
  ): number => {
    let count = 0;
    let r = row + rowDir;
    let c = col + colDir;
    while (
      r >= 0 &&
      r < ROWS &&
      c >= 0 &&
      c < COLS &&
      board[r][c] === player
    ) {
      count++;
      r += rowDir;
      c += colDir;
    }
    return count;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.score}>
        Score - Red: {score.Red} | Yellow: {score.Yellow}
      </h1>
      <div style={styles.board}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                style={styles.cell}
                onClick={() => handleClick(colIndex)}
              >
                <div
                  style={{
                    ...styles.disc,
                    backgroundColor: cell ? cell.toLowerCase() : 'white',
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={styles.message}>
        {!gameActive && !winner && (
          <p style={styles.instruction}>Press Space to Start</p>
        )}
        {gameActive && !winner && (
          <p style={styles.turn}>{currentPlayer}&apos;s Turn</p>
        )}
        {winner && winner !== 'Draw' && (
          <p style={styles.winner}>{winner} Wins!</p>
        )}
        {winner === 'Draw' && <p style={styles.winner}>It&apos;s a Draw!</p>}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  board: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: 'blue',
    padding: '10px',
    borderRadius: '10px',
  },
  row: {
    display: 'flex',
  },
  cell: {
    width: '80px',
    height: '80px',
    margin: '5px',
    backgroundColor: 'darkblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50%',
  },
  disc: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: 'white',
  },
  message: {
    marginTop: '20px',
  },
  instruction: {
    fontSize: '24px',
  },
  turn: {
    fontSize: '24px',
  },
  winner: {
    fontSize: '32px',
    fontWeight: 'bold' as const,
  },
};

export default Connect4Game;
