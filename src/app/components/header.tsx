import { CalendarDays } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-4 justify-between py-4 text-gray-600 font-light">
      <div className="flex items-center gap-6">
        <Link href={"/"} className="text-blue-600 flex gap-2 text-xl font-bold">
          <CalendarDays size={32} />
          Calendix
        </Link>
        <nav className="flex gap-4">
          <Link href={"/features"}>Features</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/pricing"}>Pricing</Link>
        </nav>
      </div>
      <nav className="flex items-center gap-4">
        <Link href={"/singIn"}>sign in</Link>
        <Link
          href={"/about"}
          className="bg-blue-600 text-white py-2 px-4 rounded-full"
        >
          Get started
        </Link>
      </nav>
    </header>
  );
}
