import React from "react";
import { Link } from "react-router-dom";
import bgPholosophyVideo from "../assets/images/Pexels Videos 2248564.mp4";
import conceptImg from "../assets/images/pexels-pixabay-261403.jpg";
import aboutLinkFlow from "../assets/images/about__link01.JPG";
import aboutLinkOverview from "../assets/images/about__link03.JPG";

const Philosophy = () => {
  return (
    <>
      {/* variety section */}
      <section className="variety">
        <div className="variety__wrapper">
          <video
            src={bgPholosophyVideo}
            className="videoVolume"
            type="video/mp4"
            autoPlay
            loop
            muted
            // playinline="true"
            playsInline
          >
            <p>動画を再生できる環境ではありません。</p>
          </video>
          <div className="variety__wrapper__contents">
            <div className="container">
              <div className="row">
                <div className="link__position d-flex text-center">
                  <a href="#philosophy">
                    <h2 className="link__position__title">3つの理念</h2>
                  </a>
                  <p>/</p>
                  <a href="#concept">
                    <h2 className="link__position__title">コンセプト</h2>
                  </a>
                  <p>/</p>
                  <a href="#design">
                    <h2 className="link__position__title">住宅設計</h2>
                  </a>
                </div>
              </div>

              {/* philosophy section */}
              <section className="philosophy" id="philosophy">
                <div className="row mb-5">
                  <div className="col-md-8 mx-auto text-center">
                    <h6>philosophy</h6>
                    <h3>3つの理念</h3>
                  </div>
                </div>
                <div className="row fluid-field">
                  <div className="col-lg-6">
                    <div className="fluid fluid01 mx-auto"></div>
                  </div>
                  <div className="col-lg-6 fluid-text">
                    <h4>
                      <span>1.</span> 地域に根ざした設計・監理
                    </h4>
                    <p>
                      建物を設計する際に、風土や文化、地域性を重視しています。敷地には地域独特の気候や地質があります。例えば海に面した地域では塩害などを考慮して設計することが大切です。また、歴史のある地域では、美しい街並みの保全を大切にしています。市条例の中で様々な決まりがあり、多方面からの検討や気遣いが必要となります。このように地域に根ざし、自然と共生共存する為に、今までの経験を生かしながら設計・監理を行います。
                    </p>
                  </div>
                </div>
                <div className="row fluid-field fluid-reverse">
                  <div className="col-lg-6">
                    <div className="fluid fluid02 mx-auto"></div>
                  </div>
                  <div className="col-lg-6 fluid-text">
                    <h4>
                      <span>2.</span> 日本の美意識と文化の継承
                    </h4>
                    <p>
                      良い住まいづくりに絶対にかかせないものは、建築主、設計者、施工者の信頼関係です。その三者が力を合わせ、受け継がれた技術と新しい発想を融合させた不易流行の住まいを目指しています。そして街並みを豊かに、美しくする住まいを提案しています。例えば、建物周辺に緑があることで街が豊かになります。一軒の住宅が与える影響は街並みの中ではほんの小さなことかもしれません。しかしその積み重ねが街並みの保全につながり、日本文化を継承していくと考えています。
                    </p>
                  </div>
                </div>
                <div className="row fluid-field">
                  <div className="col-lg-6">
                    <div className="fluid fluid03 mx-auto"></div>
                  </div>
                  <div className="col-lg-6 fluid-text">
                    <h4>
                      <span>3.</span> コミュニケーションとコミュニティの形成
                    </h4>
                    <p>
                      ２１世紀は心の時代と言われています。このことを反映するかのように二世帯住宅が増えて参りました。核家族化に終焉が到来し、新たな家族間のつながりの図式が出てきていると感じています。私共は組織設計事務所にて、共同住宅をはじめとした公共施設の設計監理を行ない、人と人とのつながりを意識した設計を数多く手がけて来ました。その中で築いてきたノウハウを設計に生かすことで、家族間どおし、さらに地域に向けたコミュニケーションを空間で構築しています。
                    </p>
                  </div>
                </div>
              </section>

              {/* concept section  */}
              <section className="concept" id="concept">
                <div className="row mb-5">
                  <div className="col-md-8 mx-auto text-center">
                    <h6>concept</h6>
                    <h3>コンセプト</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="zoomInText grayscale">
                      <span className="mask">
                        <img src={conceptImg} alt="conceptImg" />
                        <span className="cap">
                          <ul className="concept__mainText">
                            <li>
                              <span className="concept__fontWeight">
                                “Simple &Comfortable”
                              </span>
                              が私の空間づくりに対する基本コンセプトです。
                            </li>
                            <li>
                              人間にとって空間とは、
                              <span className="concept__hover__color">
                                「美しさ」
                              </span>
                              と
                              <span className="concept__hover__color">
                                「快適さ」
                              </span>
                              が基本だと考えます。
                              華美な美しさではなく洗練され、存在自体が美しいと言う意味です。
                              日本人が本来持ち合わせている感性をくすぐり、
                              心に響くようなデザインを心がけております。
                            </li>
                            <li>
                              快適さは、人間の五感に響くような空間づくり、
                              「風、光、自然、香り、手触り」などをどのように
                              その空間に取り込むかを重視し計画を進めます。
                            </li>
                            <li>
                              <span className="concept__hover">この2つ</span>
                              がぴったりと重なり合った時、理想的な空間が生まれます。
                            </li>
                            <li>光・緑・風を五感で感じること</li>
                          </ul>
                          <ul className="concept__lewis">
                            <li>
                              <span className="concept__fontWeight">
                                人間として本当に心地よい空間・・・
                              </span>
                              あたりまえはあたりまえではない
                              じっくりと、ゆっくりと 時間と空間は変化しつづける
                              日本人が本来もつ感性 それはそれは豊かなもの
                              Wabi-Sabi 大切に残していきたい "How marvelous that
                              when I am in a room with another. The mountains,
                              trees, wind, and rain leave us for the mind, and
                              the room be come a world in itself."
                              「部屋の中に、他の人と一緒にいることは、何と素晴らしいことか、
                              その時、山も木も風も雨も心の中のものとなり、
                              部屋はそれ自体が一つの世界になる。」
                            </li>
                            <li className="concept__lewis__name">
                              ルイス・カーン
                            </li>
                          </ul>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* design section */}
              <section className="design" id="design">
                <div className="row mb-5">
                  <div className="col-md-8 mx-auto text-center">
                    <h6>design</h6>
                    <h3>住宅設計</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7 mx-auto text-center">
                    <h4>● 住宅設計に対する考え方</h4>
                    <h5>
                      私共は、住宅の設計を行うにあたって、お客様の意見を充分に伺います。
                      住宅は住まう人の生き様そのものでもあります。その根本的なことを踏まえて、さらにより快適に、より健康的にまた、より楽しくなるような空間を提案していこうと努力しております。
                    </h5>
                  </div>
                </div>
                <div className="row fluid-field">
                  <div className="col-lg-6">
                    <div className="fluid fluid04 mx-auto"></div>
                  </div>
                  <div className="col-lg-6 fluid-text">
                    <p>
                      <span>家</span>
                      は家族が集まり、社会で疲れた体を癒し、再生する場所です。ですから、仕上げなど体にふれる部分の材料にはこだわり、無垢の木や自然塗料、珪藻土等の体にやさしいものを中心に使用します。また、外部空間には出来る限り多くの植栽を設け、それが建物内部にもとりいれられる様なプラン作りを心がけています。
                    </p>
                  </div>
                </div>
                <div className="row fluid-field fluid-reverse">
                  <div className="col-lg-6">
                    <div className="fluid fluid05 mx-auto"></div>
                  </div>
                  <div className="col-lg-6 fluid-text">
                    <p>
                      <span>敷</span>
                      地も建物を配置していく上で大変重要な要素の1つです。私共にとっては、1つの敷地に対して、いくつものプランを考えます。しかし、その敷地の特性を最大限に生かせるものはいくつでもあるわけではなく、また正解というものもありません。一番なにを優先させるかにもよりますが、「この敷地だからありえるのだ。」といえるものを目指しています。
                    </p>
                  </div>
                </div>
                <div className="row fluid-field">
                  <div className="col-lg-6">
                    <div className="fluid fluid06 mx-auto"></div>
                  </div>
                  <div className="col-lg-6 fluid-text">
                    <p>
                      <span>設</span>
                      計事務所というと敷居が高いとお考えの方が多いと思いますが、私共はそのようなことはなく、何でも気軽に相談できる事務所づくりを目指しています。相談事は、玄関に置くプランターの花のことでもいいのです。家は買うものではなく、建築家と一緒につくっていくもの。そしてメンテナンスなどで一生おつきあいしていくもの。となるでしょう。
                    </p>
                  </div>
                </div>
              </section>

              {/* link ➡︎ 理念、事務所概要、設計の流れ */}
              <section className="link">
                <div className="row g-5 link__wrapper py-5 d-flex justify-content-center">
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
                  <div className="col-md-4">
                    <div className="link__item">
                      <img src={aboutLinkOverview} alt="aboutOverviewImg" />
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
                  <Link to="/" className="btn btn-outline-dark py-3">
                    Toppage に戻る
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Philosophy;
