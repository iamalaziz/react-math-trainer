import React from "react";
import '../stylesheet/_problems.scss';
// import data from '../data';
import ProblemsList from "./ProblemsList";
import { useProblems } from "../context/problems-context";




const Problems = () => {
  const {data, loading} = useProblems();
  console.log(data);
  if(loading) {
    return <p className="loading">Loading...</p>
  }

  return (
    <section>
      <div className="container">
        <h1>Problems Board</h1>
        <div className="chapters">
          {
            data.length > 0 && data.map(chapter => {
              return(
                <div className="chapter" key={chapter.key}>
                  <ProblemsList item={chapter}/>  
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Problems;
