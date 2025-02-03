"use client";

import React, { useState, useRef, useEffect } from "react";
import * as ts from "typescript";

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
    jsx: ts.JsxEmit.React,
    jsxFactory: "React.createElement",
    jsxFragmentFactory: "React.Fragment"
});

export function TypeScriptTerminal(): JSX.Element {
    const [input, setInput] = useState<string>("");
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const [environment] = useState<TypescriptEnvironment>({
        files: new Map([["index.tsx", ""]]),
        compilerOptions: createDefaultCompilerOptions()
    });

    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Store variables in a closure to maintain state between evaluations
    const evaluationContext = useRef<Record<string, any>>({});

    const typeCheck = (
        code: string
    ): { errors: string[]; type?: string; compiledCode?: string } => {
        const fileMap = new Map(environment.files);
        fileMap.set("index.tsx", code);

        const compilerHost = ts.createCompilerHost(environment.compilerOptions);
        let outputCode = "";

        const customHost: ts.CompilerHost = {
            ...compilerHost,
            getSourceFile: (
                fileName: string,
                languageVersion: ts.ScriptTarget
            ) => {
                const source = fileMap.get(fileName);
                return source
                    ? ts.createSourceFile(fileName, source, languageVersion)
                    : undefined;
            },
            writeFile: (fileName: string, text: string) => {
                outputCode = text;
            },
            getCurrentDirectory: () => "/",
            getDefaultLibFileName: () => "lib.d.ts",
            fileExists: (fileName: string) => fileMap.has(fileName),
            readFile: (fileName: string) => fileMap.get(fileName)
        };

        const program = ts.createProgram(
            Array.from(fileMap.keys()),
            environment.compilerOptions,
            customHost
        );

        const diagnostics = ts.getPreEmitDiagnostics(program);

        let type: string | undefined;
        if (diagnostics.length === 0) {
            const checker = program.getTypeChecker();
            const sourceFile = program.getSourceFile("index.tsx");
            if (sourceFile) {
                const lastStatement =
                    sourceFile.statements[sourceFile.statements.length - 1];
                if (lastStatement && ts.isExpressionStatement(lastStatement)) {
                    const symbol = checker.getSymbolAtLocation(
                        lastStatement.expression
                    );
                    if (symbol) {
                        type = checker.typeToString(
                            checker.getTypeOfSymbolAtLocation(
                                symbol,
                                lastStatement
                            )
                        );
                    }
                }
            }

            // Emit the JavaScript code
            program.emit();
        }

        return {
            errors: diagnostics.map((diagnostic) => {
                const message = ts.flattenDiagnosticMessageText(
                    diagnostic.messageText,
                    "\n"
                );
                return `Type Error: ${message}`;
            }),
            type,
            compiledCode: outputCode
        };
    };

    const executeCommand = (command: string): void => {
        let output = "";
        let typeErrors: string[] = [];
        let type: string | undefined;

        try {
            // Special commands
            if (command === "clear") {
                setHistory([]);
                return;
            }

            if (command === "vars") {
                output = JSON.stringify(evaluationContext.current, null, 2);
                setHistory((prev) => [...prev, { command, output }]);
                return;
            }

            // Regular TypeScript execution
            const typeCheckResult = typeCheck(command);
            typeErrors = typeCheckResult.errors;
            type = typeCheckResult.type;

            if (typeErrors.length === 0 && typeCheckResult.compiledCode) {
                // Create a function that captures our evaluation context
                const evalFn = new Function(
                    "context",
                    `with (context) { ${typeCheckResult.compiledCode} }`
                );

                // Execute the compiled code with our context
                const result = evalFn(evaluationContext.current);

                // If it's a variable declaration, it will be added to our context automatically
                // For expressions, we'll see the result
                output = result !== undefined ? String(result) : "undefined";
            }
        } catch (error: any) {
            output = `Runtime Error: ${error.message}`;
        }

        setHistory((prev) => [
            ...prev,
            {
                command,
                output,
                typeErrors,
                type
            }
        ]);

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
            >
                <div className="mb-4 text-white">
                    TypeScript Terminal v2 - Now with type checking!
                    <br />
                    Try: let x: number = 5; or function add(a: number, b:
                    number): number {"{ return a + b; }"}
                    <br />
                    Type &apos;vars&apos; to see all defined variables. Type
                    &apos;clear&apos; to reset.
                </div>

                {history.map((entry, i) => {
                    return (
                        <div key={i} className="mb-4">
                            <div className="flex">
                                <span className="text-blue-400 mr-2">&gt;</span>
                                <div>{entry.command}</div>
                            </div>

                            {entry.type && (
                                <div className="pl-4 text-blue-300">
                                    Type: {entry.type}
                                </div>
                            )}

                            {entry.typeErrors &&
                                entry.typeErrors.length > 0 &&
                                entry.typeErrors.map((error, j) => {
                                    return (
                                        <div
                                            key={`${i}-${j}`}
                                            className="pl-4 text-red-400"
                                        >
                                            {error}
                                        </div>
                                    );
                                })}

                            {entry.output && (
                                <div className="pl-4 text-yellow-300">
                                    {entry.output}
                                </div>
                            )}
                        </div>
                    );
                })}

                <div className="flex items-center">
                    <span className="text-blue-400 mr-2">&gt;</span>
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
