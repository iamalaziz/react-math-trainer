import React, { useEffect, useState } from "react";
import "../../stylesheet/_problem_section.scss";
import { tasks1 } from "../../mockData";
import { getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";


const LessonOne = () => {
  const [tasks, setTasks] = useState([...tasks1]);
  const [tasksFirebase, setTasksFirebase] = useState([]);
  useEffect(() => {
    const unsubscribe = getDocs(db, 'chapters/h63Z7u5X0apUZMElBSNB/tasks/')
      .onSnapshot(snapshot => {
        const newDocs = snapshot.docs.map(doc => doc.data());
        setTasksFirebase(newDocs);
      });
    return unsubscribe;
  }, []);

  console.log(tasksFirebase);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("tasks"));
    if (storedData) {
      setTasks(storedData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const answerInput = (userAnswer, problem, index) => {
    const updatedTasks = [...tasks].map((task, taskIndex) => {
      if (taskIndex === index) {
        task.problems[problem.id - 1].userInput = userAnswer;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleSubmit = () => {
    const updatedTasks = [...tasks].map((task) => {
      task.problems.map((problem) => {
        problem.userInput.length !== 0 &&
          (problem.result =
            +problem.userInput === problem.answer ? true : false);
        return problem;
      });
      task.correctAnswers = countTrueResults(task);
      return task;
    });
    setTasks(updatedTasks);
  };

  const countTrueResults = (task) => {
    let count = 0;
    count += task.problems.filter((problem) => problem.result === true).length;
    return count;
  };

  return (
    <section className="problems_section">
      <h1 className="lesson_title">Lesson 1</h1>
      {tasks.map(({ id, instruction, correctAnswers, problems }, index) => {
        return (
          <div key={id} className="task">
            <h3 className="task__instruction">
              <span className="task__order-num">{id}</span>
              {instruction}
            </h3>
            <div className="task__problems">
              {problems.map((problem) => {
                return (
                  <div
                    className={`problem ${
                      problem.result === true ? "correct_text" : ""
                    } ${problem.result === false ? "wrong_text" : ""}`}
                    key={problem.id}
                  >
                    <p>
                      <span>{problem.id}) </span>
                      {problem.exercise} =
                    </p>
                    <input
                      type="number"
                      className="problem__answer"
                      value={problem.userInput}
                      onChange={(e) =>
                        answerInput(e.target.value, problem, index)
                      }
                    />
                  </div>
                );
              })}
            </div>
            <div className="problems_dashboard">
              <button
                type="submit"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
              {correctAnswers > 0 && (
                <p className="score_result">
                  Correct answers :{" "}
                  <span>
                    {correctAnswers}/{problems.length}
                  </span>
                </p>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LessonOne;
