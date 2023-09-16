import Link from "next/link";
import ProductCart from "./components/ProductCart";

export default function Home() {
  return (
    <main className="text-[#FFFF]">
      <h1>Hello Next</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  );
}
