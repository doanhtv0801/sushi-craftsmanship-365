export function PageSkeleton() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <div className="h-8 w-64 animate-pulse rounded-md bg-border/50" />
      <div className="h-4 w-80 animate-pulse rounded-md bg-border/40" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-40 animate-pulse rounded-lg border border-border bg-washi-soft" />
        ))}
      </div>
    </div>
  );
}
