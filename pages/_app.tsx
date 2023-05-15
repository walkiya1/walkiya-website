import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NProgress from "nprogress"; // import the nprogress module
import "nprogress/nprogress.css"; // import the nprogress CSS

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.events && router.events.on) {
    // show the loader on route change
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    // hide the loader when route changes complete
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    // hide the loader when route changes fail
    router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
