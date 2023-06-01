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

  // direct browser to top right away
// if (window.location.hash)
// scroll(0,0);
// // takes care of some browsers issue
// setTimeout(function(){scroll(0,0);},1);

// $(function(){
// //your current click function
// $('.scroll').on('click',function(e){
// e.preventDefault();
// $('html,body').animate({
//     scrollTop:$($(this).attr('href')).offset().top + 'px'
// },1000,'swing');
// });

// // if we have anchor on the url (calling from other page)
// if(window.location.hash){
// // smooth scroll to the anchor id
// $('html,body').animate({
//     scrollTop:$(window.location.hash).offset().top + 'px'
//     },1000,'swing');
// }
// });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
