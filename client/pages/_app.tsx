import "../styles/globals.css";
import type { AppProps } from "next/app";
import Error from "next/error";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
