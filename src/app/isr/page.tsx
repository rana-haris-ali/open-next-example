export const revalidate = 60; // Revalidate the page every 60 seconds

async function fetchData(): Promise<{ title: string; content: string }> {
	// Simulate fetching data from an external API
	return new Promise((res, rej) => {
		setTimeout(() => {
			res({
				title: 'ISR Page',
				content: `This page is regenerated every 10 seconds. Last generation was at ${new Date().toUTCString()}`,
			});
		}, 1000);
	});
}

export default async function ISRPage() {
	const data = await fetchData();
	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.content}</p>
		</div>
	);
}
