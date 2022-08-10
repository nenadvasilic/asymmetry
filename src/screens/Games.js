import React from "react";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();

  const navigateToMemoryGame = () => {
    navigate("/games/memory");
  };

  const navigateToQuizGame = () => {
    navigate("/games/quiz");
  };

  const navigateToSwipeGame = () => {
    navigate("/games/swipe");
  };

  return (
    <div className="introduction">
      <div className="left-half"></div>
      <div className="right-half">
        <header className="header">
          <img src="./assets/logo.png" alt="Logo" />
        </header>
        <main>
          <h1 className="bold-text title">CHOOSE THE GAME YOU WANT TO PLAY!</h1>
          <div className="menu-buttons">
            <button
              className="start-button menu-button-size"
              onClick={navigateToMemoryGame}
            >
              Memory
            </button>
            <br />
            <button
              className="start-button menu-button-size"
              onClick={navigateToQuizGame}
            >
              Quiz
            </button>
            <br />
            <button
              className="start-button menu-button-size"
              onClick={navigateToSwipeGame}
            >
              Swipe
            </button>
          </div>
        </main>
        <footer className="footer">
          &copy; 2021, Asymmetry.{" "}
          <span className="bold-text">Privacy policy - Terms of service</span>
        </footer>
      </div>
    </div>
  );
};

export default Games;
