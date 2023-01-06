import React from "react";
import "../stylesheet/_text.scss";
import LongUnderline from "../assets/long-underline.png";
import Arrow from "../assets/stubby-arrow.png";

const Text = () => {
  return (
    <div className="text">
      <div className="wavy_img"></div>
      <div className="text__container">
        <h2>
          Math can be fun. <strong>I promise.</strong>
        </h2>
        <p>
          There are so many kids and students who needs to learn math, but Math
          is the most frustrating part of their career.
        </p>
        <p>
          When you learn a subject other than math, it is not a big deal making
          some mistakes, anyway you can get to the point you want with one or
          another way. However, when it comes to math, even a single mistake
          leads to wrong results and making whole your work until the result
          just non-sense because of that single mistake.{" "}
        </p>
        <p>
          Since there are various formulas, theories to remember and a great
          patience to overcome failures while solving problems,
          <em> no wonder so many of us don't enjoy practicing Math!</em>
        </p>
        <p>
          Many universities and careers require qualification of math at certain
          degree. To follow those careers of our dreams, math difficulties must
          not be an obstacle
        </p>
        <h3>
          MATH is <span>implicit subject</span>
        </h3>
        <p>
          It doesn't matter how many years you spend practicing Math—if you
          don't learn how its underlying systems work, your mental model will
          always be incomplete.
        </p>
        <p>
          Think about how most of us learn Math: we learn how individual
          properties work, instead of focusing on how layout algorithms use
          those properties as inputs. We learn “cool tricks” for specific
          situations, instead of concepts that can be applied broadly to any
          situation.
        </p>
        <p>
          <span className="with_underline">
            It's like trying to solve a puzzle when you're missing pieces.
            <img
              src={LongUnderline}
              alt="Long Underline"
              className="long_underline"
            />
          </span>{" "}
          Except it's even worse, since we blame ourselves!
        </p>
        <h3 className="with_gradient">Nobody is born with Math skills.</h3>
        <p>
          <img src={Arrow} alt="stubby-arrow" className="arrow-img" />
          <span className="help">
            I want to help expedite that process for you.
          </span>{" "}
          Over the past year, I've been packaging up all that knowledge and
          experience into a comprehensive self-paced online course.
        </p>
        <p>I call it...</p>
        <div className="logo_bottom">
          <div className="logo_bottom__container">
            <h1 className="logo_bottom__text">
              MATH
              <span>EXPERT</span>
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Text;
