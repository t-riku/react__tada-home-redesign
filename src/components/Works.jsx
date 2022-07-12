import React, { useState } from "react";
import { useEffect } from "react";
import db from "../firebase";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    // データベースからデータを取得する
    const workData = collection(db, "works");
    getDocs(workData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setWorks(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });

    // リアルタイムで取得
    onSnapshot(workData, (work) => {
      setWorks(work.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);
  return (
    <>
      {/* works section */}
      <section className="works" id="works">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <h6>WORKS</h6>
              <h2>住宅事例</h2>
            </div>
          </div>

          {/* home section */}
          <section className="home row g-3 mt-1" id="home">
            <h4 className="text-center">~ 住宅 ~</h4>
            <div className="works__wrapper text-center">
              {/* <div className="works__item card-effect">
                <a data-micromodal-trigger="modal-work01">
                  <img src="./assets/images/accom01-01.jpg" alt="" />
                </a>
                <h5 className="mb-0 mt-4">KATADA Lodge&Villa</h5>
                <p>～和の素材と技を結集した宿泊施設~</p>
                <a
                  data-micromodal-trigger="modal-work01"
                  className="btn btn-outline-dark py-2 px-4 mt-1"
                >
                  More
                </a>
              </div> */}
              {works.map((work) =>
                work.type === "house" ? (
                  <div className="works__item card-effect">
                    <a data-micromodal-trigger="modal-work01">
                      <img src={work.img} alt={work.title} />
                    </a>
                    <h5 className="mb-1">{work.title}</h5>
                    <p>{work.subTitle}</p>
                    <a
                      data-micromodal-trigger="modal-work01"
                      className="btn btn-outline-dark py-2 px-4 mt-1"
                    >
                      More
                    </a>
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
            {/* modal area */}
            <div
              className="modal micromodal-slide modal-work modal-work01"
              id="modal-work01"
              aria-hidden="true"
            >
              <div
                className="modal__overlay"
                // tabindex="-1"
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
                        KATADA Lodge&Villa
                      </h2>
                      <h5 className="modal__subTitle">
                        ～和の素材と技を結集した宿泊施設~
                      </h5>
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
                        <div className="modal__flex">
                          <img src="./assets/images/accom01-01.jpg" />

                          <img src="./assets/images/accom01-02.jpg" />

                          <img src="./assets/images/accom01-03.jpg" />
                        </div>
                      </div>
                      <div className="row">
                        <ul>
                          <li className="modal__text">
                            2019 三重県津市 木造平屋建て　ＫＥＳ工法
                            青い空が澄み渡る三重県津市の丘陵にある津カントリー倶楽部。その18番ホール脇に建つKATADA
                            Lodge&Villaは、まるで波打つ海に浮かぶ3槽の船のように佇む。
                            ツインルーム４室のロッジ棟、食事や団らんを楽しむラウンジ棟、１８番ホールの眺めを楽しめるヴィラの３棟からなる。
                            ゴルフ場のアンジュレーション（高低差）を活かした配置で、各建物の間に心地よいリズム感をもたらしている。
                            外壁は神宮備林のある岐阜県加子母村産のヒノキを使用。建具はすべて木製建具だ。ライティングデスクや椅子、ベッド架台などのすべての家具は地元の家具職人の作品を採用した。また材料は木、紙、土、草などの自然素材を厳選。設計の段階から、現地まで足を運び、職人たちに会い、納得したものだけをチョイスしている。
                            プラスチックやアルミの既製品を使用することを極力回避した。何よりも職人の手仕事、勘を大切にし、その仕事ぶりを最大限に建築意匠に調和させている。
                            すべての建物の窓は、ピクチャーウィンドウとして美しい景色を切り取る。そこに佇む人々の目を楽しませ心を満たすように設計している。
                            ヴィラは１８番ホールを眼下とする丘に配置。浴室、居間、寝室を大きな木製建具で開放している。軒の深いテラスを張り出し、浮遊感をもたせている。そこからは、目の前に１８番ホールの雄大な景色が広がる。
                            ラウンジは夕景を意識し、オレンジ色に染まった景色と馴染むよう、室内に使用する木の分量と配置を吟味した。まるで行灯の中に佇んでいるような感覚になる。
                            ロッジは陶芸家/川喜田半泥子のアトリエのある長谷山と対峙しているのが最大の特徴だ。
                            山の稜線と屋根勾配を合わせ、自然と人工物が共鳴しているかのような形態をとっている。建物中央のラボは、宿泊客の共有スペース。両側はガラスの建具で仕切られ、山に抜けるヴォイドとなる。
                          </li>
                          <li className="modal__photoGallery">
                            <h4>Photo Gallery</h4>
                            <div className="modal__flex">
                              <img src="./assets/images/accom01-01.jpg" />

                              <img src="./assets/images/accom01-02.jpg" />

                              <img src="./assets/images/accom01-03.jpg" />

                              <img src="./assets/images/KATADA04.jpg" />
                            </div>
                          </li>
                          <li className="modal__review">
                            <div>
                              Review :
                              <a
                                href="https://www.houzz.jp/pro/arttada"
                                alt="houzz"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src="./assets/images/houzz__icon.png"
                                  alt="houzz"
                                />
                              </a>
                              <a
                                href="https://suvaco.jp/profile/cmPdsAY9Xfa95Q"
                                alt="suvaco"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src="./assets/images/suvaco__icon.png"
                                  alt="suvaco"
                                />
                              </a>
                              <a
                                href="https://sumika.me/pro/profile/tadakenntiku/works"
                                alt="sumika"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src="./assets/images/sumika__icon__rainbow.png"
                                  alt="sumika"
                                />
                              </a>
                            </div>
                          </li>
                          <li className="modal__sns">
                            <div>
                              Share <span>:</span>
                              <a
                                href="https://twitter.com/ONEOKROCK_japan"
                                alt="twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="bi bi-twitter"></i>
                              </a>
                              <a
                                href="https://www.facebook.com/ONEOKROCK"
                                alt="facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="bi bi-facebook"></i>
                              </a>
                              <a
                                href="https://www.instagram.com/oneokrockofficial/"
                                alt="instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
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

          {/* design section */}
          <section className="design row g-3 my-5" id="design">
            <h4 className="text-center">~ デザイン ~</h4>
            <div className="works__wrapper text-center">
              {works.map((work) =>
                work.type === "design" ? (
                  <div className="works__item card-effect">
                    <a data-micromodal-trigger="modal-work01">
                      <img src={work.img} alt={work.title} />
                    </a>
                    <h5 className="mb-0 mt-4">{work.title}</h5>
                    <a
                      data-micromodal-trigger="modal-work01"
                      className="btn btn-outline-dark py-2 px-4 mt-1"
                    >
                      More
                    </a>
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Works;
