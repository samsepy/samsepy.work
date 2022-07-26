import Image from "next/future/image";
import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { currentAge } from "../lib/calcs";
import { event } from "nextjs-google-analytics";

export default function Home() {
  function trackEventClick(category: string) {
    event("click", {
      category: category,
      label: "click",
    });
  }

  return (
    <Layout>
      <Image
        priority
        src="/images/icon.jpeg"
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
            <a href="https://www.ruby-lang.org/">Ruby</a>,{" "}
            <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>,{" "}
            <a href="https://www.ruby-lang.org/">Python</a>
          </span>
        </li>
        <li>
          <span className={utilStyles.mr2}>
            <span>Frameworks</span>:
          </span>
          <wbr />
          <span>
            <a href="https://rubyonrails.org/">Ruby on Rails</a>,{" "}
            <a href="https://reactjs.org/">React</a>,{" "}
            <a href="https://vuejs.org/">Vue.js</a>,{" "}
            <a href="https://nextjs.org/">Next.js</a>,{" "}
            <a href="https://nuxtjs.org/">Nuxt.js</a>
          </span>
        </li>
        <li>
          <span className={utilStyles.mr2}>
            <span>Databases</span>:
          </span>
          <wbr />
          <span>
            <a href="https://www.mysql.com/">MySQL</a>,{" "}
            <a href="https://www.postgresql.org/">PostgreSQL</a>,{" "}
            <a href="https://www.mongodb.com/">MongoDB</a>
          </span>
        </li>
        <li>
          <span className={utilStyles.mr2}>
            <span>Markup Languages</span>:
          </span>
          <wbr />
          <span>
            <a href="https://html.spec.whatwg.org/multipage/">
              HTML Living Standard
            </a>
            ,{" "}
            <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3">
              CSS3
            </a>
            , <a href="https://sass-lang.com/">Sass</a>
          </span>
        </li>
        <li>
          <span className={utilStyles.mr2}>
            <span>Cloud Services</span>:
          </span>
          <wbr />
          <span>
            <a href="https://aws.amazon.com/">AWS</a>
          </span>
        </li>
        <li>
          <span className={utilStyles.mr2}>
            <span>Web Servers</span>:
          </span>
          <wbr />
          <span>
            <a href="https://www.nginx.com/">Nginx</a>,{" "}
            <a href="https://httpd.apache.org/">Apache</a>
          </span>
        </li>
        <li>
          <span className={utilStyles.mr2}>
            <span>Environments</span>:
          </span>
          <wbr />
          <span>
            <a href="https://www.apple.com/macos/">macOS</a>,{" "}
            <a href="https://git-scm.com/">Git</a>,{" "}
            <a href="https://github.com/">GitHub</a>
          </span>
        </li>
      </ul>
      <h2>Works</h2>
      <h3>
        <a
          href="https://github.com/samsepy/banhst.git/"
          onClick={() => trackEventClick("github")}
        >
          banhst
        </a>
      </h3>
      <p>
        任意のホストの通信を強制的に遮断するCLIツール。SNS等で消耗している現代の若者におすすめ。
      </p>
      <h2>Links</h2>
      <ul className={styles.list}>
        <li>
          <a
            href="https://github.com/samsepy/"
            onClick={() => trackEventClick("github")}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/hajime.todo/"
            onClick={() => trackEventClick("facebook")}
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://scrapbox.io/samsepy/"
            onClick={() => trackEventClick("scrapbox")}
          >
            Scrapbox
          </a>
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
          <a href="tel:+819062734866" onClick={() => trackEventClick("tel")}>
            Tel
          </a>
        </li>
        <li>
          <a
            href="mailto:samsepylot@gmail.com/"
            onClick={() => trackEventClick("mail")}
          >
            Mail
          </a>
        </li>
        <li>
          <a
            href="https://line.me/ti/p/pGoAZ-zuEH/"
            onClick={() => trackEventClick("line")}
          >
            LINE
          </a>
        </li>
        <li>
          <a
            href="https://t.me/samsepy/"
            onClick={() => trackEventClick("telegram")}
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/hajime.todo/"
            onClick={() => trackEventClick("messenger")}
          >
            Messenger
          </a>
        </li>
      </ul>
    </Layout>
  );
}
