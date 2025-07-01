// src/app/server-actions-demo/page.tsx

// A server-scoped counter variable
let counter = 0;

// Disable caching so each request reflects the latest counter value
export const revalidate = 0;

export default function ServerActionsDemoPage() {
  // Server action to increment the counter
  async function handleIncrement() {
    "use server";
    counter++;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Next.js Server Actions Counter
      </h1>
      <p className="text-xl mb-6">Counter: {counter}</p>
      <form action={handleIncrement}>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Increment
        </button>
      </form>
      <p className="mt-4 text-gray-500 italic">No client-side JS needed!</p>
    </div>
  );
}
