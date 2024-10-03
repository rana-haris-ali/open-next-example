// app/ssr/page.js
async function fetchData(): Promise<{ title: string; content: string }> {
	// Simulate fetching data from an external API
	return new Promise((res, rej) => {
		setTimeout(() => {
			res({
				title: 'SSR Page',
				content: `This page is generated on each request. Last generation was at ${new Date().toUTCString()}`,
			});
		}, 1000);
	});
}

export default async function SSRPage() {
  const data = await fetchData();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}
