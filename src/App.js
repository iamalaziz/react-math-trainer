import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Problems from "./components/Problems";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/problems" element={<Problems />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
