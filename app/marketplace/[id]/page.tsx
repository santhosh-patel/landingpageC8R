import { useRouter } from "next/router";

export default function ItemDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Item Detail: {id}</h1>
      <p>Details about item {id} will be displayed here.</p>
    </main>
  );
}
