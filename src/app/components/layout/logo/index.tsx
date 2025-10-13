import Image from "next/image";
import Link from "next/link";

const Logo = (props: { sticky: boolean }) => {
  const { sticky } = props;
  return (
    <Link href="/">
      <h1
        style={{ width: "auto", height: "auto" }}
        className={` hidden xsm:block text-4xl ${
          sticky ? "text-black" : "text-white"
        } font-bold leading-none`}
      >
        Grow With Sadeed
      </h1>
    </Link>
  );
};

export default Logo;
