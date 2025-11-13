import React, { useState, useEffect } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import uniqueId from "generate-unique-id";
import "./Add-Movie.css";

function AddMovie() {
    const [form, setForm] = useState({
        name: "",
        director: "",
        rating: "",
        language: [],
        runtime: "",
        description: "",
    });

    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const movie = location.state?.movieToEdit;
        if (movie) {
            setForm({
                name: movie.name,
                director: movie.director,
                rating: movie.rating,
                language: movie.language,
                runtime: movie.runtime,
                description: movie.description,
            });
            setImages(movie.images || []);
        } else {
            setForm({
                name: "",
                director: "",
                rating: "",
                language: [],
                runtime: "",
                description: "",
            });
            setImages([]);
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleLanguage = (lang) => {
        setForm((prev) => {
            const selected = prev.language.includes(lang);
            return {
                ...prev,
                language: selected
                    ? prev.language.filter((l) => l !== lang)
                    : [...prev.language, lang],
            };
        });
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages(newImages);
    };

    const validate = () => {
        return (
            form.name &&
            form.director &&
            form.rating &&
            form.language.length > 0 &&
            form.runtime &&
            form.description
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            alert("⚠️ Please fill all fields.");
            return;
        }

        const existing = JSON.parse(localStorage.getItem("movies")) || [];
        const movieToEdit = location.state?.movieToEdit;

        if (movieToEdit) {
            const updated = existing.map((m) =>
                m.id === movieToEdit.id ? { ...movieToEdit, ...form, images } : m
            );
            localStorage.setItem("movies", JSON.stringify(updated));
            alert("✅ Movie updated!");
        } else {
            const newMovie = {
                id: uniqueId(),
                ...form,
                images,
            };
            existing.push(newMovie);
            localStorage.setItem("movies", JSON.stringify(existing));
            alert("🎉 Movie added!");
        }

        navigate("/movies");
    };

    return (
        <div className="add-movie-container d-flex justify-content-center align-items-center">
            <Card className="add-movie-card glass-card p-4 shadow-lg border-0 w-100">
                <h2 className="text-center fw-bold mb-4">
                    {location.state?.movieToEdit ? "✏️ Edit Movie" : "🎬 Add New Movie"}
                </h2>

                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Movie Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Director</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="director"
                                    value={form.director}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="rating"
                                    value={form.rating}
                                    min="1"
                                    max="10"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Run-time</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="runtime"
                                    value={form.runtime}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Languages</Form.Label>
                                <div className="d-flex flex-wrap gap-2">
                                    {["English", "Hindi", "Gujarati", "Marathi", "Tamil"].map(
                                        (lang) => (
                                            <Button
                                                key={lang}
                                                type="button"
                                                variant={
                                                    form.language.includes(lang)
                                                        ? "primary"
                                                        : "outline-warning"
                                                }
                                                onClick={() => handleLanguage(lang)}
                                            >
                                                {lang}
                                            </Button>
                                        )
                                    )}
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Upload Poster</Form.Label>
                        <Form.Control
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        <div className="preview-grid mt-3 d-flex flex-wrap gap-3">
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="preview"
                                    style={{
                                        width: "120px",
                                        height: "160px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }}
                                />
                            ))}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <div className="text-center">
                        <Button type="submit" className="add-btn px-5 py-2 fw-bold">
                            {location.state?.movieToEdit ? "💾 Update Movie" : "➕ Add Movie"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}

export default AddMovie;
