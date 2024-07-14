interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export default async function FetchUsers(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: { revalidate: 10 }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const users: User[] = await res.json();

    return users;
}
