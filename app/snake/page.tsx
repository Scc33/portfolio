"use client";
import React, { useState, useEffect } from "react";

type Direction = { x: number; y: number };
type Coordinate = { x: number; y: number };

export default function SnakeGame() {
  const gridSize = 30;
  const [gameState, setGameState] = useState<"idle" | "running" | "over">(
    "idle"
  );
  const [direction, setDirection] = useState<Direction>({ x: 0, y: 0 });
  const [snake, setSnake] = useState<Coordinate[]>([]);
  const [food, setFood] = useState<Coordinate | null>(null);

  const startGame = React.useCallback((): void => {
    setGameState("running");
    // Initialize the snake in the center
    const initialSnake: Coordinate[] = [
      { x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) }
    ];
    setSnake(initialSnake);
    // Random initial direction (up, left, or down)
    const directions: Direction[] = [
      { x: 0, y: -1 }, // Up
      { x: -1, y: 0 }, // Left
      { x: 0, y: 1 }, // Down
      { x: 1, y: 0 } // Right
    ];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    setDirection(randomDirection);
    // Place the first food
    placeFood(initialSnake);
  }, []);

  function placeFood(snake: Coordinate[]): void {
    let newFood: Coordinate;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize)
      };
      // Ensure food doesn't appear on the snake
      if (
        !snake.some(
          (segment) => segment.x === newFood.x && segment.y === newFood.y
        )
      ) {
        break;
      }
    }
    setFood(newFood);
  }

  const moveSnake = React.useCallback((): void => {
    const newHead: Coordinate = {
      x: snake[0].x + direction.x,
      y: snake[0].y + direction.y
    };

    // Check for wall collisions
    if (
      newHead.x < 0 ||
      newHead.x >= gridSize ||
      newHead.y < 0 ||
      newHead.y >= gridSize
    ) {
      setGameState("over");
      return;
    }

    // Check for self-collisions
    if (
      snake.some(
        (segment) => segment.x === newHead.x && segment.y === newHead.y
      )
    ) {
      setGameState("over");
      return;
    }

    const newSnake = [newHead, ...snake];

    // Check if food is eaten
    if (food && newHead.x === food.x && newHead.y === food.y) {
      placeFood(newSnake);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, gridSize]);

  useEffect(() => {
    if (gameState === "running") {
      const intervalId = setInterval(() => {
        moveSnake();
      }, 100); // Adjust speed here
      return () => clearInterval(intervalId);
    }
  }, [gameState, snake, direction, moveSnake]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.code === "Space") {
        if (gameState !== "running") {
          startGame();
        }
      } else if (gameState === "running") {
        switch (event.key.toLowerCase()) {
          case "w":
            if (direction.y !== 1) setDirection({ x: 0, y: -1 });
            break;
          case "a":
            if (direction.x !== 1) setDirection({ x: -1, y: 0 });
            break;
          case "s":
            if (direction.y !== -1) setDirection({ x: 0, y: 1 });
            break;
          case "d":
            if (direction.x !== -1) setDirection({ x: 1, y: 0 });
            break;
          default:
            break;
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, direction, startGame]);

  return (
    <div className="relative w-[600px] h-[600px] mx-auto my-5 bg-black border-2 border-white">
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`
        }}
      >
        {Array.from({ length: gridSize }).map((_, row) => (
          <div key={row} className="contents">
            {Array.from({ length: gridSize }).map((_, col) => {
              const isSnake = snake.some(
                (segment) => segment.x === col && segment.y === row
              );
              const isFood = food && food.x === col && food.y === row;
              return (
                <div
                  key={col}
                  className={`w-full h-full box-border ${
                    isSnake
                      ? "bg-green-400"
                      : isFood
                        ? "bg-orange-500"
                        : "bg-gray-900"
                  }`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      {gameState === "idle" && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl text-center">
          Press Space to Start
        </div>
      )}
      {gameState === "over" && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl text-center">
          Game Over! Press Space to Restart
        </div>
      )}
    </div>
  );
}
