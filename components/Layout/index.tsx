import { Poppins } from 'next/font/google'
import Header from "../Header";
import Footer from "../Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <main className={poppins.className}>
      <Header />
     {children}
      <Footer />
    </main>
  );
}
