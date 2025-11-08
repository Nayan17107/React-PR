import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, InputGroup } from "react-bootstrap";
import "./Movies.css";

function Movies() {
    const getMovies = () => JSON.parse(localStorage.getItem("movies")) || [];
    const [movies, setMovies] = useState(getMovies());
    const [display, setDisplay] = useState(movies);
    const [search, setSearch] = useState("");

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
        setDisplay(movies);
    }, [movies]);

    const handleDelete = (id) => {
        const updated = movies.filter((m) => m.id !== id);
        setMovies(updated);
    };

    const handleSearch = () => {
        const filtered = movies.filter((m) =>
            m.name.toLowerCase().includes(search.toLowerCase())
        );
        setDisplay(filtered);
    };

    const sortAsc = () => {
        const sorted = [...display].sort((a, b) =>
            a.language[0].localeCompare(b.language[0])
        );
        setDisplay(sorted);
    };

    const sortDesc = () => {
        const sorted = [...display].sort((a, b) =>
            b.language[0].localeCompare(a.language[0])
        );
        setDisplay(sorted);
    };

    const reset = () => {
        setDisplay(movies);
        setSearch("");
    };

    const handleEdit = () => {

    }

    return (
        <div className="movie-list-section py-5">
            <Container>
                <h2 className="text-center fw-bold mb-5 title-glow">🎬 All Movies</h2>

                <div className="text-center mb-5">
                    <InputGroup className="search-bar mx-auto" style={{ maxWidth: "400px" }}>
                        <Form.Control
                            type="text"
                            placeholder="Search movie..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="search-input"
                        />
                        <Button onClick={handleSearch} className="btn-glow">
                            Search
                        </Button>
                    </InputGroup>

                    <div className="mt-3">
                        <Button onClick={sortAsc} className="filter-btn  btn-warning">
                            Lang ↑
                        </Button>{" "}
                        <Button onClick={sortDesc} className="filter-btn btn-warning">
                            Lang ↓
                        </Button>{" "}
                        <Button onClick={reset} className="filter-btn btn-warning reset">
                            Show All
                        </Button>{" "}
                        <Button
                            onClick={() => {
                                setSearch("");
                                setDisplay(movies);
                            }}
                            className="filter-btn clear-all-btn btn-warning"
                        >
                            🧹 Clear Changes
                        </Button>
                    </div>
                </div>

                <Row>
                    {display.length === 0 ? (
                        <p className="text-center text-light fs-5">No movies found 😔</p>
                    ) : (
                        display.map((movie) => (
                            <Col key={movie.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                                <Card className="movie-card glass-card border-0 shadow-lg h-100">
                                    <div className="movie-img-container">
                                        <img
                                            src={movie.images && movie.images[0]}
                                            alt={movie.name}
                                            className="movie-img"
                                        />
                                    </div>
                                    <Card.Body className="text-dark">
                                        <Card.Title className="fw-bold text-center movie-title">
                                            {movie.name}
                                        </Card.Title>
                                        <Card.Text>
                                            <strong>🎬 Director:</strong> {movie.director}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>⭐ Rating:</strong> {movie.rating}/10
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>🌐 Language:</strong> {movie.language.join(", ")}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>⏱ Runtime:</strong> {movie.runtime}
                                        </Card.Text>
                                        <Card.Text className="small text-muted">
                                            {movie.description}
                                        </Card.Text>
                                        <div className="text-center mt-3">
                                            <Button
                                                variant="info"
                                                className="edit-btn me-2"
                                                onClick={() => handleEdit()}
                                            >
                                                ✏️ Edit
                                            </Button>
                                            <Button
                                                variant="danger"
                                                className="delete-btn"
                                                onClick={() => handleDelete(movie.id)}
                                            >
                                                🗑 Delete
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Movies;
