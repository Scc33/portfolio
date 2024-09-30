'use client';

import React, { useState, useEffect } from 'react';

const TILE_COUNT = 4;

const createEmptyBoard = () => {
  return Array.from({ length: TILE_COUNT }, () => Array(TILE_COUNT).fill(0));
};

const getRandomTileValue = () => (Math.random() < 0.9 ? 2 : 4);

const getEmptyPositions = (board) => {
  const emptyPositions = [];
  board.forEach((row, rowIndex) =>
    row.forEach((value, colIndex) => {
      if (value === 0) emptyPositions.push({ row: rowIndex, col: colIndex });
    })
  );
  return emptyPositions;
};

const addRandomTile = (board) => {
  const emptyPositions = getEmptyPositions(board);
  if (emptyPositions.length === 0) return board;
  const { row, col } = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
  board[row][col] = getRandomTileValue();
  return board;
};

const canMove = (board) => {
  for (let row = 0; row < TILE_COUNT; row++) {
    for (let col = 0; col < TILE_COUNT; col++) {
      if (board[row][col] === 0) return true;
      if (col < TILE_COUNT - 1 && board[row][col] === board[row][col + 1]) return true;
      if (row < TILE_COUNT - 1 && board[row][col] === board[row + 1][col]) return true;
    }
  }
  return false;
};

const transpose = (board) => {
  return board[0].map((_, colIndex) => board.map((row) => row[colIndex]));
};

const reverseRows = (board) => {
  return board.map((row) => row.reverse());
};

const mergeRow = (row, setScore) => {
  const nonZeroTiles = row.filter((val) => val !== 0);
  const mergedRow = [];
  let skip = false;
  for (let i = 0; i < nonZeroTiles.length; i++) {
    if (skip) {
      skip = false;
      continue;
    }
    if (nonZeroTiles[i] === nonZeroTiles[i + 1]) {
      const mergedValue = nonZeroTiles[i] * 2;
      mergedRow.push(mergedValue);
      setScore((prevScore) => prevScore + mergedValue);
      skip = true;
    } else {
      mergedRow.push(nonZeroTiles[i]);
    }
  }
  while (mergedRow.length < TILE_COUNT) {
    mergedRow.push(0);
  }
  return mergedRow;
};

const Game2048 = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const initializeGame = () => {
    let newBoard = createEmptyBoard();
    newBoard = addRandomTile(newBoard);
    newBoard = addRandomTile(newBoard);
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
  };

  const handleMove = (direction) => {
    if (gameOver) return;
    let rotatedBoard;
    let moved = false;

    const move = (b) => {
      return b.map((row) => mergeRow(row, setScore));
    };

    switch (direction) {
      case 'up':
        rotatedBoard = transpose(board);
        rotatedBoard = move(rotatedBoard);
        rotatedBoard = transpose(rotatedBoard);
        break;
      case 'down':
        rotatedBoard = transpose(board);
        rotatedBoard = reverseRows(rotatedBoard);
        rotatedBoard = move(rotatedBoard);
        rotatedBoard = reverseRows(rotatedBoard);
        rotatedBoard = transpose(rotatedBoard);
        break;
      case 'left':
        rotatedBoard = move(board);
        break;
      case 'right':
        rotatedBoard = reverseRows(board);
        rotatedBoard = move(rotatedBoard);
        rotatedBoard = reverseRows(rotatedBoard);
        break;
      default:
        return;
    }

    if (JSON.stringify(board) !== JSON.stringify(rotatedBoard)) {
      moved = true;
    }

    if (moved) {
      rotatedBoard = addRandomTile(rotatedBoard);
      setBoard(rotatedBoard);
      if (!canMove(rotatedBoard)) {
        setGameOver(true);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ' || event.code === 'Space') {
        initializeGame();
      } else if (['ArrowUp', 'w', 'W'].includes(event.key)) {
        handleMove('up');
      } else if (['ArrowDown', 's', 'S'].includes(event.key)) {
        handleMove('down');
      } else if (['ArrowLeft', 'a', 'A'].includes(event.key)) {
        handleMove('left');
      } else if (['ArrowRight', 'd', 'D'].includes(event.key)) {
        handleMove('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [board, gameOver]);

  useEffect(() => {
    // Initialize the game when the component mounts
    initializeGame();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.score}>Score: {score}</h1>
      {gameOver && <div style={styles.gameOver}>Game Over! Press Space to Restart</div>}
      <div style={styles.board}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.row}>
            {row.map((value, colIndex) => (
              <div key={colIndex} style={{ ...styles.cell, ...styles[`tile${value}`] }}>
                {value !== 0 ? value : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  score: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#776e65',
  },
  gameOver: {
    fontSize: '24px',
    color: 'red',
    marginBottom: '10px',
  },
  board: {
    display: 'inline-block',
    backgroundColor: '#bbada0',
    padding: '15px',
    borderRadius: '10px',
  },
  row: {
    display: 'flex',
  },
  cell: {
    width: '100px',
    height: '100px',
    backgroundColor: '#cdc1b4',
    margin: '5px',
    borderRadius: '10px',
    fontSize: '45px',
    fontWeight: 'bold',
    lineHeight: '100px',
    textAlign: 'center',
    color: '#776e65',
  },
  tile0: {
    backgroundColor: '#cdc1b4',
  },
  tile2: {
    backgroundColor: '#eee4da',
  },
  tile4: {
    backgroundColor: '#ede0c8',
  },
  tile8: {
    backgroundColor: '#f2b179',
    color: '#f9f6f2',
  },
  tile16: {
    backgroundColor: '#f59563',
    color: '#f9f6f2',
  },
  tile32: {
    backgroundColor: '#f67c5f',
    color: '#f9f6f2',
  },
  tile64: {
    backgroundColor: '#f65e3b',
    color: '#f9f6f2',
  },
  tile128: {
    backgroundColor: '#edcf72',
    color: '#f9f6f2',
    fontSize: '40px',
  },
  tile256: {
    backgroundColor: '#edcc61',
    color: '#f9f6f2',
    fontSize: '40px',
  },
  tile512: {
    backgroundColor: '#edc850',
    color: '#f9f6f2',
    fontSize: '40px',
  },
  tile1024: {
    backgroundColor: '#edc53f',
    color: '#f9f6f2',
    fontSize: '35px',
  },
  tile2048: {
    backgroundColor: '#edc22e',
    color: '#f9f6f2',
    fontSize: '35px',
  },
};

export default Game2048;
