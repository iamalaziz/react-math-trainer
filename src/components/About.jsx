import React from "react";
import Video from "../assets/hero-video.mp4";
import "../stylesheet/_about.scss";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="hero-text hero">
          <h1>Math Expert.</h1>
          <h3>
            The interactive learning experience designed to help math learners
            become confident with Math
          </h3>
          <p>
            Maths is more than just numbers. With unlimited questions, engaging
            item types, and real-world scenarios, <span>Math Expert</span> helps
            learners experience maths at its most mesmerising!
          </p>
          <button>
            <NavLink to="problems" className="hero__btn paint">
              Start Now
            </NavLink>
          </button>
        </div>
        <video src={Video} className="video" autoPlay={true} loop="loop" />
      </div>
    </div>
  );
};

export default About;
