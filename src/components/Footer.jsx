import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import taaLogo from "../assets/images/taa__logo2.svg";
import taaLogo from "../assets/images/taa__logo3.svg";

const Footer = () => {
  return (
    <>
      {/* footer section */}
      <section className="footer" id="raindrops">
        <div className="container">
          <div className="d-flex justify-content-center py-5">
            <a href="/#top">
              <img src={taaLogo} alt="tadaLogo" className="navbar-brand" />
            </a>
          </div>
          <div className="row pb-5">
            <ul className="d-flex justify-content-center">
              <li>
                <HashLink to="/#top">Top</HashLink>
              </li>
              <li>
                <HashLink to="/#works">Works</HashLink>
              </li>
              <li>
                <HashLink to="/#message">Message</HashLink>
              </li>
              <li>
                <HashLink to="/#review">Review</HashLink>
              </li>
              <li>
                <HashLink to="/#contact">Contact</HashLink>
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
