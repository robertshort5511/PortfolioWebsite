import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css'

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.linkedin.com/in/robert-short-8a917422/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/robertshort5511">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm Rob
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Developer",
                    300,
                    "iOS/Android",
                    300,
                    "Blockchain",
                    300,
                    "Full Stack",
                    300,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Quality Apps At Affordable Prices
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="Resume.pdf" download="Robbie Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
