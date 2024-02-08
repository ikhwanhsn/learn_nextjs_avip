import Login from "@/components/auth/Login";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();
  const handlerProduct = () => {
    push("/product");
  };
  return (
    <main>
      <Login />
    </main>
  );
};

export default LoginPage;
