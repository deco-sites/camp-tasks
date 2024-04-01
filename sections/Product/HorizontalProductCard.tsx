import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Product {
  products: Props[];
}

export interface Props {
  image: {
    src: ImageWidget;
    alt?: string;
    href?: string;
  };
  productName: string;
  productDescription: string;
  productPrice: string;
  size:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
}

export function ErrorFallback({ error }: { error?: Error }) {
  return <div className="text-red-800">Error: {error?.message}</div>;
}

export default function HorizontalProductCard({ products }: Product) {
  return (
    <div className="container">
      <ul className="flex flex-col gap-4">
        {products.map((product, index) => (
          <li
            className={`${product.size} card bg-base-100 shadow-xl flex-row gap-3`}
            key={index}
          >
            <div>
              <Image
                src={product.image.src}
                alt={product.image.alt}
                width={180}
              />
            </div>
            <div className="flex flex-col gap-1 py-2">
              <h2 className="text-lg font-medium">
                {product.productName}
              </h2>
              <p className="text-sm font-thin">
                {product.productDescription}
              </p>
              <p className="text-xl font-bold">
                {product.productPrice && `R$${product.productPrice}`}
              </p>
              <button className="btn mt-auto">Comprar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
