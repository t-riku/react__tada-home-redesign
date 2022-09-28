import React, { useState } from "react";
import { useEffect } from "react";
import db from "../firebase";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import HouseModal from "./Modal/HouseModal";
import ReactPlayer from "react-player";
import bgHomeVideo from "../assets/images/全シーン完成.mp4";

const Works = () => {
  const [works, setWorks] = useState([]);

  const [showModal, setShowModal] = useState(false);

  // const [snapModal, setSnapModal] = useState(false);

  const [modalWork, setModalWork] = useState(null);

  const ShowModal = (modalWork) => () => {
    setModalWork(modalWork);
    setShowModal(true);
  };

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
              {works.map((work, index) =>
                work.type === "house" ? (
                  <div className="works__item card-effect" key={index}>
                    <a onClick={ShowModal(work)} className="works__img__a">
                      <img src={work.thumbnailImageUrl} alt={work.caption} />
                    </a>
                    <h5 className="mb-1">{work.caption}</h5>
                    <p>{work.title}</p>
                    <a
                      onClick={ShowModal(work)}
                      className="btn btn-outline-dark py-2 px-4 mt-1"
                    >
                      More
                    </a>
                  </div>
                ) : (
                  <></>
                )
              )}

              {modalWork === null ? (
                ""
              ) : (
                <HouseModal
                  showFlag={showModal}
                  setShowModal={setShowModal}
                  caption={modalWork.caption}
                  title={modalWork.title}
                  img={modalWork.img}
                  text={modalWork.text}
                  modalImg={modalWork.images}
                />
              )}
            </div>
          </section>

          {/* design section */}
          <section className="design row g-3 my-5" id="design">
            <h4 className="text-center">~ デザイン ~</h4>
            <div className="works__wrapper text-center">
              {works.map((work, index) =>
                work.type === "design" ? (
                  <div className="works__item card-effect" key={index}>
                    <a onClick={ShowModal(work)} className="works__img__a">
                      <img src={work.thumbnailImageUrl} alt={work.caption} />
                    </a>
                    <h5 className="mb-0 mt-4">{work.title}</h5>
                    <a
                      onClick={ShowModal(work)}
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

          {/* video section */}
          <section className="video row g-3 my-5" id="video">
            <h4 className="text-center">~ video list ~</h4>
            <div className="works__wrapper text-center">
              <div className="video-bg">
                <ReactPlayer
                  url={bgHomeVideo}
                  muted
                  controls={true}
                  playsinline
                  width="100%"
                  height="auto"
                />
                <div className="card-effect">
                  <h5 className="mb-1 text-dark">南房総の家</h5>
                  {/* <p className="text-dark">bbbbbbbbbbb</p> */}
                  {/* <a className="btn btn-outline-dark py-2 px-4 mt-1">More</a> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Works;
