import Image from "next/image";

import Layout from "@/components/layout";
import { currentAge } from "@/lib/calcs";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Image
        priority
        src="/images/icon.jpeg"
        className="mx-auto rounded-full mb-6"
        height={200}
        width={200}
        alt="icon"
      />
      <h1 className="text-center">samsepy</h1>
      <p className="text-center mb-6">
        1995年8月30日生まれ、{currentAge()}歳。
        <br />
        リモートでエンジニアをやっている。 <br />
        海外で暮らしたい。
      </p>
      <div className="mb-5">
        <h2>Profile</h2>
        <ul>
          <li>
            <span className="mr-2">
              <span>Name</span>:
            </span>
            <wbr />
            <span>Hajime Todo (東度 基)</span>
          </li>
          <li>
            <span className="mr-2">
              <span>Screen Name</span>:
            </span>
            <wbr />
            <span>todo, samsepy</span>
          </li>
          <li>
            <span className="mr-2">
              <span>Job</span>:
            </span>
            <wbr />
            <span>Software Engineer</span>
          </li>
          <li>
            <span>Career</span>:
            <ul>
              <li>
                <span className="mr-2">2014-2018</span>
                <wbr />
                <span>
                  <a href="https://www.kanazawa-it.ac.jp/">
                    Kanazawa Institute of Technology
                  </a>
                </span>
              </li>
              <li>
                <span className="mr-2">2016-2017</span>
                <wbr />
                <span>
                  <a href="https://www.souya.biz/">SOUYA Co.,Ltd.</a>
                </span>
              </li>
              <li>
                <span className="mr-2">2018-2019</span>
                <wbr />
                <span>
                  <a href="https://open8.com/">OPEN8 Inc.</a>
                </span>
              </li>
              <li>
                <span className="mr-2">2019-2022</span>
                <wbr />
                <span>
                  <a href="https://entershare.jp/">entershare Inc.</a>
                </span>
              </li>
              <li>
                <span className="mr-2">Currently</span>
                <wbr />
                <span>Freelance Engineer</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <h2>Skills</h2>
        <ul>
          <li>
            <span className="mr-2">
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
            <span className="mr-2">
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
            <span className="mr-2">
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
            <span className="mr-2">
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
            <span className="mr-2">
              <span>Cloud Services</span>:
            </span>
            <wbr />
            <span>
              <a href="https://aws.amazon.com/">AWS</a>
            </span>
          </li>
          <li>
            <span className="mr-2">
              <span>Web Servers</span>:
            </span>
            <wbr />
            <span>
              <a href="https://www.nginx.com/">Nginx</a>,{" "}
              <a href="https://httpd.apache.org/">Apache</a>
            </span>
          </li>
          <li>
            <span className="mr-2">
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
      </div>
      <div className="mb-5">
        <h2>Works</h2>
        <h3>
          <a href="https://github.com/samsepy/banhst.git/">banhst</a>
        </h3>
        <p>
          任意のホストの通信を強制的に遮断するCLIツール。SNS等で消耗している現代の若者におすすめ。
        </p>
      </div>
      <div className="mb-5">
        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://github.com/samsepy/">GitHub</a>
          </li>
          <li>
            <a href="https://www.facebook.com/hajime.todo/">Facebook</a>
          </li>
          <li>
            <a href="https://scrapbox.io/samsepy/">Scrapbox</a>
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <h2>Pays</h2>
        <p>請求や送金する際にこちらを使ってもらうと助かります。</p>
        <ul>
          <li>
            <span className="mr-2">
              <span>Kyash</span>:
            </span>
            <wbr />
            <span>@samsepy</span>
          </li>
          <li>
            <span className="mr-2">
              <span>LINE Pay</span>:
            </span>
            <wbr />
            <span>@todo1995</span>
          </li>
          <li>
            <span className="mr-2">
              <span>PayPay</span>:
            </span>
            <wbr />
            <span>@samsepy</span>
          </li>
          <li>
            <span className="mr-2">
              <span>NEM</span>:
            </span>
            <wbr />
            <span>NAVLPQ-TXNVHP-GSXUE7-NEH5N4-QMPH2X-Q5VZ65-OWFI</span>
          </li>
        </ul>
      </div>
      <div>
        <h2>Contacts</h2>
        <ul>
          <li>
            <a href="tel:+819062734866">Tel</a>
          </li>
          <li>
            <a href="mailto:samsepylot@gmail.com/">Mail</a>
          </li>
          <li>
            <a href="https://line.me/ti/p/pGoAZ-zuEH/">LINE</a>
          </li>
          <li>
            <a href="https://t.me/samsepy/">Telegram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/hajime.todo/">Messenger</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
