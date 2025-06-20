import Link from "next/link";

export default function PerplexityDemo() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
            {/* Back to Portfolio Link */}
            <div className="container mx-auto px-4 pt-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 mb-8"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Portfolio
                </Link>
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Perplexity Clone
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        A modern chat interface built with Next.js and Google
                        Gemini AI, inspired by Perplexity&apos;s design with
                        intelligent web search integration.
                    </p>
                </div>

                {/* Demo Video */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/Gw9aqs-LRg0?si=Zs4bjqB17LE2fLSx"
                            title="Perplexity Clone Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full"
                        ></iframe>
                    </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                        <div className="text-blue-400 text-2xl mb-4">🤖</div>
                        <h3 className="text-xl font-semibold mb-2">
                            AI Integration
                        </h3>
                        <p className="text-gray-300">
                            Powered by Google Gemini 2.0 Flash with intelligent
                            web search integration
                        </p>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                        <div className="text-purple-400 text-2xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Web Search
                        </h3>
                        <p className="text-gray-300">
                            Automatic web search integration using SerpAPI for
                            current information
                        </p>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                        <div className="text-green-400 text-2xl mb-4">💾</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Local Storage
                        </h3>
                        <p className="text-gray-300">
                            All conversations saved locally with cross-session
                            persistence
                        </p>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                        <div className="text-yellow-400 text-2xl mb-4">📱</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Responsive Design
                        </h3>
                        <p className="text-gray-300">
                            Modern UI with mobile-first responsive design using
                            Tailwind CSS
                        </p>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                        <div className="text-red-400 text-2xl mb-4">⚡</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Next.js 15
                        </h3>
                        <p className="text-gray-300">
                            Built with Next.js 15, App Router, and Turbopack for
                            optimal performance
                        </p>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                        <div className="text-indigo-400 text-2xl mb-4">🔒</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Privacy First
                        </h3>
                        <p className="text-gray-300">
                            All data stored locally - no conversation data sent
                            to external servers
                        </p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 mb-16 border border-gray-700">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Tech Stack
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Link
                            href="https://nextjs.org/blog/next-15"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                        >
                            <div className="text-blue-400 font-semibold">
                                Next.js 15
                            </div>
                        </Link>
                        <Link
                            href="https://www.typescriptlang.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                        >
                            <div className="text-green-400 font-semibold">
                                TypeScript
                            </div>
                        </Link>
                        <Link
                            href="https://tailwindcss.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                        >
                            <div className="text-purple-400 font-semibold">
                                Tailwind CSS
                            </div>
                        </Link>
                        <Link
                            href="https://ai.google.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                        >
                            <div className="text-yellow-400 font-semibold">
                                Google Gemini
                            </div>
                        </Link>
                        <Link
                            href="https://www.npmjs.com/package/serpapi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                        >
                            <div className="text-red-400 font-semibold">
                                SerpAPI
                            </div>
                        </Link>
                        <Link
                            href="https://www.npmjs.com/package/react-markdown/v/8.0.6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                        >
                            <div className="text-indigo-400 font-semibold">
                                React Markdown
                            </div>
                        </Link>
                        <Link
                            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                        >
                            <div className="text-pink-400 font-semibold">
                                LocalStorage
                            </div>
                        </Link>
                        <Link
                            href="https://www.npmjs.com/package/ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                        >
                            <div className="text-cyan-400 font-semibold">
                                Vercel AI SDK
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="https://github.com/Scc33/perplexity-clone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 border border-gray-600 hover:border-gray-500"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View on GitHub
                    </Link>

                    <Link
                        href="https://youtu.be/Gw9aqs-LRg0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Watch Demo Video
                    </Link>
                </div>
            </div>
        </div>
    );
}
