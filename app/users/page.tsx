import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // caching behavior is only implemented in fetch function not in 3rd party librery like axios.
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); // it does cache the data, next time it will get from cahe memory

  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   cache: "no-store", // it doesn't store data as in it's cache (file system format)
  // });

  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   next: { revalidate: 10 }, // every after 10 sec it will fetch data.
  // });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
