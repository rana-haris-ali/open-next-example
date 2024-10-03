export async function GET(req: Request) {
	// Quickly return a response to the client
	const data = { message: "Task has been started." };
	const url = new URL(req.url ?? '')
	const time = parseInt(url.searchParams.get('time') ?? '3000');

	// Simulate starting a background task
	new Promise((resolve) => {
		return setTimeout(() => {
			resolve(`Background task ran for ${time / 1000} seconds`)
		}, time)
	}).then(console.log)

	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' },
	});
}
