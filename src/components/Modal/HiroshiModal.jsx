import React from "react";
import hiroshi from "../../assets/images/hiroshi3.JPG";

const HiroshiModal = (props) => {
  const closeModal = () => {
    props.setShowModal(false);
  };

  return (
    <>
      {props.showFlag ? ( // 親(ここではWorks.jsx)から受け取ったpropsで表示・非表示を判定
        <div
          className="modal about-hiroshi"
          role="dialog"
          aria-modal
          id="about-hiroshi"
        >
          <div className="modal__overlay" onClick={closeModal}>
            <div
              className="modal__container"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-1-title"
              onClick={(e) => e.stopPropagation()}
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
                  onClick={closeModal}
                  data-micromodal-close
                ></button>
              </header>
              <main className="modal__content" id="modal-1-content">
                <div className="container-fluid">
                  <div className="row">
                    <img src={hiroshi} alt="tada-hiroshi" />
                  </div>
                  <div className="row mt-3">
                    <ul>
                      <li className="modal__text">
                        多田建築設計事務所主宰 一級建築士　東京都大田区生まれ
                        <br></br>
                        <br></br>
                        大学1年の時、建築家アントニオ・ガウディに魅せられ建築の素晴らしさを知る。関東学院大学工学部建築学科卒業後、㈱GS建築研究所入社。多くの住宅設計に携わる。29歳の時、建築を志すきっかけとなったガウディの作品を見るためスペインを旅する。特にサクラダファミリアの荘厳さに圧倒され、建築の奥深さを知る。その後、公共建築に興味を持ち㈱日総建に入社。保養施設のコンペに当選し設計・監理までチーフとして携わる。福祉施設、集合住宅、資料館、劇場、図書館、学校等あらゆる公共の施設を次々とチームリーダーとして手がける。富山県「八尾町おわら資料館」では「富山県建築賞」を受賞。2001年に「多田建築設計事務所」を共同主宰とする為独立。設立後は数多くの住宅、診療所、二世帯住宅を多く手がける。風土に根ざした建築を常に目指し、独立前の豊かな経験をフルに活かし設計・監理に努める。現在、藤沢市の都市計画審議会委員に選出され、地域の代表としてまちづくりに携わる。
                      </li>
                    </ul>
                  </div>
                </div>
              </main>
              <footer className="modal__footer">
                <button
                  className="btn btn-outline-dark"
                  data-micromodal-close
                  onClick={closeModal}
                  aria-label="Close this dialog window"
                >
                  Close
                </button>
              </footer>
            </div>
          </div>
        </div>
      ) : (
        //   </div>
        // </div>
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

export default HiroshiModal;
