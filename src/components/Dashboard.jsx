import React from "react";
import "../stylesheet/_dashboard.scss";
import lessons from "../mockData";


const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard__sidebar"></div>
      <div className="dashboard__table">
        <p className="dashboard__title">Solved Problems</p>
        <table>
          <thead>
            <tr>
              <th>No #</th>
              <th>Lessons</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {
              lessons.map(({id, title, tasks}) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{tasks}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
