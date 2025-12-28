"use client";
export default function Error({ error }) {
  return <p className="text-red-500">{error.message}</p>;
}
