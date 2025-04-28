import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <header className="flex gap-4 justify-between py-4 text-gray-600 font-light">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="text-blue-600 text-xl font-bold">
            Calendix
          </Link>
          <nav className="flex gap-4">
            <Link href={"/features"}>Features</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
          </nav>
        </div>
        <nav>
          <Link href={"/singIn"}>Features</Link>
          <Link href={"/about"}>Get started</Link>
        </nav>
      </header>
    </main>
  );
}
