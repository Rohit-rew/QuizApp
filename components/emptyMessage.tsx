import React from "react";

type propTypes = {
  message: string;
};

export default function EmptyMessage({ message }: propTypes) {
  return (
    <p className="text-center text-gray-500 text-2xl place-self-center justify-self-center align-self-center ">
      {message}
    </p>
  );
}
