import "./App.css";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SSR Next Example</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
