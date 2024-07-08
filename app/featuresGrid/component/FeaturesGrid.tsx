import {
    Copyright,
    DollarSign,
    Download,
    Leaf,
    RefreshCcw,
    UsersRound
} from "lucide-react";

const FeaturesGrid = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-sm font-semibold text-blue-600">
                    Premium abstract images
                </h2>
                <h1 className="mt-2 text-3xl font-bold text-gray-900">
                    Easy access to top quality images
                </h1>
                <p className="mt-4 text-gray-600">
                    In a world where storytelling constantly evolves, we lead
                    with groundbreaking images designed for your presentation
                    excellence.
                </p>
                <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                            <Download className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            Infinite Download
                        </h3>
                        <p className="text-gray-600">
                            Once you subscribe to our plans, they&apos;re all
                            yours. Download as many as you want and use them for
                            work presentations, wallpapers, and much more.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                            <Leaf className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            Purely Handcrafted
                        </h3>
                        <p className="text-gray-600">
                            No AI, no generic images. Crafted from various
                            chemicals, fabrics, clouds, or even particles as
                            small as dust.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                            <Copyright className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            All Are Under licensed
                        </h3>
                        <p className="text-gray-600">
                            The only limitation with these abstract images is
                            that you are not able to sell them in any form,
                            whether digital or hard copy (such as paintings or
                            prints on paper).
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                            <DollarSign className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            Cancel Anytime
                        </h3>
                        <p className="text-gray-600">
                            Subscribe at your own pace, and cancel when you feel
                            it&apos;s enough.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                            <UsersRound className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            Empowering For Team
                        </h3>
                        <p className="text-gray-600">
                            We support multiple seats at once, requiring only a
                            single payment.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                            <RefreshCcw className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            No Limitations
                        </h3>
                        <p className="text-gray-600">
                            Use as many as you want, from Dribbble presentations
                            to PowerPoint presentations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
