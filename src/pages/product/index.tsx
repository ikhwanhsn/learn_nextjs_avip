import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import CardProduct from "./CardProduct";
import { fetcher } from "@/lib/swr/fetcher";

const ProductPage = () => {
  const { data, error, isLoading } = useSWR(`/api/product/`, fetcher)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //     if(!isLoggedIn) {
  //         router.push('/auth/login');
  //     }
  // }, []);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((result) => setProducts(result.data))
  // }, []);

  return (
    <main>
      <h1 className="mb-3">Product Page</h1>
      <h1 className="mb-3">Product Page</h1>
      <CardProduct products={isLoading? [] : data.data}/>
    </main>
  );
};

export default ProductPage;
