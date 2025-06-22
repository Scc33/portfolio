export async function GET(request: Request) {
  console.log(request);
  return new Response(null, {
    status: 200
  });
}
