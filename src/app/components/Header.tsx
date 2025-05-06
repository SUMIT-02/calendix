"use server";
import { session } from "@/libs/session";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

export default async function Header() {
  const email = await session().get("email");
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
      {email && (
        <nav className="flex items-center gap-4">
          <Link
            href={"/about"}
            className="bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            Dashboard
          </Link>
        </nav>
      )}{" "}
      {!email && (
        <nav className="flex items-center gap-4">
          <Link href={"/singIn"}>Sign in</Link>
          <Link
            href={"/about"}
            className="bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            Get started
          </Link>
        </nav>
      )}
    </header>
  );
}
