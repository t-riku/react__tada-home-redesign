import React, { useState } from "react";
import { Link } from "react-router-dom";
import hiroshi from "../assets/images/hiroshi3.JPG";
import houzz from "../assets/images/houzz.jpeg";
import suvaco from "../assets/images/suvaco.jpeg";
import sumika from "../assets/images/SuMiKa.jpeg";
import aboutLinkPhilosophy from "../assets/images/about__link05.jpeg";
import aboutLinkFlow from "../assets/images/about__link01.jpeg";
import aboutLinkOverview from "../assets/images/about__link03.jpeg";
import HiroshiModal from "./Modal/HiroshiModal";
import Contact from "./Contact";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const ShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* about section */}
      <section className="about" id="about">
        <div className="container layer">
          <section id="message">
            <div className="row">
              <div className="col-md-8 mx-auto text-center mb-5">
                <h6>Message</h6>
                <h2>ご挨拶</h2>
              </div>
            </div>
            <div className="row g-3">
              <div className="member card-effect">
                <div className="text-center member-card">
                  <a onClick={ShowModal} className="hiroshi__img__a" href="#/">
                    <img src={hiroshi} alt="tada-hiroshi" loading="lazy" />
                  </a>
                  <h5 className="mb-0 mt-4">多田 博</h5>
                  <p>一級建築士</p>
                  <a
                    onClick={ShowModal}
                    className="btn btn-outline-dark py-3 px-5 mt-4"
                    href="#/"
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

          {/* link ➡︎ 理念、事務所概要、設計の流れ */}
          <section className="aboutLink link">
            <div className="row">
              <div className="col-md-8 mx-auto text-center mb-5">
                <h6>Link</h6>
                <h2>
                  理念 <span> / </span> 設計の流れ <span> / </span> 事務所概要
                </h2>
              </div>
            </div>
            <div className="row g-2 link__wrapper aboutLink__wrapper pb-5">
              <div className="col-md-4">
                <div className="link__item">
                  <img
                    src={aboutLinkPhilosophy}
                    alt="philosophy_image"
                    loading="lazy"
                  />
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
                  <img src={aboutLinkFlow} alt="flow_image" loading="lazy" />
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
                  <img
                    src={aboutLinkOverview}
                    alt="overview_image"
                    loading="lazy"
                  />
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
                <img src={houzz} alt="suvaco" loading="lazy" />
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
                <img src={suvaco} alt="suvaco" loading="lazy" />
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
                <img src={sumika} alt="sumika" loading="lazy" />
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

          <Contact />

          {/* link ➡︎ 理念、事務所概要、設計の流れ */}
          <section className="topBackLink">
            <div className="row mt-5 button topBackLink-border">
              <a href="#top" className="btn btn-outline-dark py-3">
                TOPに戻る
              </a>
            </div>
          </section>
        </div>
      </section>
      <HiroshiModal showFlag={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default About;
