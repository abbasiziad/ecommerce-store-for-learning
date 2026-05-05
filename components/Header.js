import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold">E-COMMERCE STORE</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}