import { Product } from "apps/commerce/types.ts";
import Votes from "deco-sites/camp-tasks/islands/Votes.tsx";

export interface Products {
  items: Product[] | null;
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

export default function HorizontalProductCard({ items }: Products) {
  return (
    <div className="container mx-auto py-5">
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        {items &&
          items.map((item, index) => (
            <li className="card w-auto bg-base-100 shadow-xl">
              <Votes productId={item.productID} />
              <figure>
                <img
                  src={item.image?.[0].url}
                  alt={item.alternateName}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <a href={item.url} className="btn btn-primary">Compre</a>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
