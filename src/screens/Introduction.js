import React from "react";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const navigate = useNavigate();

  const navigateToGames = () => {
    navigate("/games");
  };

  return (
    <div className="introduction">
      <div className="left-half"></div>
      <div className="right-half">
        <header className="header">
          <img src="./assets/logo.png" alt="Logo" />
        </header>
        <main>
          <h1 className="bold-text title">WRITE A CATCHY TITLE HERE!</h1>
          <p>Introduce your game and entice the visitor to start playing.</p>
          <img
            src="./assets/intro.jpg"
            alt="Introduction"
            className="intro-image"
          />
          <p className="max-width">
            Showcase the main prize that will be awarded after competition is
            done. Notify visitors of any prizes that are given out for
            completing the game.
          </p>
          <button className="start-button" onClick={navigateToGames}>
            Start
          </button>
        </main>
        <footer className="footer">
          &copy; 2021, Asymmetry.{" "}
          <span className="bold-text">Privacy policy - Terms of service</span>
        </footer>
      </div>
    </div>
  );
};

export default Introduction;
