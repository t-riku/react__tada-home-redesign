import React from "react";
import { Link } from "react-router-dom";
import tadaLogo from "../assets/images/dhu_logo.svg";

const Footer = () => {
  return (
    <>
      {/* footer section */}
      <section className="footer" id="raindrops">
        <div className="container">
          <div className="d-flex justify-content-center py-5">
            <Link to="/">
              <img src={tadaLogo} alt="tadaLogo" className="navbar-brand" />
            </Link>
          </div>
          <div className="row pb-5">
            <ul className="d-flex justify-content-center">
              <li>
                <a href="#top">Top</a>
              </li>
              <li>
                <a href="#works">Works</a>
              </li>
              <li>
                <a href="#message">Message</a>
              </li>
              <li>
                <a href="#review">Review</a>
              </li>
              <li>
                <Link to="/philosophy">Philosophy</Link>
              </li>
              <li>
                <Link to="/flow">Flow</Link>
              </li>
              <li>
                <Link to="/overview">Overview</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
