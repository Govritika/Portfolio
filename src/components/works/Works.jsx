import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="title">My Portfolio</h2>
      <span className="desc">
        Here’s a showcase of some of the projects I’ve worked on, reflecting my
        skills in web development, design, and app creation. Each project
        highlights a unique challenge and solution, functionality, and attention
        to detail. Take a look at my work below — and feel free to explore more
        by clicking the "See More" button!
      </span>
      <div className="workImgs">
        <a
          href="https://www.60brands.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio1} alt="Project 1" className="workImg" />
        </a>
        <a
          href="https://textutils-project.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio2} alt="Project 1" className="workImg" />
        </a>
        <a
          href="https://govritika.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio3} alt="Project 1" className="workImg" />
        </a>
        <a
          href="https://github.com/yourusername/project1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio4} alt="Project 1" className="workImg" />
        </a>
        <a
          href="https://github.com/Govritika/newsapp.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio5} alt="Project 1" className="workImg" />
        </a>
        <a
          href="https://github.com/Govritika/AmazonClone.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio6} alt="Project 1" className="workImg" />
        </a>
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}

export default Works