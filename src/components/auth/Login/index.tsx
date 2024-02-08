import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password is incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or password is incorrect");
    }
  };
  return (
    <main>
      <h1>Form Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="border-2 rounded-md" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="border-2 rounded-md" />
        <br />
        <button
          className="py-2 px-3 rounded-md bg-green-500"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl,
            redirect: false,
          })
        }
        className="py-2 px-3 rounded-md bg-blue-500"
      >
        Login with Google
      </button>
      <p>
        Dont have an account?<Link href={"/auth/register"}> register</Link>
      </p>
    </main>
  );
};

export default Login;
