import Link from "next/link";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen px-6 py-12 text-white">
      <h1 className="text-4xl font-bold mb-6">Marketplace</h1>
      <p className="mb-8 max-w-xl">
        Welcome to the CRE8TAR Marketplace. Browse and explore unique items, NFTs, and avatars.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Example items */}
        <Link href="/marketplace/1" className="block p-4 border border-purple-600 rounded hover:bg-purple-900 transition">
          <h2 className="text-xl font-semibold">Item 1</h2>
          <p>View details for item 1</p>
        </Link>
        <Link href="/marketplace/2" className="block p-4 border border-purple-600 rounded hover:bg-purple-900 transition">
          <h2 className="text-xl font-semibold">Item 2</h2>
          <p>View details for item 2</p>
        </Link>
        <Link href="/marketplace/3" className="block p-4 border border-purple-600 rounded hover:bg-purple-900 transition">
          <h2 className="text-xl font-semibold">Item 3</h2>
          <p>View details for item 3</p>
        </Link>
      </div>
    </main>
  );
}
