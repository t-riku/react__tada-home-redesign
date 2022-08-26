import React from "react";
// import { useEffect, useState } from "react";
// import db from "../../firebase";
// import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import houzzIcon from "../../assets/images/houzz__icon.png";
import suvacoIcon from "../../assets/images/suvaco__icon.png";
import sumikaIcon from "../../assets/images/sumika__icon__rainbow.png";

const HouseModal = (props) => {
  const closeModal = () => {
    props.setShowModal(false);
  };

  return (
    <>
      {props.showFlag ? ( // 親(ここではWorks.jsx)から受け取ったpropsで表示・非表示を判定
        <div
          className="modal modal-work modal-work01"
          id="modal-work01"
          role="dialog"
          aria-modal
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
                    {props.title}
                  </h2>
                  <h5 className="modal__subTitle">{props.subTitle}</h5>
                </div>
                <button
                  className="modal__close"
                  aria-label="Close modal"
                  data-micromodal-close
                  onClick={closeModal}
                ></button>
              </header>
              <main className="modal__content" id="modal-1-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="modal__flex">
                      <img src={props.topImg} alt=" " />
                    </div>

                    {/* {works.topImg.map((image) => (
                      <a href={image.topImg}>
                        <img src={image.imgGallery} alt="サムネイルイメージ" />
                      </a>
                    ))} */}
                  </div>
                  <div className="row">
                    <ul>
                      <li className="modal__text">{props.text}</li>
                      <li className="modal__photoGallery">
                        <h4>Photo Gallery</h4>
                        <div className="modal__flex">
                          <a href={props.imgGallery}>
                            <img src={props.imgGallery} alt="work__image" />
                          </a>
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
                            <img src={houzzIcon} alt="houzz" />
                          </a>
                          <a
                            href="https://suvaco.jp/profile/cmPdsAY9Xfa95Q"
                            alt="suvaco"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={suvacoIcon} alt="suvaco" />
                          </a>
                          <a
                            href="https://sumika.me/pro/profile/tadakenntiku/works"
                            alt="sumika"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={sumikaIcon} alt="sumika" />
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
                          onClick={closeModal}
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
                  onClick={closeModal}
                >
                  Close
                </button>
              </footer>
            </div>
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

export default HouseModal;
