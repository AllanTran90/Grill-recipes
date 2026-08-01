import { Oswald } from "next/font/google";
import "./globals.css";
import SiteNav from "./components/SiteNav";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Grill",
  description: "Grill är en enkel och smidig grillapplikation, med recept och tips för perfekta grillkvällar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className={oswald.variable}>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
