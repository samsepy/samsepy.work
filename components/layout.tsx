import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useState, useEffect } from "react";

import { currentAge } from "../lib/calcs";
import styles from "../styles/Layout.module.css";

import Footer from "./footer";

export default function Layout({
  children,
  title = "samsepy",
  description = `1995年8月30日生まれ、${currentAge()}歳。リモートでエンジニアをやっている。海外で暮らしたい。`,
  url = "samsepy.work",
  imgUrl = "https://samsepy.work/icon.jpeg",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  url?: string;
  imgUrl?: string;
}) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (localStorage.colorThema !== "") {
      setMode(localStorage.colorThema);
      return;
    }
    if (isDarkMode()) {
      setMode("dark");
    }
  }, []);

  function currentSwitch(): string {
    if (mode === "dark") {
      return styles.light;
    } else {
      return styles.dark;
    }
  }

  function currentMode(): string {
    if (mode === "dark") {
      return styles.dark;
    } else {
      return styles.light;
    }
  }

  function isDarkMode() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={currentMode()}>
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
        <main>{children}</main>
        <Footer />
      </div>
      <span
        className={`${currentSwitch()} ${styles.floatingButton} ${
          styles.modeSwitchButton
        }`}
        onClick={() =>
          setMode(() => {
            if (localStorage.colorThema === "light") {
              localStorage.colorThema = "dark";
              return "dark";
            } else {
              localStorage.colorThema = "light";
              return "light";
            }
          })
        }
      >
        <FontAwesomeIcon
          icon={faLightbulb}
          className={styles.floatingButtonIcon}
        />
      </span>
    </div>
  );
}
