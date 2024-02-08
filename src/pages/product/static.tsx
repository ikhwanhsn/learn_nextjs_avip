// import { ProductType } from "@/types/product.type";
// import CardProduct from "./CardProduct";

// const ProductPage = ({products}: {products: ProductType[]}) => {
//     return (
//         <main>
//             <h1>Product Page Static</h1>
//             <CardProduct products={products}/>
//         </main>
//      );
// }

// export default ProductPage;

// export async function getStaticProps() {
//     let res = await fetch('http://localhost:3000/api/product')
//     const result = await res.json()

//     return {
//         props: {
//             products: result.data
//         },
//         revalidate: 10
//     }
// }

const ProductPage = () => {
  return <h1>Product Page</h1>;
};

export default ProductPage;
