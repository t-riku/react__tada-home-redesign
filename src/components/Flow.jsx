import React from "react";
import { Link } from "react-router-dom";
import bgFlowVideo from "../assets/images/Pexels Videos 2248564.mp4";
import aboutLinkPhilosophy from "../assets/images/about__link05.JPG";
import aboutLinkOverview from "../assets/images/about__link03.JPG";

const Flow = () => {
  return (
    <>
      {/* flow section */}
      <section className="flow">
        <div className="flow__wrapper">
          <video
            src={bgFlowVideo}
            className="videoVolume"
            type="video/mp4"
            //   webkit-playsinline
            //   playsinline
            autoPlay
            loop
            muted
          ></video>
          <div className="flow__wrapper__contents">
            <div className="container">
              <div className="row pb-5">
                <div className="col-md-10 link__position">
                  <h3 className="link__position__title current">設計の流れ</h3>
                </div>
              </div>

              <div className="stepbar">
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>01</span>
                    </div>
                    <p className="title">最初に簡単な面談をいたします。</p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      <span className="txt__weight orange">
                        ＊ご希望により、オンラインでの面談も行っております。
                      </span>
                      当事務所での家づくりの流れなどを詳しくご説明し、ご相談を承ります。
                      ライフスタイルについて簡単な質問をいたしますので、答えていただきながらご要望を明確にして参ります。
                      ここまでのご相談・アドバイスは無償です。
                      お気軽にお申し込みくださいませ。
                      折返し面談の日時などのお知らせをメールにて差し上げます。
                      返信のない場合はお手数ですが sekkei@arttada.com
                      までお知らせください。
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>02</span>
                    </div>
                    <p className="title">
                      ご納得いただけましたら先に進みます。
                    </p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      <span className="txt__weight">
                        「家づくりカウンセリングシート＊」
                      </span>
                      を記入して頂きます。
                      <span className="txt__weight">現地調査</span>及び
                      <span className="txt__weight">法的調査</span>
                      を行います。また、カウンセリングシートをもとに
                      <span className="txt__weight">プラン作成（1案のみ）</span>
                      をいたします。2・3週間程でプランと模型、概算金額、スケジュール表をご提出します。この間に見学可能な作品をご案内しております。
                      ＊このカウンセリングシートをもとに将来のライフスタイルに関するカウンセリング手法を取り入れた家づくりを行います。こちらはオリジナルの手法です。現在、家づくり、そして「新しい家でどのように暮らすか」といった将来のライフスタイルまでのトータルなアドバイスを行ないます。
                      プラン提出後、当事務所の仕事の進め方や相性を判断していただき、ご納得されたら設計契約へと進みます。設計契約に至った場合は、プラン作成料は設計料に充当します。（設計のご依頼を頂かない場合はプラン作成料として10万円+消費税を頂きます。）
                      <span className="txt__weight">
                        設計料は木造1～2階建で新築の場合、工事費の11%となります。木造3階建やRC,鉄骨構造の場合は構造設計事務所に依頼するため、別途構造設計料をいただきます。
                      </span>
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>03</span>
                    </div>
                    <p className="title">設計契約を結びます。</p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      <span className="txt__weight">
                        重要事項のご説明を行なったのち、設計契約を結びます。{" "}
                      </span>
                      提出物 平面図・断面図・立面図・模型 1/100
                      ・工事費概算・設計料概算 重要事項説明書 契約書
                      四会連合協定 建築設計・監理業務委託契約書、契約約款
                      第１回設計監理料お支払い 設計監理料概算の30%
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>04</span>
                    </div>
                    <p className="title">基本設計 １～２ヶ月</p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      最初の計画のまま進むことが多いのですが、具体的な計画案が出てきてから気がつくこともたくさんあります。ひとつひとつにじっくりと耳を傾け、丁寧に設計に反映していきます。
                      お打ち合わせは事務所又はご自宅にて１～２週間に１回行います。仕上げイメージのサンプルをご覧頂き、キッチンやサニタリーなどのショールームなどにもご一緒します。最新の設備を確かな目で取捨選択しながらのご案内となります。
                      成果物 平面図・断面図・立面図 1/100 ・工事費概算
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>05</span>
                    </div>
                    <p className="title">実施設計 ４～５ヶ月</p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      工務店に見積もりができるような、詳細な図面を作成致します。さらに細かいところをしっかり決めて行きます。
                      お打ち合わせは事務所又はご自宅にて２～３週間に１回行います。引き続きショールームやインテリアショップなどにご一緒し、計画中の家に実際に暮らしているイメージを鮮明なものにして参ります。照明器具・カーテン・ロールスクリーンなども全て計画に入れます。また、ご希望であればインテリアから食器までのご購入のアドバイスも行なっております。
                      成果物 実施設計図書一式
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>06-1</span>
                    </div>
                    <p className="title">確認申請・各種申請手続き 約1ヶ月</p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      実施設計がまとまりましたら、確認申請の手続きを始めます。
                      第２回設計監理料お支払い 設計監理費の40%
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>06-2</span>
                    </div>
                    <p className="title">見積もり及び工務店決定 約1ヶ月</p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      申請手続きと同時に、工務店の選定を行ないます
                      工務店を選ぶ際は何社かに見積もりを提出してもらう「相見積もり」としています。当事務所が信頼する工務店を2～3社選びます。その際、建て主様からのご指定も可能です。各社に現場説明を行い、実施図面を渡した後、約2～3週間後に事務所宛に見積書を提出してもらいます。当事務所で内容を精査し、適正金額であることを確認した後、お客様と相談して工務店を選定します。
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>07</span>
                    </div>
                    <p className="title">工事請負契約</p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      工務店と工事請負契約を結びます。 第１回工事費支払い
                      工事費の1/3
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>08</span>
                    </div>
                    <p className="title">着工</p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      工事着手前にあらかじめ工程会議、各種職人と顔合わせなど行い、私共（現場監理者）の了承のもとに着工します。解体工事がある場合は解体工事後に着工します。
                      <span className="txt__weight">
                        私共の事務所では、私共が自ら2週に1～2回程度は現場に足を運びます。設計士の大きな役割である第三者監理を重要視しています。現場でのより良い施工が大変重要であると考えているからです。必要な場合はあらかじめお知らせし、お客様にも足を運んで頂きます。
                      </span>
                      *第三者監理とは、専門知識のない建主に代わり、設計通り施工するように現場を監理することです。ハウスメーカーや建売住宅との大きな違いです。
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>09</span>
                    </div>
                    <p className="title">上棟</p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      木造の場合、基礎工事が終わると、あらかじめ切り出された材料（プレカット）を一日でおおよその外形がわかるくらい一機に組み立てます。ＲＣ造（鉄筋コンクリート造）や鉄骨造の場合もおおよその輪郭ができたところで上棟とします。
                      第3回設計監理料お支払い 設計監理費の15% 第２回工事費支払い
                      工事費の1/3
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
                <div className="stepbarwrap">
                  <div className="steptitle">
                    <div className="stepcircle">
                      <span>10</span>
                    </div>
                    <p className="title">完成</p>
                  </div>
                  <div className="steptxt">
                    <span className="txt">
                      おつかれさまでした。 第4回設計監理料お支払い
                      設計料概算の15%＋実際の工事費による精算 第３回工事費支払い
                      工事費の1/3
                    </span>
                  </div>
                  <span className="stepline"></span>
                </div>
              </div>

              {/* link ➡︎ 理念、事務所概要、設計の流れ */}
              <section className="link">
                <div className="row g-5 link__wrapper py-5 d-flex justify-content-center">
                  <div className="col-md-4">
                    <div className="link__item">
                      <img src={aboutLinkPhilosophy} alt="aboutPhilosophyImg" />
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

export default Flow;
