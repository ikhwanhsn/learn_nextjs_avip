import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import CardProduct from "./CardProduct";
import { fetcher } from "@/lib/swr/fetcher";
import Link from "next/link";
import { ProductType } from "@/types/product.type";

const DetailProductPage = ({products}: {products: ProductType}) => {
  // client side rendering
  // const {query} = useRouter()
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher)

  return (
    <main>
      <h1 className="mb-3">Detail Product Page</h1>
      {/* client side rendering */}
      {/* {isLoading? [] : <>
        <section className="p-3 bg-blue-400 rounded-md w-fit">
          <h1>{data.data.name}</h1>
          <p>{data.data.price}</p>
          <p>{data.data.color}</p>
        </section>
      </>} */}

      {/* server side rendering */}
      <p>{products.name}</p>
      <p>{products.price}</p>
      <p>{products.color}</p>
      <Link href={'/product'}>Kembali</Link>
    </main>
  );
};

export default DetailProductPage;

// export async function getServerSideProps({params}: {params: {product: string}}) {
//   let res = await fetch(`http://localhost:3000/api/product/${params.product}`)
//   const result = await res.json()

//   return {
//       props: {
//           products: result.data
//       }
//   }
// }

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/product')
  const result = await res.json()
  const paths = result.data.map((data: ProductType) => ({
      params: {
          product: data.id
      }
  }))

  return {paths, fallback: false}
}

export async function getStaticProps({params}: {params: {product: string}}) {
  let res = await fetch(`http://localhost:3000/api/product/${params.product}`)
  const result = await res.json()

  return {
      props: {
          products: result.data
      }
  }
}