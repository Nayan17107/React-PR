import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddMovie from "./Components/Add-Movie";
import Movies from "./Components/Movies";
import './index.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand fw-bold text-warning" to="/">🎬 MovieZone</Link>
        <div className="ms-auto">
          <Link className="btn btn-outline-light me-2" to="/">Add Movie</Link>
          <Link className="btn btn-warning" to="/movies">All Movies</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<AddMovie />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
