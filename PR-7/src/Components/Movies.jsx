import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

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
        const updated = movies.filter(m => m.id !== id);
        setMovies(updated);
    };

    const handleSearch = () => {
        const filtered = movies.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));
        setDisplay(filtered);
    };

    const sortAsc = () => {
        const sorted = [...display].sort((a, b) => a.language[0].localeCompare(b.language[0]));
        setDisplay(sorted);
    };

    const sortDesc = () => {
        const sorted = [...display].sort((a, b) => b.language[0].localeCompare(a.language[0]));
        setDisplay(sorted);
    };

    const reset = () => setDisplay(movies);

    return (
        <>
        <div className="movie-list-section py-5 text-light">
            <Container>
                <h2 className="text-center fw-bold mb-4">🎬 All Movies</h2>

                <div className="text-center mb-4">
                    <Form.Control
                        type="text"
                        placeholder="Search by movie name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ width: "250px", display: "inline-block" }}
                    />{" "}
                    <Button onClick={handleSearch} variant="light">Search</Button>{" "}
                    <Button onClick={sortAsc} variant="outline-warning">Lang ↑</Button>{" "}
                    <Button onClick={sortDesc} variant="outline-warning">Lang ↓</Button>{" "}
                    <Button onClick={reset} variant="outline-light">Show All</Button>
                </div>

                <Row>
                    {display.map((movie) => (
                        <Col key={movie.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                            <Card className="movie-card bg-dark border-warning shadow-lg h-100">
                                <Card.Img variant="top" src={movie.image} className="movie-img" />
                                <Card.Body>
                                    <Card.Title className="text-warning text-center">{movie.name}</Card.Title>
                                    <Card.Text><strong>Director:</strong> {movie.director}</Card.Text>
                                    <Card.Text><strong>Rating:</strong> ⭐ {movie.rating}/10</Card.Text>
                                    <Card.Text><strong>Language:</strong> {movie.language.join(", ")}</Card.Text>
                                    <Card.Text><strong>Runtime:</strong> {movie.runtime}</Card.Text>
                                    <Card.Text className="small">{movie.description}</Card.Text>
                                    <div className="text-center mt-2">
                                        <Button variant="danger" onClick={() => handleDelete(movie.id)}>Delete</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
        </>
    )
};

export default Movies;
