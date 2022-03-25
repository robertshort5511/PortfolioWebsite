import React, { useEffect } from "@testing-library/react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) 
{
  let fadeInScreenHandler = (screen) => 
  {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentSreenFadeIn.subscribe(fadeInScreenHandler);
  
    const SCREEN_CONSTANTS = 
  {
    description:
      "I'm a full stack web and mobile developer. Experience working remote or working in an agile workflow. My goal is to help improve the quality and scalability of your applications. I can code your application in the tech stack of your choice. Currently based out of upstate new york. Get a FREE quote now.",
    highlights: {
      bullets: [
        "-API Development",
        "-Databases",
        "-Blockchain Development",
        "-Release Coordinator",
        "-Game Development",
        "-Full Stack",
      ],
      heading: "MY HIGHLIGHTS",
    },
  };

  const renderHightlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              {renderHightlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
