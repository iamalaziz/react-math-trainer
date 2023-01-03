import React from "react";
import "../stylesheet/_problems.scss";
import lessons from "../mockData";
import { useNavigate } from "react-router-dom";

const Problems = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="container">
        <h1 className="main-section-title">Tasks Board</h1>
        <div className="chapters">
          {lessons.length > 0 &&
            lessons.map((lesson) => {
              return (
                <div className="chapter" key={lesson.id}>
                  <div>
                    <h3 className="chapter__index">{lesson.id}</h3>
                    <h1 className="chapter__title">{lesson.title}</h1>
                    <p className="chapter__caption">{lesson.caption}</p>
                  </div>
                  <ul className="exercise-count">
                    <li>
                      Includes <span>{lesson.tasks} tasks</span>
                    </li>
                    <li>
                      Includes <span>{lesson.exercises} problems</span>
                    </li>
                  </ul>
                  <ul className="stack">
                    {lesson.subsections.map((key, index) => {
                      return <li key={index}>{key}</li>;
                    })}
                  </ul>
                  <button
                    className="start-btn"
                    onClick={() => navigate(`/problems/${lesson.id}`)}
                  >
                    Solve Challenges
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
