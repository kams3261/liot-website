import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-medium text-zinc-900">
          Test Website
        </Link>
        <nav aria-label="グローバルナビゲーション">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
              >
                Works
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
