"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GatewayPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === "quack") {
      document.cookie = "can-access-ducks=true; path=/";
      router.push("/ducks");
    } else {
      setError("Wrong password!");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Enter the secret password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded-md"
        >
          Enter
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
}
