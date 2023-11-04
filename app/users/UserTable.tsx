import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  // caching behavior is only implemented in fetch function not in 3rd party librery like axios.
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); // it does cache the data, next time it will get from cahe memory so it also render as a static

  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   cache: "no-store", // it doesn't store data as in it's cache (file system format) so it render as dynamic as new data will come instead if cached.
  // });

  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   next: { revalidate: 10 }, // every after 10 sec it will fetch data.
  // });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    (user) => user[sortOrder as keyof typeof user]
  );

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
