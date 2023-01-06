import React, { useEffect, useState } from "react";
import "../stylesheet/_problems.scss";
// import lessons from "../mockData";
import { useNavigate } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import { getChapters } from "../firebase/firebase";

const Problems = () => {
  const navigate = useNavigate();
  const [chapters, setChapters] = useState([]);

  // getChapters().then(items => ));
  console.log(chapters)
  return (
    <section>
      <div className="container">
        <h1 className="main-section-title">Tasks Board</h1>
        <div className="chapters">
          {chapters.length > 0 &&
            chapters.map((lesson) => {
              return (
                <div className="chapter" key={lesson.id}>
                  <h3 className="chapter__index">{lesson.id}</h3>
                  <h1 className="chapter__title">{lesson.title}</h1>
                  <ul className="exercise-count">
                    <li>
                      <IoStarOutline />
                      <strong>{lesson.tasks}</strong> tasks
                    </li>
                    <li>
                      <GrTask />
                      <strong>{lesson.exercises}</strong> problems
                    </li>
                  </ul>
                  <p className="chapter__caption">{lesson.caption}</p>
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
