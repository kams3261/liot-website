export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200">
      <div className="mx-auto w-full max-w-4xl px-4 py-4 text-center text-xs text-zinc-600 sm:px-6 sm:py-6 sm:text-left sm:text-sm">
        <p>&copy; {new Date().getFullYear()} Liot</p>
      </div>
    </footer>
  );
}
