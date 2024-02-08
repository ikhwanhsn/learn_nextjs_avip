import { ProductType } from "@/types/product.type";
import CardProduct from "./CardProduct";

const ProductPage = ({ products }: { products: ProductType[] }) => {
  if (!Array.isArray(products)) {
    return <p>Error: Products should be an array.</p>;
  }
  return (
    <main>
      <h1>Product Page Server</h1>
      <CardProduct products={products} />
    </main>
  );
};

export default ProductPage;

export async function getServerSideProps() {
  let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const result = await res.json();

  return {
    props: {
      products: result.data,
    },
  };
}
