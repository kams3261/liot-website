export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <div
        className="relative size-10"
        role="status"
        aria-label="読み込み中"
      >
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-foreground/15 border-t-foreground" />
        <span className="absolute inset-2 animate-pulse rounded-full bg-foreground/10" />
      </div>
    </div>
  );
}
