import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={() => <h1>About Page!</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;
