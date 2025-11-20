
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddMovie from "./Components/Add-Movie.jsx";
import Movies from "./Components/Movies.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand fw-bold text-warning" to="/">
          🎬 MovieZone
        </Link>
        <div className="ms-auto">
          <Link className="btn btn-outline-light me-2" to="/add-movie">
            Add Movie
          </Link>
          <Link className="btn btn-warning" to="/movies">
            All Movies
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
