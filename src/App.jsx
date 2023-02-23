import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Routes location="/books">
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <MainRoutes />
    </>
  );
}

export default App;
