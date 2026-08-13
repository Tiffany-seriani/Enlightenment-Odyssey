
"use client";

import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function formatPhone(input: string) {
    // Converts 07XXXXXXXX or 7XXXXXXXX to 2547XXXXXXXX
    let digits = input.replace(/\D/g, "");
    if (digits.startsWith("0")) digits = "254" + digits.slice(1);
    if (digits.startsWith("7") || digits.startsWith("1")) digits = "254" + digits;
    return digits;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/mpesa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: formatPhone(phone),
          amount,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("Payment request failed. Please try again.");
        console.error(data);
      } else {
        setMessage("Check your phone to complete the payment.");
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black px-4">
      <div className="w-full max-w-sm bg-white dark:bg-zinc-900 rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Payment</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
              placeholder="07XXXXXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
              placeholder="0.00"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium disabled:opacity-50"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>

          {message && (
            <p className="text-sm text-center mt-2">{message}</p>
          )}
        </form>
      </div>
    </main>
  );
}