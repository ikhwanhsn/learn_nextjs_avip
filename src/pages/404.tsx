import Image from "next/image";

const Page404 = () => {
  return (
    <main>
      <Image
        src="https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="404"
        width={500}
        height={500}
        className="mx-auto mt-24"
      />
    </main>
  );
};

export default Page404;
