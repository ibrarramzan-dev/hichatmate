"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@mui/material";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["900"],
});

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <div className="Home-Banner">
          <div>
            <p className={`Home-Banner-text ${dm_sans.className}`}>
              Make the next move
            </p>

            <br />
            <Button variant="contained">Download now</Button>
            <br />
            <br />
            <Link href="/registration">
              <Button variant="contained">SIGN UP</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
