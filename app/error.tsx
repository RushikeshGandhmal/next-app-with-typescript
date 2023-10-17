"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <>
      <div>
        Unexpected error has occurred. (doesn&apos; encounter error from
        layout.tsx page, create global-error.tsx page. make that client)
      </div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
