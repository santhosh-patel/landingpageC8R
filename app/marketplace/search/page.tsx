import { useRouter } from "next/router";

export default function SearchPage() {
  const router = useRouter();
  const { query } = router.query;

  return (
    <main className="min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <p>Showing results for: <strong>{query || "none"}</strong></p>
      {/* Display search results here */}
    </main>
  );
}
