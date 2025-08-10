"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params.id; // ✅ Works in Next.js App Router

  return <div>Item ID: {id}</div>;
}
