import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PropertyCard } from "@/components/properties/PropertyCard";
import type { Property } from "@/types/property";

const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Modern Loft with City View",
    location: "Downtown, San Francisco",
    price: "$240",
    bedrooms: 2,
    bathrooms: 2,
    imageUrl:
      "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "Featured",
  },
  {
    id: "2",
    title: "Cozy Studio Near the Park",
    location: "Brooklyn, New York",
    price: "$150",
    bedrooms: 1,
    bathrooms: 1,
    imageUrl:
      "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "New",
  },
  {
    id: "3",
    title: "Family Home with Garden",
    location: "Camden, London",
    price: "$320",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "4",
    title: "Minimalist Apartment by the Sea",
    location: "Cascais, Portugal",
    price: "$280",
    bedrooms: 2,
    bathrooms: 1,
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            StaySmart
          </p>
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Browse curated stays, discover smarter properties.
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
            StaySmart helps you explore hand-picked properties with clean design
            and accessible, user-friendly experiences. Filter by what matters to
            you and dive into detailed property information in a few clicks.
          </p>
        </section>

        <section aria-label="Featured properties" className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Featured properties
            </h2>
            <button className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800">
              View all
            </button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        <section
          aria-label="Why StaySmart"
          className="mt-6 grid gap-4 rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 p-5 text-sm text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-50 sm:grid-cols-3 sm:gap-6"
        >
          <div>
            <h3 className="text-sm font-semibold">Accessible by design</h3>
            <p className="mt-1 text-xs text-emerald-900/80 dark:text-emerald-100/80">
              Built with semantic HTML, keyboard-friendly interactions, and
              color contrast in mind.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Responsive everywhere</h3>
            <p className="mt-1 text-xs text-emerald-900/80 dark:text-emerald-100/80">
              Optimized layouts from mobile to desktop so browsing never feels
              cramped or overwhelming.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Ready to scale</h3>
            <p className="mt-1 text-xs text-emerald-900/80 dark:text-emerald-100/80">
              A modern Next.js, TypeScript, and Tailwind foundation ready for
              filters, auth, and real data integrations.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

