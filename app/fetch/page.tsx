import FetchUsers from "./components/UsersList";
import { Users } from "lucide-react";

export const metadata = {
    title: "Fetch Example",
    description: "Example of NextJS fetching and caching."
};

const Page = async () => {
    const userData = await FetchUsers();
    return (
        <div>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Data Fetching Server Component
            </h1>
            {userData.map((user) => (
                <div key={user.id} className="p-4 rounded-lg shadow-md mb-4">
                    <h2 className="flex text-lg font-semibold">
                        <Users />
                        {user.name}
                    </h2>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-sm text-gray-600">{user.phone}</p>
                    <p className="text-sm text-gray-600">{user.website}</p>
                </div>
            ))}
        </div>
    );
};

export default Page;
