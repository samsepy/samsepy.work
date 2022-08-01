import { AppProps } from "next/app";
import "@/styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component }: AppProps): JSX.Element {
  return (
    <>
      <GoogleAnalytics strategy="lazyOnload" />
      <Component />
    </>
  );
}

export default MyApp;
