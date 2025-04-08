import Image from "next/image";
import Link from "next/link";
import { Concert_One } from "next/font/google";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Logo />
      <div className="Header-menu">
        <ul>
          <Link href="/explore">
            <li>Explore</li>
          </Link>
          <Link href="/pricing">
            <li>Features</li>
          </Link>
          <Link href="/about">
            <li>App Platforms</li>
          </Link>
          <Link href="/about">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
