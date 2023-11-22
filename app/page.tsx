import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Metadata } from "next";
import HeavyComponent from "./components/HeavyComponent";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>} </h1>
      <HeavyComponent />
      <Link href="/users">Users</Link>
      <ProductCard />
      <Image
        src="https://bit.ly/react-cover"
        alt="react image"
        fill
        className="object-contain"
        sizes="(max-width: 480px) 100vw (max-width: 786px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "...", // we're overriding title from root layout metadata
// };

// When pages have routes/query string parameters we need to generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  // const product = await fetch("");
  // return {
  //   title: "product.title",
  // };
  return {};
}
