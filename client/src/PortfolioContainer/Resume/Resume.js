import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useState, useEffect} from "react";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => 
  {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentSreenFadeIn.subscribe(fadeInScreenHandler);
    
  const ResumeHeading = (props) => {
    return(
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
    </div>
    );
  };

  const resumeBullets = 
  [
      { label: "Education", logoSrc: "education.svg"},
      { label: "Work History", logoSrc:"work-history.svg"},
      { label: "Skills", logoSrc:"programming-skills.svg"},
      { label: "Projects", logoSrc:"projects.svg"},
  ];

  const programmingSkillDetails = 
  [
    {skill: "React JS"},
    {skill: "React Native"},
    {skill: ".NET"},
    {skill: "C#"},
    {skill: "RESTful APIs"},
    {skill: "MS SQL Server"},
    {skill: "GIT"},
    {skill: "Java"},
    {skill: "Azure Cloud Services"},
    {skill: "Mongo Db"},
  ];

  const projectDetails = 
  [
  {
    title: "Personal Portfolio Website",
    duration: {fromDate: "2020", toDate: "2021"},
    description: "A personal website to showcase my details and projects",
    subHeading:"Stack Used: React JS, Node JS, Express, Boostrap "
  },

  {
    title: "Rolling Green Mobile App",
    duration: {fromDate: "2020", toDate: "2021"},
    description: "An Application specializing in cannabis delivery",
    subHeading:"Stack Used: React Native, FireBase, Node JS, Google Maps API"
  },

  {
    title: "SoundNarcotics Website",
    duration: {fromDate: "2017", toDate: "2021"},
    description: "A website that sells music courses",
    subHeading:"Stack Used: JS, CSS, Mailchimp API, Wordpress"
  },

];

const resumeDetails = 
[
  <div className='resume-screen-container' key="education">
    <ResumeHeading
      heading={"Onondaga Community College, Syracuse"}
      subHeading={"ASSOCIATES OF COMPUTER SCIENCE"}
      fromDate={"2018"}
      toDate={"2020"}
    />

    <ResumeHeading
      heading={"University at Buffalo, Buffalo"}
      subHeading={"BACHELORS OF COMPUTER SCIENCE"}
      fromDate={"2020"}
      toDate={"Present"}
    />

    <ResumeHeading
      heading={"Christian Brothers Academy, Syracuse"}
      subHeading={"ADVANCED REGENTS DIPLOMA"}
      fromDate={"2005"}
      toDate={"2008"}
    />
  </div>,

  <div className="resume-screen-container"key="work-experience">
    <div className='experience-container'>
      <ResumeHeading
        heading={"Community Bank N.A."}
        subHeading={"SOFTWARE DEVELOPER INTERN"}
        fromDate={"2020"}
        toDate={"2020"}
    />

        <div className="experience-description">
          <span className='resume-description-text'>
            -Developed banking applications for different departments
            within the bank. Added features to exisiting bank software.
            Maintained Databases and API's.
            <br />
          </span>
          <br/>
          <span className='resume-description-text'>
            -Worked with C#, .NET, Razor Pages, SQL Server, DevOps, GITHUB,
            Payment Processing APIs
            <br />
          </span>
          <br />
          <span className='resume-description-text'>
            -Gained Agile workflow experience
          </span>
          <br />
          </div>
          </div>
        </div>,

        <div className="resume-screen-container programming-skills-container"
        key="programming-skills">
          {programmingSkillDetails.map((skill, index)=>
          (
            <div className='skill-parent' key={index}>
              <div className='heading-bullet'></div>
              <span>{skill.skill}</span>
            </div>
          ))}
        </div>,

        <div className="resume-screen-contaienr" key="projects">
          {projectDetails.map((projectDetails, index)=>(
            <ResumeHeading
              key={index}
              heading={projectDetails.title}
              subHeading={projectDetails.subHeading}
              description={projectDetails.description}
              fromDate={projectDetails.duration.fromDate}
              toDate={projectDetails.duration.toDate}
            />    
          ))}
        </div>,

        <div className="resume-screen-contaienr" key="interests">
        </div>,
];

const handleCarousal = (index) =>
{
  let offsetHeight=360;
  let newCarousalOffset = 
  {
    style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"},
  };
  setCarousalOffSetStyle(newCarousalOffset);
  setSelectedBulletIndex(index);
};

const getBullets = () =>
{
  return resumeBullets.map((bullet, index)=>(
    <div 
      onClick = {()=> handleCarousal(index)}
      className={index=== selectedBulletIndex ? "bullet selected-bullet" :"bullet"}
      key={index}
      >
        <img className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt='oops... no internet connection'
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
  ));
};

const getResumeScreen = () => 
{
return(
  <div 
  style = {carousalOffSetStyle.style}
  className="resume-details-carousal"
  >
    {resumeDetails.map((ResumeDetail) => ResumeDetail)}
  </div>
);
};

useEffect(() => 
{
  return () => 
  {
    /* UNSUBSCRIBE THE SUBSCRIPTIONS */
    fadeInSubscription.unsubscribe();
  };
}, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"Key Details"} />
        <div className='resume-card'>
          <div className = 'resume-bullets'>
            <div className = 'bullet-container'>
              <div className='bullet-icons'></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

