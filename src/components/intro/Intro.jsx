import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Intro = () => {
  return (
    <section id="intro">
      <div className="content">
        <span className="hello">Hello,</span>
        <span className="text">
          I'm <span className="name">Vritika</span> <br />
          Web Developer
        </span>
        <p className="para">
          I am a skilled web developer with experience in creating <br />
          user-friendly websites.
        </p>
        <Link to="contactPage" smooth={true} duration={500}>
          <button className="btn flex items-center gap-2">
            <WorkOutlineIcon className="hiringIcon" />
            Hire me!
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
