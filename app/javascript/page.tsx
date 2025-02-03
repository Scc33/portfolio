import { JavaScriptTerminal } from "./components/JavaScriptTerminal";

export default function TypeScriptPage() {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">TypeScript Playground</h1>
            <JavaScriptTerminal />
        </main>
    );
}
