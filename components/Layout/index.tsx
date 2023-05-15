import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <main className="">
      <Header />
     {children}
      <Footer />
    </main>
  );
}
