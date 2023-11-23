"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Metadata } from "next";
import { useState } from "react";
import dynamic from "next/dynamic";
// import _ from "lodash"; // commented coz we're importing on button click only i.e lazy loading

// Lazy loading small doesn't make sense as without it page is of small size.

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false, // When importing client component, bydefault pre-redered on server, sometimes this can cause issue coz perfhase some Broswer API's are not available.
  loading: () => <p>Loading...</p>,
});

// client component cannot be async
export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main className="relative h-screen">
      <h1>Hello World!</h1>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>} </h1> */}
      <button
        className="btn btn-primary"
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sortedUsers = _.orderBy(users, ["name"]);
          console.log(sortedUsers);
          setIsVisible(true);
        }}
      >
        Show
      </button>
      {isVisible && <HeavyComponent />}
      <div>
        <Link href="/users">Users</Link>
      </div>
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
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: "product.title",
//   };
// }
