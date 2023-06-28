import GlobalStyle from "../styles";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <h2>
        <Link href="/volumes">All Volumes</Link>
      </h2>
    </>
  );
}
