import { ProductType } from "@/types/product.type";
import Link from "next/link";

const CardProduct = ({ products }: { products: ProductType[] }) => {
  return (
    <section className="flex gap-3">
      {products?.length > 0 ? (
        products.map((d: ProductType, id: number) => (
          <Link href={`/product/${d.id}`} key={id}>
            <section className="p-3 shadow-md bg-gray-300 rounded-md mb-3 w-fit">
              <p>Name : {d.name}</p>
              <p>Price : {d.price}</p>
            </section>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default CardProduct;
