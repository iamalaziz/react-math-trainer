import React from "react";
import "../../stylesheet/_problem_section.scss";
import { tasks1 } from "../../mockData";

const LessonOne = () => {
  return (
    <section className="problems_section">
      <h1 className="lesson_title">Lesson 1</h1>
      {tasks1.map(({ id, instruction, problems }) => {
        return (
          <div key={id} className="task">
            <h3 className="task__instruction">
              <span className="task__order-num">{id}</span>
              {instruction}
            </h3>
            <div className="task__problems">
              {problems.map((problem) => {
                return (
                  <div className="problem">
                    <p>
                      <span>{problem.id}) </span>
                      {problem.exercise} =
                    </p>
                    <input type="number" className="problem__answer"/>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LessonOne;
