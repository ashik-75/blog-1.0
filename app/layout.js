import { Poppins } from "@next/font/google";
import Header from "../components/Header";
import "../styles/globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={`${poppins.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
