import Votes from "deco-sites/camp-tasks/islands/Votes.tsx";
import { ProductVariate } from "deco-sites/camp-tasks/flags/multivariate/productVariate.ts";
import Image from "apps/website/components/Image.tsx";

export interface Products {
  size:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
  items: ProductVariate;
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div role="alert" className="alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{error?.message}</span>
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div className="flex justify-center py-8">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}

export default function HorizontalProductCard({ items, size }: Products) {
  return (
    <div className="container mx-auto py-5">
      <ul className="grid grid-cols-1 gap-4">
        {items &&
          items.map((item, index) => (
            <li
              key={item.productID}
              className="flex flex-col sm:flex-row items-center gap-4 shadow-xl bg-base-100 rounded-xl p-4"
            >
              <figure>
                <Image
                  width={200}
                  src={item.image?.[0].url ? item.image?.[0].url : ""}
                  alt={item.alternateName}
                  className="rounded-xl min-w-full sm:min-w-48"
                />
              </figure>
              <div className=" flex flex-col items-start justify-between gap-4 w-full h-full">
                <div className="flex flex-col w-full">
                  <h2 className="order-2 text-lg font-bold">
                    {item.name}
                  </h2>
                  <p className="order-3 text-sm text-slate-500">
                    {item.description}
                  </p>
                  <div className="order-1 pb-4">
                    <Votes productId={item.productID} />
                  </div>
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center w-full">
                  <a
                    href={item.url}
                    className="btn bg-slate-40 min-w-full sm:min-w-10 order-2 sm:order-1"
                  >
                    Ver produto
                  </a>
                  <span className="order-1 sm:order-2 font-bold">
                    R$ {item.offers?.lowPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
