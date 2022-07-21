import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (localStorage.colorThema !== "") {
      setMode(localStorage.colorThema);
      return;
    }
    if (isDarkMode()) {
      setMode("dark");
    }
  });

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

  return (
    <div className={currentMode()}>
      <div className={styles.container}>
        <Image
          priority
          src="/images/icon.png"
          className={styles.icon}
          height={200}
          width={200}
          alt="icon"
        />
        <h1 className={styles.title}>samsepy</h1>
        <p className={styles.bio}>
          1995年8月30日生まれ、{currentAge()}歳。
          <br />
          リモートでエンジニアをやっている。 <br />
          海外で暮らしたい。
        </p>
        <h2>Profile</h2>
        <ul className={styles.list}>
          <li>
            <span className={utilStyles.mr2}>
              <span>Name</span>:
            </span>
            <wbr />
            <span>Hajime Todo (東度 基)</span>
          </li>
          <li>
            <span className={utilStyles.mr2}>
              <span>Screen Name</span>:
            </span>
            <wbr />
            <span>todo, samsepy</span>
          </li>
          <li>
            <span className={utilStyles.mr2}>
              <span>Job</span>:
            </span>
            <wbr />
            <span>Software Engineer</span>
          </li>
          <li>
            <span>Career</span>:
            <ul className={styles.list}>
              <li>
                <span className={utilStyles.mr2}>2014-2018</span>
                <wbr />
                <span>
                  <a href="https://www.kanazawa-it.ac.jp/">
                    Kanazawa Institute of Technology
                  </a>
                </span>
              </li>
              <li>
                <span className={utilStyles.mr2}>2016-2017</span>
                <wbr />
                <span>
                  <a href="https://www.souya.biz/">SOUYA Co.,Ltd.</a>
                </span>
              </li>
              <li>
                <span className={utilStyles.mr2}>2018-2019</span>
                <wbr />
                <span>
                  <a href="https://open8.com/">OPEN8 Inc.</a>
                </span>
              </li>
              <li>
                <span className={utilStyles.mr2}>Currently</span>
                <wbr />
                <span>
                  <a href="https://entershare.jp/">entershare Inc.</a>
                </span>
              </li>
            </ul>
          </li>
        </ul>
        <h2>Skills</h2>
        <ul className={styles.list}>
          <li>
            <span className={utilStyles.mr2}>
              <span>Programming Languages</span>:
            </span>
            <wbr />
            <span>
              <a href="https://www.ruby-lang.org/">Ruby</a>,
              <a href="https://www.python.org/">Python</a>
            </span>
          </li>
          <li>
            <span className={utilStyles.mr2}>
              <span>Frameworks</span>:
            </span>
            <wbr />
            <span>
              <a href="https://rubyonrails.org/">Ruby on Rails</a>
            </span>
          </li>
          <li>
            <span className={utilStyles.mr2}>
              <span>Databases</span>:
            </span>
            <wbr />
            <span>
              <a href="https://www.mysql.com/">MySQL</a>
            </span>
          </li>
          <li>
            <span className={utilStyles.mr2}>
              <span>Markup Languages</span>:
            </span>
            <wbr />
            <span>
              <a href="https://en.wikipedia.org/wiki/HTML5/">HTML5</a> +
              <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3">
                CSS3
              </a>
            </span>
          </li>
          <li>
            <span className={utilStyles.mr2}>
              <span>Environments</span>:
            </span>
            <wbr />
            <span>
              <a href="https://www.apple.com/macos/">macOS</a>,
              <a href="https://git-scm.com/">Git</a>,
              <a href="https://github.com/">GitHub</a>
            </span>
          </li>
        </ul>
        <h2>Works</h2>
        <h3>
          <a href="https://github.com/samsepy/banhst.git/">banhst</a>
        </h3>
        <p>
          任意のホストの通信を強制的に遮断するCLIツール。SNS等で消耗している現代の若者におすすめ。
        </p>
        <h2>Links</h2>
        <ul className={styles.list}>
          <li>
            <a href="https://github.com/samsepy/">GitHub</a>
          </li>
          <li>
            <a href="https://www.facebook.com/hajime.todo/">Facebook</a>
          </li>
          <li>
            <a href="https://line.me/ti/p/pGoAZ-zuEH/">LINE</a>
          </li>
          <li>
            <a href="https://scrapbox.io/samsepy/">Scrapbox</a>
          </li>
        </ul>
        <h2>Pays</h2>
        <p>請求や送金する際にこちらを使ってもらうと助かります。</p>
        <ul className={styles.list}>
          <li>
            <span className={utilStyles.mr2}>
              <span>Kyash</span>:
            </span>
            <wbr />
            <span>@samsepy</span>
          </li>
          <li>
            <span className={utilStyles.mr2}>
              <span>LINE Pay</span>:
            </span>
            <wbr />
            <span>@todo1995</span>
          </li>
          <li>
            <span className={utilStyles.mr2}>
              <span>PayPay</span>:
            </span>
            <wbr />
            <span>@samsepy</span>
          </li>
          <li>
            <span className={utilStyles.mr2}>
              <span>NEM</span>:
            </span>
            <wbr />
            <span>NAVLPQ-TXNVHP-GSXUE7-NEH5N4-QMPH2X-Q5VZ65-OWFI</span>
          </li>
        </ul>
        <h2>Contacts</h2>
        <ul className={styles.list}>
          <li>
            <a href="tel:+819062734866">Tel</a>
          </li>
          <li>
            <a href="mailto:htodo@protonmail.ch/">Mail</a>
          </li>
          <li>
            <a href="https://t.me/samsepy/">Telegram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/hajime.todo/">Messenger</a>
          </li>
        </ul>
        <footer>
          <p>&copy; 2019-2022 Hajime Todo</p>
        </footer>
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
    </div>
  );
}
