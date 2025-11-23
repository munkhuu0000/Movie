"use client";

import { useParams } from "next/navigation";

export default function () {
  const params = useParams(); // ← () дуудна
  const { id } = params; // route param авах

  return <div>{id}</div>;
}
