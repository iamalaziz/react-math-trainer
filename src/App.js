import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Problems from "./components/Problems";
import Sidebar from "./components/Sidebar";
import { useProblems } from "./context/problems-context";

function App() {
  const {isBurgerOpen} = useProblems()
  return (
    <div className="App">
      <Navbar />
      {isBurgerOpen && <Sidebar />}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/problems" element={<Problems />} />
      </Routes>

    </div>
  );
}

export default App;
