import React, { useState } from "react";
import { useEffect } from "react";
import db from "../firebase";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import HouseModal from "./Modal/HouseModal";
import ReactPlayer from "react-player";
import bgHomeVideo from "../assets/images/sampleTopVideo.mp4";

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
              {works.map((work) =>
                work.type === "house" ? (
                  <div className="works__item card-effect">
                    <a onClick={ShowModal(work)}>
                      <img src={work.img} alt={work.title} />
                    </a>
                    <h5 className="mb-1">{work.title}</h5>
                    <p>{work.subTitle}</p>
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
                  title={modalWork.title}
                  subTitle={modalWork.subTitle}
                  img={modalWork.img}
                  text={modalWork.text}
                  imgGallery={modalWork.imgGallery}
                />
              )}
            </div>
          </section>

          {/* design section */}
          <section className="design row g-3 my-5" id="design">
            <h4 className="text-center">~ デザイン ~</h4>
            <div className="works__wrapper text-center">
              {works.map((work) =>
                work.type === "design" ? (
                  <div className="works__item card-effect">
                    <a onClick={ShowModal(work)}>
                      <img src={work.img} alt={work.title} />
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
              {/* {works.map((work) =>
                work.type === "design" ? (
                  <div className="works__item card-effect">
                    <a onClick={ShowModal(work)}>
                      <img src={work.img} alt={work.title} />
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
              )} */}
              <div className="bg-white">
                <ReactPlayer
                  url={bgHomeVideo}
                  muted
                  controls={true}
                  playsinline
                  width="417px"
                  height="310px"
                />
                <div className="card-effect">
                  <h5 className="mb-1 text-dark">aaaaaa</h5>
                  <p className="text-dark">bbbbbbbbbbb</p>
                  <a className="btn btn-outline-dark py-2 px-4 mt-1">More</a>
                </div>
              </div>
              <div className="bg-white">
                <ReactPlayer
                  url={bgHomeVideo}
                  muted
                  controls={true}
                  playsinline
                  width="417px"
                  height="310px"
                />
                <div className="card-effect">
                  <h5 className="mb-1 text-dark">aaaaaa</h5>
                  <p className="text-dark">bbbbbbbbbbb</p>
                  <a className="btn btn-outline-dark py-2 px-4 mt-1">More</a>
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
