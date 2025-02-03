'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as ts from 'typescript';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-dark.css';

// Interface definitions for our terminal
interface HistoryEntry {
  command: string;
  output: string;
  typeErrors?: string[];
  type?: string;
}

interface TypescriptEnvironment {
  files: Map<string, string>;
  compilerOptions: ts.CompilerOptions;
}

const createDefaultCompilerOptions = (): ts.CompilerOptions => ({
  strict: true,
  target: ts.ScriptTarget.ES2015,
  module: ts.ModuleKind.CommonJS,
  noImplicitAny: true,
  strictNullChecks: true,
  jsx: ts.JsxEmit.React,  // Enable JSX compilation
  jsxFactory: 'React.createElement',
  jsxFragmentFactory: 'React.Fragment',
});

export default function AdvancedTypeScriptTerminal(): JSX.Element {
  // State management
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [environment, setEnvironment] = useState<TypescriptEnvironment>({
    files: new Map([['index.tsx', '']]),
    compilerOptions: createDefaultCompilerOptions()
  });

  // Refs
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // TypeScript compilation and type checking
  const typeCheck = (code: string): { errors: string[], type?: string } => {
    const fileMap = new Map(environment.files);
    fileMap.set('index.tsx', code);  // Note: Changed to .tsx extension

    const compilerHost = ts.createCompilerHost(environment.compilerOptions);
    
    // Override compiler host methods for in-memory compilation
    const customHost: ts.CompilerHost = {
      ...compilerHost,
      getSourceFile: (fileName: string, languageVersion: ts.ScriptTarget) => {
        const source = fileMap.get(fileName);
        return source
          ? ts.createSourceFile(fileName, source, languageVersion)
          : undefined;
      },
      writeFile: () => {},
      getCurrentDirectory: () => '/',
      getDefaultLibFileName: () => 'lib.d.ts',
      fileExists: (fileName: string) => fileMap.has(fileName),
      readFile: (fileName: string) => fileMap.get(fileName),
    };

    // Create program with custom host
    const program = ts.createProgram(
      Array.from(fileMap.keys()),
      environment.compilerOptions,
      customHost
    );

    const diagnostics = ts.getPreEmitDiagnostics(program);
    
    // Get type information when possible
    let type: string | undefined;
    if (diagnostics.length === 0) {
      const checker = program.getTypeChecker();
      const sourceFile = program.getSourceFile('index.tsx');
      if (sourceFile) {
        const lastStatement = sourceFile.statements[sourceFile.statements.length - 1];
        if (lastStatement && ts.isExpressionStatement(lastStatement)) {
          const symbol = checker.getSymbolAtLocation(lastStatement.expression);
          if (symbol) {
            type = checker.typeToString(
              checker.getTypeOfSymbolAtLocation(symbol, lastStatement)
            );
          }
        }
      }
    }

    return {
      errors: diagnostics.map(diagnostic => {
        const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
        return `Type Error: ${message}`;
      }),
      type
    };
  };

  // Command execution with error handling
  const executeCommand = (command: string): void => {
    let output = '';
    let typeErrors: string[] = [];
    let type: string | undefined;

    try {
      const typeCheckResult = typeCheck(command);
      typeErrors = typeCheckResult.errors;
      type = typeCheckResult.type;

      if (typeErrors.length === 0) {
        if (command === 'clear') {
          setHistory([]);
          return;
        } else {
          const result = eval(command);
          output = String(result);
        }
      }
    } catch (error: any) {
      output = `Runtime Error: ${error.message}`;
    }

    setHistory(prev => [...prev, {
      command,
      output,
      typeErrors,
      type
    }]);
    
    setInput('');
    setHistoryIndex(-1);
  };

  // Keyboard event handling
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
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

  // Effects
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Render terminal UI
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div 
        className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm h-96 overflow-y-auto"
        ref={terminalRef}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="mb-4 text-white">
          TypeScript Terminal v2 - Now with type checking!
          <br />
          Try: let x: number = 5; or function add(a: number, b: number): number { return a + b; }
        </div>

        {history.map((entry, i) => (
          <div key={i} className="mb-4">
            <div className="flex">
              <span className="text-blue-400 mr-2">{'>'}</span>
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: highlight(entry.command, languages.typescript, 'typescript') 
                }} 
              />
            </div>
            
            {entry.type && (
              <div className="pl-4 text-blue-300">
                Type: {entry.type}
              </div>
            )}
            
            {entry.typeErrors && entry.typeErrors.map((error, j) => (
              <div key={j} className="pl-4 text-red-400">
                {error}
              </div>
            ))}
            
            {entry.output && (
              <div className="pl-4 text-yellow-300">
                {entry.output}
              </div>
            )}
          </div>
        ))}

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
}