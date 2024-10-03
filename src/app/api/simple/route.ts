// app/api/simple/route.js
export async function GET() {
  const data = { message: "Hello from a simple API route!" };
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
