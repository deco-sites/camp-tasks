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
}

export default function HorizontalProductCard({ products }: Product) {
   return (
      <div className="container">
         <ul className="flex flex-col gap-4">
            {products.map((product, index) => (
               <li className="sm:flex gap-2 p-4 rounded-md shadow bg-slate-600 text-slate-200" key={index}>
                  <div>
                     <img
                        src={product.image.src}
                        alt={product.image.alt}
                        className="rounded w-full"
                     />
                  </div>
                  <div className="flex flex-col gap-2">
                     <h2 className="text-lg font-medium">{product.productName}</h2>
                     <p className="text-sm font-thin">{product.productDescription}</p>
                     <p className="text-xl font-bold">{product.productPrice && `R$${product.productPrice}`}</p>
                     <button className="btn mt-auto">Comprar</button>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}
