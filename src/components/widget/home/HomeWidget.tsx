"use client";

import { useRouter } from "next/navigation";

export default function HomeWidget() {
  const router = useRouter();
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <h2>Register:</h2>
      <p>Click the button below to register a new account.</p>
      <button onClick={() => router.push("abrir-conta")}>Register</button>
      <h2>Status:</h2>
      <p>Click the button below to view the status page.</p>
      <button onClick={() => router.push("status-analise")}>Status</button>
    </div>
  );
}
