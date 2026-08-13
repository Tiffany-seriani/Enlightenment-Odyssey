 import Link from "next/link";

 function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-6">
      <Link href="/" className="text-lg md:text-xl font-bold tracking-wide text-white">
        Enlightenment Odyssey
      </Link>

      <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-zinc-200">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <Link href="/register" className="hover:text-white transition-colors">
          Payment
        </Link>
      </div>
    </nav>
  );
}
export default Navbar 