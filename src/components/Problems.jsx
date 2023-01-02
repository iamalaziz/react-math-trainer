import React from "react";
import "../stylesheet/_problems.scss";
import { lessons } from "../mockData";

const Problems = () => {
  return (
    <section>
      <div className="container">
        <h1 className="main-section-title">Tasks Board</h1>
        <div className="chapters">
          {lessons.length > 0 &&
            lessons.map((lesson, index) => {
                return (
                <div className="chapter" key={index}>
                  <div>
                    <h3 className="chapter__index">{index + 1}</h3>
                    <h1 className="chapter__title">{lesson}</h1>
                  </div>
                  <ul>
                    <li>
                      Includes <span>15 tasks</span>
                    </li>
                    <li>
                      Includes <span>125 problems</span>
                    </li>
                    <li>
                      <span>Beginner</span> Friendly
                    </li>
                  </ul>
                  <button className="start-btn">Solve Challenges</button>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
