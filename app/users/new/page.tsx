"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const route = useRouter();

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        route.push("/users");
      }}
    >
      Create
    </button>
  );
};

export default NewUserPage;
