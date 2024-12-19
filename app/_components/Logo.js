import Image from "next/image";
import logo from "@/public/logo.png"
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} height="60" width="60" quality={100} alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        Hotel
      </span>
    </Link>
  );
}

export default Logo;
