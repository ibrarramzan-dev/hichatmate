import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image src="/logo.png" alt="HiChatMate" width={150} height={120} />
    </header>
  );
}
