import React from "react";
import { useNavigate } from "react-router-dom";

const Swipe = () => {
  const navigate = useNavigate();

  const navigateToRegistration = () => {
    navigate("/registration");
  };

  return (
    <div className="introduction">
      <div className="left-half"></div>
      <div className="right-half">
        <header className="header">
          <img src="../assets/logo.png" alt="Logo" />
        </header>
        <main>
          <h1 className="bold-text title">Question: 1/3</h1>
          <p>
            Swipe right when you like a product, or swipe left when you don't.
            It's that easy!
          </p>
          <img
            src="../assets/pic3.jpg"
            alt="Contract"
            className="question-img"
          />
          <div className="answer-buttons">
            <button
              className="start-button answer-btn"
              onClick={navigateToRegistration}
            >
              Answer 1
            </button>
            <button
              className="start-button answer-btn"
              onClick={navigateToRegistration}
            >
              Answer 2
            </button>
          </div>
        </main>
        <footer className="footer question-footer">
          &copy; 2021, Asymmetry.{" "}
          <span className="bold-text">Privacy policy - Terms of service</span>
        </footer>
      </div>
    </div>
  );
};

export default Swipe;
