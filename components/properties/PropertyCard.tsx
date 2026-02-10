import Image from "next/image";
import type { Property } from "@/types/property";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {property.tag ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm dark:bg-zinc-900/90 dark:text-zinc-50">
            {property.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {property.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {property.location}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm">
          <p className="font-semibold text-zinc-900 dark:text-zinc-50">
            {property.price}
            <span className="ml-1 font-normal text-zinc-500 dark:text-zinc-400">
              /night
            </span>
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {property.bedrooms} bd · {property.bathrooms} ba
          </p>
        </div>
      </div>
    </article>
  );
}

