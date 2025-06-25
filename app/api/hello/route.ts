export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  console.log(request);
  return Response.json({ message: "Hello from Next.js!" });
}
