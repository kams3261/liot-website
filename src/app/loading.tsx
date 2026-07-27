export default function Loading() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-24">
      <div
        className="size-12 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900"
        role="status"
        aria-label="読み込み中"
      />
      <p className="text-sm font-medium text-zinc-600" aria-hidden="true">
        読み込み中…
      </p>
    </div>
  );
}
