import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-4xl items-center px-6 py-4">
        <Link href="/" className="text-lg font-medium text-zinc-900">
          Liot
        </Link>
      </div>
    </header>
  );
}
