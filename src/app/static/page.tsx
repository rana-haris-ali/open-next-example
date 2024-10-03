export default function StaticPage() {
  return (
    <div>
      <h1>Static Page</h1>
      <p>This page was statically generated at build time at time {(new Date()).toUTCString()}.</p>
    </div>
  );
}
