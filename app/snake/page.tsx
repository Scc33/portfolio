"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "../snippets/components/nav";
import Footer from "../components/Footer";

export default function SnakeGame() {
    const gridSize = 30;
    const [gameState, setGameState] = useState("idle"); // 'idle', 'running', 'over'
    const [direction, setDirection] = useState({ x: 0, y: 0 });
    const [snake, setSnake] = useState([]);
    const [food, setFood] = useState(null);

    function startGame() {
        setGameState("running");
        // Initialize the snake in the center
        const initialSnake = [
            { x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) }
        ];
        setSnake(initialSnake);
        // Random initial direction (up, left, or down)
        const directions = [
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
    }

    function placeFood(snake) {
        let newFood;
        while (true) {
            newFood = {
                x: Math.floor(Math.random() * gridSize),
                y: Math.floor(Math.random() * gridSize)
            };
            // Ensure food doesn't appear on the snake
            if (
                !snake.some(
                    (segment) =>
                        segment.x === newFood.x && segment.y === newFood.y
                )
            ) {
                break;
            }
        }
        setFood(newFood);
    }

    function moveSnake() {
        const newHead = {
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

        let newSnake = [newHead, ...snake];

        // Check if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
            placeFood(newSnake);
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    }

    useEffect(() => {
        if (gameState === "running") {
            const intervalId = setInterval(() => {
                moveSnake();
            }, 100); // Adjust speed here
            return () => clearInterval(intervalId);
        }
    }, [gameState, snake, direction]);

    useEffect(() => {
        function handleKeyDown(event) {
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
    }, [gameState, direction]);

    return (
        <>
            <div className="game-container">
                <div className="grid">
                    {Array.from({ length: gridSize }).map((_, row) => (
                        <div key={row} className="row">
                            {Array.from({ length: gridSize }).map((_, col) => {
                                const isSnake = snake.some(
                                    (segment) =>
                                        segment.x === col && segment.y === row
                                );
                                const isFood =
                                    food && food.x === col && food.y === row;
                                return (
                                    <div
                                        key={col}
                                        className={`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
                                    ></div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                {gameState === "idle" && (
                    <div className="overlay">Press Space to Start</div>
                )}
                {gameState === "over" && (
                    <div className="overlay">
                        Game Over! Press Space to Restart
                    </div>
                )}
            </div>
            <style jsx>{`
                .game-container {
                    position: relative;
                    width: 600px;
                    height: 600px;
                    margin: 20px auto;
                    background: #000;
                    border: 2px solid #fff;
                }
                .grid {
                    display: grid;
                    grid-template-rows: repeat(${gridSize}, 1fr);
                    grid-template-columns: repeat(${gridSize}, 1fr);
                    width: 100%;
                    height: 100%;
                }
                .cell {
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                }
                .cell:not(.snake):not(.food) {
                    background: #111;
                }
                .snake {
                    background: #7cfc00;
                }
                .food {
                    background: #ff4500;
                }
                .overlay {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: #fff;
                    font-size: 2em;
                    text-align: center;
                }
                .row {
                    display: contents;
                }
            `}</style>
        </>
    );
}
