import Register from "@/components/auth/Register";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <main>
      <Register />
      <p>
        Already have an account?{" "}
        <Link href={"/auth/login"} className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </main>
  );
};

export default RegisterPage;
