
export default function Home() {
  // Example of fetching data from an API route
  async function fetchComments() {
    const res = await fetch('http://localhost:3000/comments/');
    const data = await res.json();
    console.log(data);
  }

  fetchComments();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Hello world</h1>
    </div>
  );
}
