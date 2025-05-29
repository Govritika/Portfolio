import React from 'react';
import './skills.css';
import WebDesign from '../../assets/website-design.png';
import UIDesign from "../../assets/ui-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="title">About Me</span>
      <span className="desc">
        I’m a passionate React Developer with experience in building dynamic,
        responsive, and user-friendly web applications. Currently interning at
        Muditam.com, I specialize in developing efficient Lead Management
        Systems and enhancing user experiences with modern web technologies.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="uiDesign" className="barImg" />
          <div className="barText">
            <h2>Web Development</h2>
            <p>
              We build responsive, high-performance websites using modern
              technologies. From front-end interfaces to robust back-end
              systems, we ensure scalable and efficient web solutions tailored
              to your needs.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="webDesign" className="barImg" />
          <div className="barText">
            <h2>Web Design</h2>
            <p>
              Creating visually compelling and user-friendly interfaces is at
              the heart of our design process. We focus on aesthetics,
              usability, and seamless user experience to make your digital
              presence stand out.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="appDesign" className="barImg" />
          <div className="barText">
            <h2>Mobile App Development</h2>
            <p>
              We develop cross-platform mobile applications that are fast,
              intuitive, and feature-rich. Our apps are designed with the end
              user in mind, ensuring smooth performance and engaging interfaces
              on both iOS and Android platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills