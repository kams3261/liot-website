import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="text-base font-medium text-zinc-900 sm:text-lg"
        >
          Website.
        </Link>
        <nav aria-label="グローバルナビゲーション">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 sm:justify-end sm:gap-x-6 sm:gap-y-0">
            <li>
              <Link
                href="/"
                className="inline-block py-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 active:text-zinc-900 sm:py-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="inline-block py-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 active:text-zinc-900 sm:py-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="inline-block py-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 active:text-zinc-900 sm:py-0"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/test"
                className="inline-block py-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 active:text-zinc-900 sm:py-0"
              >
                Test
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
