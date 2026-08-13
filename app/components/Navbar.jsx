
function Navbar(){
    return(
        <>
         <nav className="w-full flex items-center justify-between px-8 py-4 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      {/* Logo / Brand - left */}
      <Link href="/" className="text-lg font-bold tracking-wide">
        Enlightenment Odyssey
      </Link>

      {/* Links - right */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/register">Payment</Link>
      </div>
    </nav>
        </>
    )
}

export default Navbar;