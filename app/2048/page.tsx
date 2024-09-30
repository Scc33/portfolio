'use client';

import React, { useState, useEffect, useRef } from 'react';

const SnakeGame = () => {
  const BOARD_SIZE = 20;

  const [snake, setSnake] = useState([[10, 10]]);
  const [direction, setDirection] = useState([0, 0]);
  const [food, setFood] = useState([5, 5]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!started && e.code === 'Space') {
        // Start the game
        setStarted(true);
        setDirection([0, -1]); // Start moving upwards
        setGameOver(false);
        setScore(0);
        setSnake([[10, 10]]);
        setFood(generateFood());
      }
      if (gameOver && e.code === 'Space') {
        // Restart the game
        setStarted(true);
        setGameOver(false);
        setScore(0);
        setSnake([[10, 10]]);
        setDirection([0, -1]); // Start moving upwards
        setFood(generateFood());
      }
      if (started) {
        switch (e.key) {
          case 'ArrowUp':
          case 'w':
            if (direction[1] !== 1) setDirection([0, -1]);
            break;
          case 'ArrowDown':
          case 's':
            if (direction[1] !== -1) setDirection([0, 1]);
            break;
          case 'ArrowLeft':
          case 'a':
            if (direction[0] !== 1) setDirection([-1, 0]);
            break;
          case 'ArrowRight':
          case 'd':
            if (direction[0] !== -1) setDirection([1, 0]);
            break;
          default:
            break;
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, started, gameOver]);

  useEffect(() => {
    if (started && !gameOver) {
      intervalRef.current = setInterval(() => {
        moveSnake();
      }, 100); // Adjust speed here
      return () => clearInterval(intervalRef.current);
    }
  }, [started, gameOver, snake, direction]);

  const moveSnake = () => {
    setSnake((prevSnake) => {
      const newHead = [
        prevSnake[0][0] + direction[0],
        prevSnake[0][1] + direction[1],
      ];
      // Check for collisions
      if (
        newHead[0] < 0 ||
        newHead[0] >= BOARD_SIZE ||
        newHead[1] < 0 ||
        newHead[1] >= BOARD_SIZE ||
        prevSnake.some(
          (segment) => segment[0] === newHead[0] && segment[1] === newHead[1]
        )
      ) {
        setGameOver(true);
        setStarted(false);
        return prevSnake;
      }
      let newSnake = [newHead, ...prevSnake];
      // Check for food
      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        setScore((prevScore) => prevScore + 1);
        setFood(generateFood(newSnake));
      } else {
        newSnake.pop();
      }
      return newSnake;
    });
  };

  const generateFood = (snakePositions = snake) => {
    let newFood;
    while (true) {
      newFood = [
        Math.floor(Math.random() * BOARD_SIZE),
        Math.floor(Math.random() * BOARD_SIZE),
      ];
      // Ensure the food is not placed on the snake
      if (
        !snakePositions.some(
          (segment) => segment[0] === newFood[0] && segment[1] === newFood[1]
        )
      ) {
        break;
      }
    }
    return newFood;
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      padding: '20px',
    },
    score: {
      fontSize: '24px',
      margin: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    board: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#333',
      border: '2px solid #000',
    },
    row: {
      display: 'flex',
    },
    cell: {
      width: '30px',
      height: '30px',
      boxSizing: 'border-box',
      border: '1px solid #555',
    },
    snake: {
      backgroundColor: '#7FFF00',
    },
    food: {
      backgroundColor: '#FF4500',
    },
    gameOver: {
      marginTop: '20px',
      fontSize: '24px',
      color: 'red',
      fontWeight: 'bold',
    },
    startMessage: {
      marginTop: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.score}>Score: {score}</div>
      <div style={styles.board}>
        {[...Array(BOARD_SIZE)].map((_, row) => (
          <div key={row} style={styles.row}>
            {[...Array(BOARD_SIZE)].map((_, col) => {
              const isSnake = snake.some(
                (segment) => segment[0] === col && segment[1] === row
              );
              const isFood = food[0] === col && food[1] === row;
              return (
                <div
                  key={col}
                  style={{
                    ...styles.cell,
                    ...(isSnake ? styles.snake : {}),
                    ...(isFood ? styles.food : {}),
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      {gameOver && (
        <div style={styles.gameOver}>Game Over! Press Space to Restart</div>
      )}
      {!started && !gameOver && (
        <div style={styles.startMessage}>Press Space to Start</div>
      )}
    </div>
  );
};

export default SnakeGame;
