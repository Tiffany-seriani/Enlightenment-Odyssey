
import Navbar from "./components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <div
      className="relative flex flex-col min-h-screen font-sans bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6">
        <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-zinc-300 mb-4">
          Welcome to
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl">
          The Enlightenment Odyssey
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 mt-6 tracking-wide">
          Read. Reflect. Connect.
        </p>

        <Link href="/register">
          <button className="mt-10 px-8 py-3 rounded-full bg-white text-black font-semibold text-sm md:text-base tracking-wide hover:bg-zinc-200 transition-colors">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
