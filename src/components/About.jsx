import React from "react";
import { Link } from "react-router-dom";
import hiroshi from "../assets/images/hiroshi.jpg";
import houzz from "../assets/images/houzz.png";
import suvaco from "../assets/images/suvaco.png";
import sumika from "../assets/images/SuMiKa.png";
import aboutLinkPhilosophy from "../assets/images/about__link05.JPG";
import aboutLinkFlow from "../assets/images/about__link01.JPG";
import aboutLinkOverview from "../assets/images/about__link03.JPG";

const About = () => {
  return (
    <>
      {/* about section */}
      <section className="about" id="about">
        <div className="container layer">
          <section id="message">
            <div className="row">
              <div className="col-md-8 mx-auto text-center mb-5">
                <h6>Message</h6>
                <h2>代表挨拶</h2>
              </div>
            </div>
            <div className="row g-3">
              <div className="member card-effect">
                <div className="text-center member-card">
                  <img
                    src={hiroshi}
                    alt="tada-hiroshi"
                    data-micromodal-trigger="about-hiroshi"
                  />
                  <h5 className="mb-0 mt-4">多田 博</h5>
                  <p>一級建築士</p>
                  <a
                    data-micromodal-trigger="about-hiroshi"
                    className="btn btn-outline-dark py-3 px-5 mt-4"
                  >
                    More
                  </a>
                </div>
                <p className="about-intro">
                  はじめまして。多田建築設計事務所の多田博と申します。
                  <span>「シンプルに住まうことが豊かな人生をもたらす」</span>
                  ２０００年、多田建築設計事務所を設立しました。
                  ２０年経った現在まで、住宅は５０棟以上の住まいづくりに携わってきました。
                  しかし、単純計算すると、住宅設計は、年間3棟です。
                  多くても１年に６棟以上はお受けしていません。
                  この数字からおわかりの通り、決して大きな事務所ではありません。
                  それは、常に１件、１件を大切にお客様に寄り添うようにして丁寧に作り続け
                  ていきたいから。
                  今まで多くのお客様が、出来上がった住まいを心から気に入ってくださり、
                  仕事でもプライベートでも充実した人生を送っている喜びが、
                  少しずつ日本中に広まっていったのだと思っています。
                  素敵なみなさまともご縁をいただけますと嬉しく存じます。
                </p>
              </div>
            </div>
          </section>

          <section className="review" id="review">
            <div className="row">
              <div className="col-md-8 mx-auto text-center mb-5">
                <h6>REVIEW</h6>
                <h2>
                  HOUZZ <span> / </span> SUVACO <span> / </span> SUMIKA
                </h2>
              </div>
            </div>
            <div className="row review__flex">
              <div className="col-md-4">
                <a
                  href="https://www.houzz.jp/pro/arttada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={houzz} alt="suvaco" />
                </a>
                <a
                  href="https://www.houzz.jp/pro/arttada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark py-3"
                >
                  HOUZZ HP
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="https://suvaco.jp/profile/cmPdsAY9Xfa95Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={suvaco} alt="suvaco" />
                </a>
                <a
                  href="https://suvaco.jp/profile/cmPdsAY9Xfa95Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark py-3"
                >
                  SUVACO HP
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="https://sumika.me/pro/profile/tadakenntiku/works"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={sumika} alt="sumika" />
                </a>
                <a
                  href="https://sumika.me/pro/profile/tadakenntiku/works"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark py-3"
                >
                  SUMIKA HP
                </a>
              </div>
            </div>
          </section>

          {/* link ➡︎ 理念、事務所概要、設計の流れ */}
          <section className="link">
            <div className="row g-2 link__wrapper pb-5">
              <div className="col-md-4">
                <div className="link__item">
                  <img src={aboutLinkPhilosophy} alt=" " />
                  <Link to="/philosophy">
                    <div className="overlay about-philosophy center">
                      <div>
                        <h4>理念</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="link__item">
                  <img src={aboutLinkFlow} alt=" " />
                  <Link to="/flow">
                    <div className="overlay about-flow center">
                      <div>
                        <h4>設計の流れ</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="link__item">
                  <img src={aboutLinkOverview} alt=" " />
                  <Link to="/overview">
                    <div className="overlay about-overview center">
                      <div>
                        <h4>事務所概要</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row mt-5 button">
              <Link to="#top" className="btn btn-outline-dark py-3">
                TOPに戻る
              </Link>
            </div>
          </section>
        </div>

        {/* about-hiroshi modal */}
        <div
          className="modal micromodal-slide about-hiroshi"
          id="about-hiroshi"
          aria-hidden="true"
        >
          <div
            className="modal__overlay"
            //    tabindex="-1"
            data-micromodal-close
          >
            <div
              className="modal__container"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-1-title"
            >
              <header className="modal__header">
                <div className="modal__header__box">
                  <h2 className="modal__title" id="modal-1-title">
                    多田 博
                  </h2>
                  <h5>一級建築士</h5>
                </div>
                <button
                  className="modal__close"
                  aria-label="Close modal"
                  data-micromodal-close
                ></button>
              </header>
              <main className="modal__content" id="modal-1-content">
                <div className="container-fluid">
                  <div className="row">
                    <img src={hiroshi} />
                  </div>
                  <div className="row">
                    <ul>
                      <li className="modal__text">
                        多田建築設計事務所主宰 一級建築士
                        藤沢市都市計画審議会委員
                        大学1年の時、建築家アントニオ・ガウディに魅せられ建築の素晴らしさを知る。関東学院大学工学部建築学科卒業後、㈱GS建築研究所入社。多くの住宅設計に携わる。29歳の時、建築を志すきっかけとなったガウディの作品を見るためスペインを旅する。特にサクラダファミリアの荘厳さに圧倒され、建築の奥深さを知る。その後、公共建築に興味を持ち㈱日総建に入社。保養施設のコンペに当選し設計・監理までチーフとして携わる。福祉施設、集合住宅、資料館、劇場、図書館、学校等あらゆる公共の施設を次々とチームリーダーとして手がける。富山県「八尾町おわら資料館」では「富山県建築賞」を受賞。2001年に「多田建築設計事務所」を共同主宰とする為独立。設立後は数多くの住宅、診療所、二世帯住宅を多く手がける。風土に根ざした建築を常に目指し、独立前の豊かな経験をフルに活かし設計・監理に努める。現在、藤沢市の都市計画審議会委員に選出され、地域の代表としてまちづくりに携わる。東京都大田区生まれ
                      </li>
                    </ul>
                  </div>
                </div>
              </main>
              <footer className="modal__footer">
                <button
                  className="btn btn-outline-dark"
                  data-micromodal-close
                  aria-label="Close this dialog window"
                >
                  Close
                </button>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
