import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar.component";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Visual Inventory",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
