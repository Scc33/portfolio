import Image from "next/image";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export const PortfolioCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-[343px] md:max-w-[384px] lg:max-w-[384px] mx-auto">
            <div className="flex flex-col items-center">
                <Image
                    src="/portfolioCard/profile.png"
                    alt="Sarah Dole"
                    width={96}
                    height={96}
                    className="rounded-full mb-4"
                />
                <h2 className="text-2xl font-semibold text-neutral-900 mb-1">
                    Sarah Dole
                </h2>
                <p className="text-sm text-neutral-600 mb-2">
                    Front End Engineer @ Microsoft
                </p>
                <p className="text-sm text-neutral-600 text-center mb-6">
                    I turn coffee into bugs which are fixed by someone else.
                    Certified Stack Overflow and ChatGPT developer.
                </p>
                <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-4 rounded-md mb-6 w-full text-base">
                    Contact me
                </button>
                <div className="flex space-x-6">
                    <a
                        href="#"
                        className="text-neutral-400 hover:text-neutral-700"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-neutral-400 hover:text-neutral-700"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-neutral-400 hover:text-neutral-700"
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-neutral-400 hover:text-neutral-700"
                    >
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
