import React from "react";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutube,
  FaSmile,
} from "react-icons/fa";

const Result = () => {
  return (
    <div className="introduction">
      <div className="left-half"></div>
      <div className="right-half">
        <header className="header">
          <img src="../assets/logo.png" alt="Logo" />
        </header>
        <main>
          <h1 className="bold-text title">THANK YOU!</h1>
          <p>
            We have received your information and will be reaching out to you
            shortly with an e-mail confirmation.
          </p>
          <img src="../assets/pic4.jpg" alt="Result" className="intro-image" />
          <p>
            Thank your player for participating and let them know of any
            additional offers you may have prepared.
          </p>
        </main>
        <div className="icons">
          <a href="https://www.linkedin.com/" className="a-color">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/" className="a-color">
            <FaInstagramSquare />
          </a>
          <a href="https://www.facebook.com/" className="a-color">
            <FaFacebookSquare />
          </a>
          <a href="https://www.youtube.com/" className="a-color">
            <FaYoutube />
          </a>
          <a href="https://brame.ch/" className="a-color">
            <FaSmile />
          </a>
        </div>
        <footer className="footer">
          &copy; 2021, Asymmetry.{" "}
          <span className="bold-text">Privacy policy - Terms of service</span>
        </footer>
      </div>
    </div>
  );
};

export default Result;
