export async function GET(request: Request) {
    console.log(request);
    return new Response("Hello, Next.js!", {
        status: 200,
        headers: { "Set-Cookie": `token=1234` }
    });
}
