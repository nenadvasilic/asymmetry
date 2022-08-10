import React from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const navigateToResult = () => {
    navigate("/registration/result");
  };

  return (
    <div className="introduction">
      <div className="left-half"></div>
      <div className="right-half">
        <header className="header">
          <img src="./assets/logo.png" alt="Logo" />
        </header>
        <main>
          <h1 className="bold-text title">AWESOME JOB!</h1>
          <p>Entice your players to register so they can get a prize!</p>
          <img src="./assets/pic1.jpg" alt="Register" className="intro-image" />
          <div className="form-container">
            <div className="form-grid">
              <input className="input" placeholder="   First name" />
              <input className="input" placeholder="   Last name" />
              <input className="input" placeholder="   E-mail address" />
              <input className="input" placeholder="   Address" />
              <input className="input" placeholder="   Phone" />
              <input className="input" placeholder="   Postal code" />
            </div>
            <div className="checkbox">
              <div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox-color"
                />
                <label>
                  I have read and accept{" "}
                  <span className="bold-text">Terms of service.</span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox-color"
                />
                <label>
                  I have read and accept{" "}
                  <span className="bold-text">Privacy policy.</span>
                </label>
              </div>
              <div>
                <input type="checkbox" className="checkbox-color" />
                <label>I would like to receive news by e-mail.</label>
              </div>
            </div>
          </div>
          <button className="start-button" onClick={navigateToResult}>
            Submit
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

export default Registration;
