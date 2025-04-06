import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="Home-main">
        <div className="Home-main-menu-wrapper">
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/explore">
              <li>Explore</li>
            </Link>
            <Link href="/pricing">
              <li>Pricing</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
      </div>
      <footer>This is a footer</footer>
    </div>
  );
}
