import { Poppins } from "@next/font/google";
import Footer from "../components/Footer";
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
      <body className={`bg-zinc-800/10 ${poppins.className}`}>
        <div className="bg-white max-w-7xl mx-auto lg:px-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
