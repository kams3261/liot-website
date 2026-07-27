export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200">
      <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Liot</p>
      </div>
    </footer>
  );
}
