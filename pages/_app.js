import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

function isDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default MyApp;
