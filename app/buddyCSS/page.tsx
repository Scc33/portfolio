import {
    Check,
    Smartphone,
    Book,
    Code,
    Palette,
    Layout,
    Trophy
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "BuddyCSS - Learn CSS With Ease",
    description:
        "An iOS app designed to teach CSS fundamentals through a structured, gamified learning experience."
};

export default function Page() {
    return (
        <div className="py-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        BuddyCSS
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Learn CSS fundamentals through interactive challenges
                    </p>
                </div>

                <div className="mb-12 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900 p-8 rounded-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-semibold mb-4">
                                Duolingo for CSS
                            </h2>
                            <p className="mb-4">
                                BuddyCSS is a mobile platform designed to make
                                learning CSS accessible, engaging, and fun. With
                                a structured path from basics to advanced
                                concepts, you'll master CSS one lesson at a
                                time.
                            </p>
                            <div className="flex items-center space-x-2 mb-2">
                                <Check className="h-5 w-5 text-green-500" />
                                <span>Learn at your own pace</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                                <Check className="h-5 w-5 text-green-500" />
                                <span>Hands-on interactive challenges</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="h-5 w-5 text-green-500" />
                                <span>
                                    Track your progress with achievements
                                </span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="w-64 h-96 bg-black rounded-3xl p-3 shadow-xl">
                                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                                    <span className="text-xl font-semibold text-center text-black p-4">
                                        BuddyCSS App Screenshot Coming Soon
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Core Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="mb-4 flex justify-center">
                                <Book className="h-10 w-10 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-medium mb-2 text-center">
                                Linear Learning Path
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                Five sequential chapters with focused lessons
                                that build upon previous knowledge
                            </p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="mb-4 flex justify-center">
                                <Code className="h-10 w-10 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-medium mb-2 text-center">
                                Interactive Coding
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                Write real CSS code and see your changes
                                rendered in real-time
                            </p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="mb-4 flex justify-center">
                                <Trophy className="h-10 w-10 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-medium mb-2 text-center">
                                Gamification
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                Earn points and unlock achievements as you
                                progress through the curriculum
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">
                        What You'll Learn
                    </h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Palette className="h-6 w-6 text-indigo-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium">
                                        CSS Basics
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Learn selectors, colors, typography, and
                                        basic styling concepts.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Layout className="h-6 w-6 text-indigo-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium">
                                        Layout Fundamentals
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Master flexbox, grid, positioning, and
                                        flow layouts.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Smartphone className="h-6 w-6 text-indigo-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium">
                                        Responsive Design
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Create designs that work beautifully
                                        across all device sizes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">
                        Coming Soon to the App Store
                    </h2>
                    <p className="mb-6">
                        BuddyCSS is currently in development and will be
                        available for iOS devices soon.
                    </p>
                    <Link
                        href="/buddyCSS/privacy"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        View Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    );
}
