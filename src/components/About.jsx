import React from "react";
import Video from "../assets/hero-video.mp4";
import "../stylesheet/_about.scss";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="hero-text hero">
          <h1>Math Problems</h1>
          <p>
            You will find so much useful content to practice your math skills.
            You will be provided relative instructions and materials.
          </p>
          <button>
            <NavLink to="problems" className="hero__btn paint">
              Start Now
            </NavLink>
          </button>
        </div>
        <video src={Video} className="video" autoPlay="true" loop="loop" />
      </div>
    </section>
  );
};

export default About;
