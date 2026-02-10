export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/70 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white">
            SS
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              StaySmart
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Property Listing Platform
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300 sm:flex">
          <button className="rounded-full px-3 py-1 transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Browse
          </button>
          <button className="rounded-full px-3 py-1 transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Favorites
          </button>
          <button className="rounded-full px-3 py-1 transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Support
          </button>
        </nav>
        <button className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-50 shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200">
          List your property
        </button>
      </div>
    </header>
  );
}

