
import Navbar from "./components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <Navbar/>
       <h1>THE ENLIGHTENMENT ODYSSEY</h1>
      <p>Read.Reflect.Connect</p>
      <Link href="/register">
        <button>Register Now.</button>
      </Link>
    </div>
  );
}
