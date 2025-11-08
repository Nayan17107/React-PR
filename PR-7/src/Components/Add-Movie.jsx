import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { FaFilm, FaUser, FaStar, FaClock, FaGlobe, FaImage, FaAlignLeft } from "react-icons/fa";
import uniqueId from "generate-unique-id";

function AddMovie() {
    const getStorage = () => JSON.parse(localStorage.getItem("movies")) || [];

    const [movies, setMovies] = useState(getStorage());
    const [edit, setEdit] = useState(false);
    const [form, setForm] = useState({
        id: "",
        name: "",
        image: "",
        director: "",
        rating: "",
        language: [],
        runtime: "",
        description: ""
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
    }, [movies]);

    const handleChange = (e) => {
        const { name, value, type, selectedOptions } = e.target;
        if (type === "select-multiple") {
            const selected = Array.from(selectedOptions).map(opt => opt.value);
            setForm({ ...form, [name]: selected });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const validate = () => {
        let err = {};
        if (!form.name) err.name = "Enter movie name";
        if (!form.image) err.image = "Provide image URL";
        if (!form.director) err.director = "Enter director name";
        if (!form.rating || form.rating < 1 || form.rating > 10) err.rating = "Rating must be between 1–10";
        if (form.language.length === 0) err.language = "Select at least one language";
        if (!form.runtime) err.runtime = "Enter runtime";
        if (!form.description) err.description = "Provide description";
        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        if (edit) {
            setMovies(movies.map(m => (m.id === form.id ? form : m)));
            setEdit(false);
        } else {
            form.id = uniqueId({ length: 8, useLetters: true });
            setMovies([...movies, form]);
        }
        setForm({
            id: "",
            name: "",
            image: "",
            director: "",
            rating: "",
            language: [],
            runtime: "",
            description: ""
        });
    };

    return (
        <>
            <div className="add-movie-section py-5">
                <Container>
                    <h2 className="text-center text-light fw-bold mb-4">{edit ? "Update Movie" : "Add New Movie"}</h2>
                    <Form onSubmit={handleSubmit} className="movie-form p-4 rounded-4 bg-dark shadow-lg text-light">
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Label>Movie Name</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><FaFilm /></InputGroup.Text>
                                    <Form.Control name="name" value={form.name} onChange={handleChange} />
                                </InputGroup>
                                {errors.name && <div className="text-danger small">{errors.name}</div>}
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Director</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><FaUser /></InputGroup.Text>
                                    <Form.Control name="director" value={form.director} onChange={handleChange} />
                                </InputGroup>
                                {errors.director && <div className="text-danger small">{errors.director}</div>}
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Label>Rating (out of 10)</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><FaStar /></InputGroup.Text>
                                    <Form.Control type="number" name="rating" value={form.rating} onChange={handleChange} />
                                </InputGroup>
                                {errors.rating && <div className="text-danger small">{errors.rating}</div>}
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Runtime</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><FaClock /></InputGroup.Text>
                                    <Form.Control name="runtime" value={form.runtime} onChange={handleChange} />
                                </InputGroup>
                                {errors.runtime && <div className="text-danger small">{errors.runtime}</div>}
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Label>Language</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><FaGlobe /></InputGroup.Text>
                                    <Form.Select name="language" multiple value={form.language} onChange={handleChange}>
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Korean">Korean</option>
                                        <option value="Japanese">Japanese</option>
                                        <option value="French">French</option>
                                    </Form.Select>
                                </InputGroup>
                                {errors.language && <div className="text-danger small">{errors.language}</div>}
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Image URL</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><FaImage /></InputGroup.Text>
                                    <Form.Control name="image" value={form.image} onChange={handleChange} />
                                </InputGroup>
                                {errors.image && <div className="text-danger small">{errors.image}</div>}
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <InputGroup>
                                <InputGroup.Text><FaAlignLeft /></InputGroup.Text>
                                <Form.Control as="textarea" rows={3} name="description" value={form.description} onChange={handleChange} />
                            </InputGroup>
                            {errors.description && <div className="text-danger small">{errors.description}</div>}
                        </Form.Group>

                        <div className="text-center mt-4">
                            <Button type="submit" variant="warning" className="px-5 fw-bold">
                                {edit ? "Update Movie" : "Add Movie"}
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </>
    );
}

export default AddMovie;
