export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white/80 py-4 text-xs text-zinc-500 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} StaySmart. All rights reserved.</p>
        <p className="flex gap-3">
          <span>Clean, accessible, and modern property browsing.</span>
        </p>
      </div>
    </footer>
  );
}

