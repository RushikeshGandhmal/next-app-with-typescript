import React from "react";

interface UserDetailProps {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: UserDetailProps) => {
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
