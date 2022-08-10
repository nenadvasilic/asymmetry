import React from "react";
import { useNavigate } from "react-router-dom";

const Memory = () => {
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
          <div>
            <p className="bold-text title memory-time">Time: 0:23</p>
          </div>
          <div className="img-grid-container">
            <img
              className="memory-img img-first-row"
              src="../assets/pic6.jpg"
              alt="Money"
              onClick={navigateToRegistration}
            />
            <img
              className="memory-img img-first-row"
              src="../assets/pic2.jpg"
              alt="Flower pot"
              onClick={navigateToRegistration}
            />
            <img
              className="memory-img img-first-row"
              src="../assets/pic6.jpg"
              alt="Money"
              onClick={navigateToRegistration}
            />
            <img
              className="memory-img img-first-row"
              src="../assets/pic5.jpg"
              alt="Cash register"
              onClick={navigateToRegistration}
            />
            <img
              className="memory-img img-second-row"
              src="../assets/pic8.jpg"
              alt="Piggy bank"
              onClick={navigateToRegistration}
            />
            <img
              className="memory-img img-second-row"
              src="../assets/pic5.jpg"
              alt="Cash register"
              onClick={navigateToRegistration}
            />
            <img
              className="memory-img img-second-row"
              src="../assets/pic8.jpg"
              alt="Piggy bank"
              onClick={navigateToRegistration}
            />
            <img
              className="memory-img img-second-row"
              src="../assets/pic2.jpg"
              alt="Flower pot"
              onClick={navigateToRegistration}
            />
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

export default Memory;
