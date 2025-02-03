"use client";
import React, { useState, useRef, useEffect } from 'react';

// TypeScript interface for our command history
interface HistoryEntry {
  command: string;
  output: string;
}

export default function Typescript(): JSX.Element {
    // State management for terminal
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  // Reference to maintain scroll position
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Typescript environment setup
  const tsEnvironment = {
    variables: new Map<string, any>(),
    functions: new Map<string, Function>(),
  };

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when component mounts or terminal is clicked
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle command execution
  const executeCommand = (command: string) => {
    let output = '';
    
    try {
      // Simple command parser
      if (command.startsWith('let ') || command.startsWith('const ')) {
        // Variable declaration
        const match = command.match(/^(let|const)\s+(\w+)\s*=\s*(.+)$/);
        if (match) {
          const [, declarationType, varName, value] = match;
          const evaluatedValue = eval(value);
          tsEnvironment.variables.set(varName, evaluatedValue);
          output = `${varName} = ${evaluatedValue}`;
        }
      } else if (command.startsWith('function ')) {
        // Function declaration
        const match = command.match(/^function\s+(\w+)\s*\((.*?)\)\s*{([\s\S]*)}$/);
        if (match) {
          const [, funcName, params, body] = match;
          const func = new Function(...params.split(','), body);
          tsEnvironment.functions.set(funcName, func);
          output = `Function ${funcName} defined`;
        }
      } else if (command === 'clear') {
        setHistory([]);
        return;
      } else {
        // Evaluate expression
        const result = eval(command);
        output = String(result);
      }
    } catch (error) {
      output = `Error: ${error.message}`;
    }

    setHistory(prev => [...prev, { command, output }]);
    setInput('');
    setHistoryIndex(-1);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      executeCommand(input.trim());
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex].command);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex].command);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div 
        className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm h-96 overflow-y-auto"
        ref={terminalRef}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal header */}
        <div className="mb-4 text-white">
          TypeScript Terminal - Type your commands below
          <br />
          Try: let x = 5; or function add(a, b) { return a + b; }
        </div>

        {/* Command history */}
        {history.map((entry, i) => (
          <div key={i} className="mb-2">
            <div className="flex">
              <span className="text-blue-400 mr-2">{'>'}</span>
              <span>{entry.command}</span>
            </div>
            <div className="pl-4 text-yellow-300">{entry.output}</div>
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center">
          <span className="text-blue-400 mr-2">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
};
