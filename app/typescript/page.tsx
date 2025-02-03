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

const AdvancedTypeScriptTerminal = () => {
  // State management
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [environment, setEnvironment] = useState<TypescriptEnvironment>({
    files: new Map([['index.ts', '']]),
    compilerOptions: {
      strict: true,
      target: ts.ScriptTarget.ES2015,
      module: ts.ModuleKind.CommonJS,
      noImplicitAny: true,
      strictNullChecks: true,
    }
  });

  // Refs
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // TypeScript compilation and type checking
  const typeCheck = (code: string): { errors: string[], type?: string } => {
    // Create a virtual file system for TypeScript
    const fileMap = new Map(environment.files);
    fileMap.set('index.ts', code);

    // Create the TypeScript compiler host
    const compilerHost = {
      getSourceFile: (fileName: string) => {
        const source = fileMap.get(fileName);
        return source
          ? ts.createSourceFile(fileName, source, environment.compilerOptions.target!)
          : undefined;
      },
      writeFile: () => {},
      getCurrentDirectory: () => '/',
      getCanonicalFileName: (fileName: string) => fileName,
      useCaseSensitiveFileNames: () => true,
      getNewLine: () => '\n',
      fileExists: (fileName: string) => fileMap.has(fileName),
      readFile: (fileName: string) => fileMap.get(fileName),
      getDefaultLibFileName: () => 'lib.d.ts',
    };

    // Create and run the program
    const program = ts.createProgram(
      Array.from(fileMap.keys()),
      environment.compilerOptions,
      compilerHost
    );

    // Get diagnostics
    const diagnostics = ts.getPreEmitDiagnostics(program);
    
    // Get type information
    let type: string | undefined;
    if (diagnostics.length === 0) {
      const checker = program.getTypeChecker();
      const sourceFile = program.getSourceFile('index.ts');
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

  // Syntax highlighting
  const highlightCode = (code: string): string => {
    return highlight(code, languages.typescript, 'typescript');
  };

  // Command execution
  const executeCommand = (command: string) => {
    let output = '';
    let typeErrors: string[] = [];
    let type: string | undefined;

    try {
      // Type check the command
      const typeCheckResult = typeCheck(command);
      typeErrors = typeCheckResult.errors;
      type = typeCheckResult.type;

      if (typeErrors.length === 0) {
        // Only execute if no type errors
        if (command === 'clear') {
          setHistory([]);
          return;
        } else {
          // Evaluate the command
          const result = eval(command);
          output = String(result);
        }
      }
    } catch (error) {
      output = `Runtime Error: ${error.message}`;
    }

    // Update history with syntax-highlighted command and results
    setHistory(prev => [...prev, {
      command: command,
      output,
      typeErrors,
      type
    }]);
    
    setInput('');
    setHistoryIndex(-1);
  };

  // Keyboard event handling
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

  // Auto-scroll effect
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Auto-focus effect
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div 
        className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm h-96 overflow-y-auto"
        ref={terminalRef}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal header */}
        <div className="mb-4 text-white">
          TypeScript Terminal v2 - Now with type checking!
          <br />
          Try: let x: number = 5; or function add(a: number, b: number): number { return a + b; }
        </div>

        {/* Command history */}
        {history.map((entry, i) => (
          <div key={i} className="mb-4">
            {/* Command with syntax highlighting */}
            <div className="flex">
              <span className="text-blue-400 mr-2">{'>'}</span>
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: highlightCode(entry.command) 
                }} 
              />
            </div>
            
            {/* Type information */}
            {entry.type && (
              <div className="pl-4 text-blue-300">
                Type: {entry.type}
              </div>
            )}
            
            {/* Type errors */}
            {entry.typeErrors && entry.typeErrors.map((error, j) => (
              <div key={j} className="pl-4 text-red-400">
                {error}
              </div>
            ))}
            
            {/* Command output */}
            {entry.output && (
              <div className="pl-4 text-yellow-300">
                {entry.output}
              </div>
            )}
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

export default AdvancedTypeScriptTerminal;