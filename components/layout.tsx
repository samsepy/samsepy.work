import Head from "next/head";
import Footer from "@/components/footer";
import { currentAge } from "@/lib/calcs";
import styles from "@/styles/Layout.module.css";

export default function Layout({
  children,
  title = "☆★☆ SAMSEPY'S HOMEPAGE ☆★☆",
  description = `1995年8月30日生まれ、${currentAge()}歳。リモートでエンジニアをやっている。海外で暮らしたい。`,
  url = "samsepy.work",
  imgUrl = "https://samsepy.work/icon.jpeg",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  url?: string;
  imgUrl?: string;
}): JSX.Element {
  return (
    <div style={{minHeight: '100vh'}}>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
          <meta name="description" content={description} />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={imgUrl} />
          <link rel="canonical" href={url} />
        </Head>
        <main className="mb-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
