export async function GET(req: Request) {
	const url = new URL(req.url ?? '')
	// Simulate a long-running task
	await new Promise((resolve) => setTimeout(resolve, parseInt(url.searchParams.get('time') ?? '3000'))); // Wait for 5 seconds
	const data = { message: "This is a long-running API route." };
	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' },
	});
}
