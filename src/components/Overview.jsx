import React, { useState } from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import bgOverviewVideo from "../assets/images/Pexels Videos 1542008.mp4";
// import bgOverviewVideo from "../assets/images/pexels-kei-scampa-6114303.mp4";
import hiroshi from "../assets/images/hiroshi.jpg";
import aboutLinkPhilosophy from "../assets/images/about__link05.JPG";
import aboutLinkFlow from "../assets/images/about__link01.JPG";
import HiroshiModal from "./Modal/HiroshiModal";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";

const Overview = () => {
  const [showModal, setShowModal] = useState(false);

  const ShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* overview section */}
      <section className="overview">
        <div className="overview__wrapper">
          <video
            src={bgOverviewVideo}
            className="videoVolume"
            type="video/mp4"
            //   webkit-playsinline
            //   playsinline
            autoPlay
            loop
            muted
          ></video>
          <div className="overview__text__wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-10 link__position">
                  <h3 className="link__position__title current">事務所概要</h3>
                </div>
              </div>

              <section className="overview__card">
                <div className="row">
                  <div className="overview__flex">
                    <div className="member-card text-center">
                      <img
                        src={hiroshi}
                        alt="tada-hiroshi"
                        onClick={ShowModal}
                      />
                      <h5 className="mb-0 mt-4">多田 博</h5>
                      <p>一級建築士</p>
                      <a
                        className="btn btn-outline-dark py-2 px-4 mt-1"
                        onClick={ShowModal}
                      >
                        More
                      </a>
                    </div>
                    <div className="overview__text">
                      <ul>
                        <li>
                          ■ 一級建築士事務所 : 多田建築設計事務所
                          神奈川県知事登録 第 18263 号 管理建築士
                        </li>
                        <li>
                          ■ 湘南台オフィス : 〒252-0804
                          神奈川県藤沢市湘南台5-1-3-607 tel:0466-42-1793
                          fax:0466-42-1792
                        </li>
                        <li>
                          ■ 業務内容 建築設計・監理・企画設計・家具デザイン
                        </li>
                        <li>
                          ■ 家づくりをお考えの方 :
                          まずはお気軽にお問い合わせください。店舗、医院、商業施設等の設計・監理も致しております。お気軽にご相談ください。
                          お手紙、メール: sekkei@arttada.com、電話:0466-42-1793
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="work">
                <div className="row">
                  <div className="col-md-8 mx-auto mb-5">
                    <Accordion allowZeroExpanded>
                      <AccordionItem className="accordion__item">
                        <AccordionItemHeading className="accordion__title">
                          <AccordionItemButton className="accordion__btn">
                            注文住宅
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion__content">
                          <div className="row">
                            <div className="col-md-8">
                              <h4 className="accordion__service">
                                対応サービス
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <h5>物件・不動産</h5>
                              <p>物件探し</p>
                            </div>
                            <div className="col-md-6">
                              <h5>現地調査</h5>
                              <p>物件申し込み前の現地調査可能</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <h5>打ち合わせ・プランニング</h5>
                              <ul>
                                <li>ご自宅での打ち合わせ可能</li>
                                <li>建材・住宅設備のショールームに同行可能</li>
                                <li>代表自らが顧客対応</li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <h5>施工</h5>
                              <ul>
                                <li>施主支給(材料持ち込み)の相談が可能</li>
                                <li>防音室の相談が可能</li>
                                <li>混構造の相談が可能</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem className="accordion__item">
                        <AccordionItemHeading className="accordion__title">
                          <AccordionItemButton className="accordion__btn">
                            リノベーション
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion__content">
                          <div className="row">
                            <div className="col-md-8">
                              <h4 className="accordion__work">対応可能業務</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-8">
                              <ul>
                                <li>戸建リノベーション</li>
                                <li>マンションリノベーション</li>
                                <li>部分リフォーム</li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-8">
                              <h4 className="accordion__service">
                                対応サービス
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <h5>物件・不動産</h5>
                              <p>物件探し</p>
                            </div>
                            <div className="col-md-6">
                              <h5>現地調査</h5>
                              <p>物件申し込み前の現地調査可能</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <h5>打ち合わせ・プランニング</h5>
                              <ul>
                                <li>ご自宅での打ち合わせ可能</li>
                                <li>設計のみの依頼も相談可能</li>
                                <li>内装コーディネート (施工含まず) も提案</li>
                                <li>2世帯住宅化リノベの相談可能</li>
                                <li>建材・住宅設備のショールームに同行可能</li>
                                <li>代表自らが顧客対応</li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <h5>施工</h5>
                              <ul>
                                <li>施主支給 (材料持ち込み) の相談が可能</li>
                                <li>施主施工 (DIY) の相談が可能</li>
                                <li>オーダーキッチン・収納家具の造作</li>
                                <li>家具(インテリア家具) の造作</li>
                                <li>防音室の相談が可能</li>
                                <li>混構造の相談が可能</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem className="accordion__item">
                        <AccordionItemHeading className="accordion__title">
                          <AccordionItemButton className="accordion__btn">
                            インテリア <span> / </span> エクステリア
                            <span> / </span> 造園
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion__content">
                          <div className="row">
                            <div className="col-md-8">
                              <h4 className="accordion__work">対応可能業務</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-8">
                              <ul>
                                <li>家具デザイン</li>
                                <li>インテリアデザイン</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </section>

              <section className="area">
                <div className="row">
                  <div className="col-md-8 mx-auto text-center mb-5">
                    <h6>Correspondence area</h6>
                    <h2>対応エリア</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mx-auto text-center">
                    <p>
                      東京都, 神奈川県, 茨城県, 栃木県, 群馬県, 埼玉県, 千葉県,
                      山梨県, 長野県, 岐阜県, 静岡県, 愛知県の全12エリア
                    </p>
                  </div>
                </div>
              </section>

              <section className="meeting">
                <div className="row">
                  <div className="col-md-8 mx-auto text-center mb-5">
                    <h6>Meeting</h6>
                    <h2>打ち合わせ・面談</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 mx-auto text-center">
                    <p>
                      <span>zoomなどのオンライン面談可能 。</span>
                      <br />
                      お気軽にお問い合わせください。お問い合わせはこちら。
                      <br />
                      メール : sekkei@arttada.com 、電話 : 0466-42-1793
                    </p>
                  </div>
                </div>
              </section>

              <section className="access">
                <div className="row">
                  <div className="col-md-8 mx-auto text-center mb-5">
                    <h6>ACCESS</h6>
                    <h2>事務所へのアクセス</h2>
                  </div>
                </div>

                <div className="row">
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.283065225212!2d139.46412211744385!3d35.39823360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185110cfb5be71%3A0x7c39261a5844c9be!2z5aSa55Sw5bu656-J6Kit6KiI5LqL5YuZ5omA!5e0!3m2!1sja!2sjp!4v1655113981355!5m2!1sja!2sjp"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></Iframe>
                </div>
                <div className="row mt-5 button">
                  <a
                    href="https://www.google.com/maps/place/%E5%A4%9A%E7%94%B0%E5%BB%BA%E7%AF%89%E8%A8%AD%E8%A8%88%E4%BA%8B%E5%8B%99%E6%89%80/@35.398238,139.4641221,17z/data=!3m2!4b1!5s0x6018516ada820a3f:0x833148c052dc1390!4m5!3m4!1s0x60185110cfb5be71:0x7c39261a5844c9be!8m2!3d35.3982336!4d139.4663108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark py-3"
                  >
                    Googlemap で表示
                  </a>
                </div>
              </section>

              {/* link ➡︎ 理念、事務所概要、設計の流れ */}
              <section className="link">
                <div className="row g-5 link__wrapper py-5 d-flex justify-content-center">
                  <div className="col-md-4">
                    <div className="link__item">
                      <img src={aboutLinkPhilosophy} alt="aboutPhilophyImg" />
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
                      <img src={aboutLinkFlow} alt="aboutFlowImg" />
                      <Link to="/flow">
                        <div className="overlay about-flow center">
                          <div>
                            <h4>設計の流れ</h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="row mt-5 button">
                  <Link to="/" className="btn btn-outline-dark py-3">
                    Toppage に戻る
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="scrolldown4">
          <span>Scroll</span>
        </div>

        {/* about-hiroshi modal */}
        <div
          className="modal micromodal-slide"
          id="about-hiroshi"
          aria-hidden="true"
        >
          <div className="modal__overlay" data-micromodal-close>
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
                    <div className="col-md-10">
                      <img src={hiroshi} alt="hiroshiImg" />
                    </div>
                  </div>
                  <div className="row">
                    <ul>
                      <li className="modal__text">
                        多田建築設計事務所主宰 一級建築士
                        藤沢市都市計画審議会委員
                        大学1年の時、建築家アントニオ・ガウディに魅せられ建築の素晴らしさを知る。関東学院大学工学部建築学科卒業後、㈱GS建築研究所入社。多くの住宅設計に携わる。29歳の時、建築を志すきっかけとなったガウディの作品を見るためスペインを旅する。特にサクラダファミリアの荘厳さに圧倒され、建築の奥深さを知る。その後、公共建築に興味を持ち㈱日総建に入社。保養施設のコンペに当選し設計・監理までチーフとして携わる。福祉施設、集合住宅、資料館、劇場、図書館、学校等あらゆる公共の施設を次々とチームリーダーとして手がける。富山県「八尾町おわら資料館」では「富山県建築賞」を受賞。2001年に「多田建築設計事務所」を共同主宰とする為独立。設立後は数多くの住宅、診療所、二世帯住宅を多く手がける。風土に根ざした建築を常に目指し、独立前の豊かな経験をフルに活かし設計・監理に努める。現在、藤沢市の都市計画審議会委員に選出され、地域の代表としてまちづくりに携わる。東京都大田区生まれ
                      </li>
                      <li className="modal__sns">
                        <div>
                          Share:
                          <a href="https://twitter.com/ONEOKROCK_japan">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="https://www.facebook.com/ONEOKROCK">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="https://www.instagram.com/oneokrockofficial/">
                            <i className="bi bi-instagram"></i>
                          </a>
                        </div>

                        <button
                          className="modal__close"
                          aria-label="Close modal"
                          data-micromodal-close
                        ></button>
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
      <HiroshiModal showFlag={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Overview;
