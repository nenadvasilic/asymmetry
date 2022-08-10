import React from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
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
          <h1 className="bold-text title question">Question: 1/3</h1>
          <p>Your question text goes here?</p>
          <img
            src="../assets/pic2.jpg"
            alt="Flower pot"
            className="question-img"
          />
          <div className="quiz-buttons">
            <button
              className="start-button quiz-btn"
              onClick={navigateToRegistration}
            >
              Lorem ipsum
            </button>
            <button
              className="start-button quiz-btn"
              onClick={navigateToRegistration}
            >
              Lorem ipsum
            </button>
            <button
              className="start-button quiz-btn"
              onClick={navigateToRegistration}
            >
              Lorem ipsum
            </button>
            <button
              className="start-button quiz-btn"
              onClick={navigateToRegistration}
            >
              Lorem ipsum
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

export default Quiz;
