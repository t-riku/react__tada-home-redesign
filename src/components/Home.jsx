import React from "react";
import bgHomeVideo from "../assets/images/topVideo5.mp4";
import houzzIcon from "../assets/images/houzz__icon.png";
import suvacoIcon from "../assets/images/suvaco__icon.png";
import sumikaIcon from "../assets/images/sumika__icon__rainbow.png";
import topVideoThumbnail from "../assets/images/topVideoThumbnail.png";

const Home = () => {
  return (
    <>
      {/* toppage section */}
      <section className="toppage vh-100 w-100" id="top">
        {/* 重くなるから一旦コメントアウト。公開する時にはずす */}
        <video
          className="videoVolume"
          src={bgHomeVideo}
          type="video/mp4"
          poster={topVideoThumbnail}
          autoPlay
          loop
          muted
          // playinline="true"
          playsInline
        />
        <div className="overlay"></div>
        <div className="title">
          <h1>多田建築設計事務所</h1>
        </div>
        <div className="scrolldown4">
          <span>Scroll</span>
        </div>
        <p className="copyright text-white">
          <small>
            ©2001-2022 TADA Architects Associates. All Rights Reserved.
          </small>
        </p>
        <div className="sns">
          <ul>
            <li>
              <a
                href="https://www.houzz.jp/pro/arttada"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={houzzIcon} alt="houzz" />
              </a>
            </li>
            <li>
              <a
                href="https://suvaco.jp/profile/cmPdsAY9Xfa95Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={suvacoIcon} alt="suvaco" />
              </a>
            </li>
            <li>
              <a
                href="https://sumika.me/pro/profile/tadakenntiku/works"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sumikaIcon} alt="sumika" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
