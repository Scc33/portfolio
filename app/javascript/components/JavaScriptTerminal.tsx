"use client";

import React, { useState, useRef, useEffect } from "react";

interface HistoryEntry {
  command: string;
  output: string;
}

export function JavaScriptTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const contextRef = useRef<Record<string, unknown>>({});

  const executeCommand = (command: string): void => {
    if (command === "clear") {
      setHistory([]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    if (command === "vars") {
      const output = JSON.stringify(contextRef.current, null, 2);
      setHistory((prev) => [...prev, { command, output }]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    let output: string;
    try {
      // First, attempt to execute the code and capture its result
      const evalFn = new Function(
        "context",
        `with (context) {
          try {
            const result = eval(${JSON.stringify(command)});
            // Handle assignments by checking if the command contains an equals sign
            if (${JSON.stringify(command)}.includes('=')) {
              const varName = ${JSON.stringify(command)}.split('=')[0].trim();
              if (!varName.includes('.')) {  // Only store top-level variables
                context[varName] = result;
              }
            }
            return result;
          } catch (e) {
            // If direct eval fails, try wrapping in parentheses for expressions
            return eval("(" + ${JSON.stringify(command)} + ")");
          }
        }`
      );

      const result = evalFn(contextRef.current);
      output = result !== undefined ? String(result) : "undefined";
    } catch (error: unknown) {
      // If both attempts fail, it's an error
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      output = `Error: ${errorMessage}`;
    }

    setHistory((prev) => [...prev, { command, output }]);
    setInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && input.trim()) {
      executeCommand(input.trim());
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex].command);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex].command);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div
        className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm h-96 overflow-y-auto"
        ref={terminalRef}
        onClick={() => inputRef.current?.focus()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.focus();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Click or press Enter to focus the terminal input"
      >
        <div className="mb-4 text-white">
          JavaScript Terminal
          <br />
          Type &apos;vars&apos; to see all defined variables. Type
          &apos;clear&apos; to reset.
        </div>

        {history.map((entry, i) => (
          <div key={i} className="mb-4">
            <div className="flex">
              <span className="text-blue-400 mr-2">&gt;</span>
              <div>{entry.command}</div>
            </div>
            <div className="pl-4 text-yellow-300">{entry.output}</div>
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-blue-400 mr-2">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-hidden"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
