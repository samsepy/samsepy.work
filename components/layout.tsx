import Head from "next/head";

function currentAge(): number {
  const birthday = new Date(1995, 8 - 1, 30);
  const today = new Date();
  const thisYearBirthDay = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate(),
  );
  const age = today.getFullYear() - birthday.getFullYear();
  return today < thisYearBirthDay ? age - 1 : age;
}

export default function Layout({
  children,
  title = "samsepy",
  description = `1995年8月30日生まれ、${currentAge()}歳。リモートでエンジニアをやっている。海外で暮らしたい。`,
  url = "samsepy.work",
  imgUrl = "https://samsepy.work/icon.jpeg",
}: {
  children: React.ReactNode;
  title?: string;
  descr?: string;
  url?: string;
  imgUrl?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imgUrl} />
        <link rel="canonical" href={url} />
      </Head>
      <main>{children}</main>
    </>
  );
}
