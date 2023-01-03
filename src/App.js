import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import LessonFour from "./components/Lessons/LessonFour";
import LessonOne from "./components/Lessons/LessonOne";
import LessonThree from "./components/Lessons/LessonThree";
import LessonTwo from "./components/Lessons/LessonTwo";
import Navbar from "./components/Navbar";
import Problems from "./components/Problems";
import Sidebar from "./components/Sidebar";
import { useProblems } from "./context/problems-context";

function App() {
  const { isBurgerOpen } = useProblems();
  return (
    <div className="App">
      <Navbar />
      {isBurgerOpen && <Sidebar />}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/1" element={<LessonOne />} />
        <Route path="/problems/2" element={<LessonTwo />} />
        <Route path="/problems/3" element={<LessonThree />} />
        <Route path="/problems/4" element={<LessonFour />} />
      </Routes>
    </div>
  );
}

export default App;
