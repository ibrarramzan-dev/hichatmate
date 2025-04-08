import { Roboto } from "next/font/google";
import "../styles/app.css";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "Twieezi",
  description: "connect and match with your favorite people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
