import { Concert_One } from "next/font/google";
import Image from "next/image";

const concert_one = Concert_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Logo() {
  return (
    <div className={`${concert_one.className} Logo-wrapper`}>
      <Image src="/logo.png" width={80} height={70} alt="logo" />
      twieezi
    </div>
  );
}
