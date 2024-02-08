import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <section className="flex justify-between items-center px-12 h-12 bg-slate-400">
      <h1>Navbar</h1>
      <section className="flex gap-3 items-center">
        {data?.user?.image && (
          <img
            src={data.user.image}
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
        )}
        {data?.user?.name && <h2>{data.user.name}</h2>}
        {data ? (
          <button
            onClick={() => signOut()}
            className="bg-red-500 py-1 px-3 rounded-md"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-green-500 py-1 px-3 rounded-md"
          >
            Login
          </button>
        )}
      </section>
    </section>
  );
};

export default Navbar;
