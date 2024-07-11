import { Button } from "app/button/components/Button";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex items-center justify-left min-h-screen bg-gray-100">
          <div className="text-left p-6 max-w-screen-md">
            <h1 className="text-blue-500 text-sm">Not found</h1>
            <h2 className="mt-2 text-4xl font-bold text-gray-900">We can&apos;t find the page</h2>
            <p className="mt-4 text-gray-500">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
            <Button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      );
};

export default NotFound;
