// import React, { useState } from "react";
// import { Form, Button, Card, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import uniqueId from "generate-unique-id";
// import "./Add-Movie.css";

// function AddMovie() {
//     const [form, setForm] = useState({
//         name: "",
//         director: "",
//         rating: "",
//         language: [],
//         runtime: "",
//         description: "",
//     });

//     const [images, setImages] = useState([]);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({ ...form, [name]: value });
//     };

//     const handleLanguage = (lang) => {
//         setForm((prev) => {
//             const selected = prev.language.includes(lang);
//             return {
//                 ...prev,
//                 language: selected
//                     ? prev.language.filter((l) => l !== lang)
//                     : [...prev.language, lang],
//             };
//         });
//     };

//     const handleImageUpload = (e) => {
//         const files = Array.from(e.target.files);
//         const newImages = files.map((file) => URL.createObjectURL(file));
//         setImages(newImages);
//     };

//     const validate = () => {
//         const allFieldsFilled =
//             form.name &&
//             form.director &&
//             form.rating &&
//             form.language.length > 0 &&
//             form.runtime &&
//             form.description &&
//             images.length > 0;
//         return allFieldsFilled;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!validate()) {
//             alert("Please fill all fields and upload at least one image.");
//             return;
//         }

//         const newMovie = {
//             id: uniqueId(),
//             ...form,
//             images,
//         };

//         const existing = JSON.parse(localStorage.getItem("movies")) || [];
//         existing.push(newMovie);
//         localStorage.setItem("movies", JSON.stringify(existing));

//         navigate("/movies");
//     };

//     return (
//         <div className="add-movie-container d-flex justify-content-center align-items-center">
//             <Card className="add-movie-card glass-card p-4 shadow-lg border-0 w-100">
//                 <h2 className="text-center fw-bold mb-4">🎬 Add New Movie</h2>

//                 <Form onSubmit={handleSubmit}>
//                     <Row>
//                         <Col md={6}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Movie Name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="name"
//                                     placeholder="Enter movie title"
//                                     value={form.name}
//                                     onChange={handleChange}
//                                     className={!form.name ? "invalid" : ""}
//                                 />
//                             </Form.Group>
//                         </Col>

//                         <Col md={6}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Director</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="director"
//                                     placeholder="Enter director name"
//                                     value={form.director}
//                                     onChange={handleChange}
//                                     className={!form.director ? "invalid" : ""}
//                                 />
//                             </Form.Group>
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col md={4}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Rating (1–10)</Form.Label>
//                                 <Form.Control
//                                     type="number"
//                                     name="rating"
//                                     placeholder="Rate 1–10"
//                                     value={form.rating}
//                                     min="1"
//                                     max="10"
//                                     onChange={(e) => {
//                                         const value = e.target.value;
//                                         if (value >= 1 && value <= 10) {
//                                             handleChange(e);
//                                         } else if (value === "") {
//                                             handleChange(e); 
//                                         }
//                                     }}
//                                     className={!form.rating ? "invalid" : ""}
//                                 />

//                             </Form.Group>
//                         </Col>

//                         <Col md={4}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Run-time</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="runtime"
//                                     placeholder="Enter runtime"
//                                     value={form.runtime}
//                                     onChange={handleChange}
//                                     className={!form.runtime ? "invalid" : ""}
//                                 />
//                             </Form.Group>
//                         </Col>

//                         <Col md={4}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Languages</Form.Label>
//                                 <div className="d-flex flex-wrap gap-2">
//                                     {["English", "Hindi", "Marathi", "Gujarati", "Tamil"].map(
//                                         (lang) => (
//                                             <Button
//                                                 key={lang}
//                                                 type="button"
//                                                 variant={
//                                                     form.language.includes(lang)
//                                                         ? "primary"
//                                                         : "outline-primary"
//                                                 }
//                                                 className="lang-btn"
//                                                 onClick={() => handleLanguage(lang)}
//                                             >
//                                                 {lang}
//                                             </Button>
//                                         )
//                                     )}
//                                 </div>
//                             </Form.Group>
//                         </Col>
//                     </Row>

//                     <Form.Group className="mb-3">
//                         <Form.Label>Upload Movie Poster</Form.Label>
//                         <Form.Control
//                             type="file"
//                             multiple
//                             accept="image/*"
//                             onChange={handleImageUpload}
//                             className={images.length === 0 ? "invalid" : ""}
//                         />
//                         <div className="preview-grid mt-3">
//                             {images.map((img, i) => (
//                                 <img
//                                     key={i}
//                                     src={img}
//                                     alt="preview"
//                                     className="preview-img"
//                                 />
//                             ))}
//                         </div>
//                     </Form.Group>

//                     <Form.Group className="mb-4">
//                         <Form.Label>Description</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             rows={3}
//                             name="description"
//                             placeholder="Enter short movie description"
//                             value={form.description}
//                             onChange={handleChange}
//                             className={!form.description ? "invalid" : ""}
//                         />
//                     </Form.Group>

//                     <div className="text-center">
//                         <Button type="submit" className="add-btn px-5 py-2 fw-bold">
//                             ➕ Add Movie
//                         </Button>
//                     </div>
//                 </Form>
//             </Card>
//         </div>
//     );
// }

// export default AddMovie;

import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
        const allFieldsFilled =
            form.name &&
            form.director &&
            form.rating &&
            form.language.length > 0 &&
            form.runtime &&
            form.description &&
            images.length > 0;
        return allFieldsFilled;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            alert("Please fill all fields and upload at least one image.");
            return;
        }

        const newMovie = {
            id: uniqueId(),
            ...form,
            images,
        };

        const existing = JSON.parse(localStorage.getItem("movies")) || [];
        existing.push(newMovie);
        localStorage.setItem("movies", JSON.stringify(existing));

        navigate("/movies");
    };

    return (
        <div className="add-movie-container d-flex justify-content-center align-items-center">
            <Card className="add-movie-card glass-card p-4 shadow-lg border-0 w-100">
                <h2 className="text-center fw-bold mb-4">🎬 Add New Movie</h2>

                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Movie Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter movie title"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={!form.name ? "invalid" : ""}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Director</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="director"
                                    placeholder="Enter director name"
                                    value={form.director}
                                    onChange={handleChange}
                                    className={!form.director ? "invalid" : ""}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Rating (1–10)</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="rating"
                                    placeholder="Rate 1–10"
                                    value={form.rating}
                                    min="1"
                                    max="10"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (value >= 1 && value <= 10) {
                                            handleChange(e);
                                        } else if (value === "") {
                                            handleChange(e);
                                        }
                                    }}
                                    className={!form.rating ? "invalid" : ""}
                                />

                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Run-time</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="runtime"
                                    placeholder="Enter runtime"
                                    value={form.runtime}
                                    onChange={handleChange}
                                    className={!form.runtime ? "invalid" : ""}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Languages</Form.Label>
                                <div className="d-flex flex-wrap gap-2">
                                    {["English", "Hindi", "Marathi", "Gujarati", "Tamil"].map(
                                        (lang) => (
                                            <Button
                                                key={lang}
                                                type="button"
                                                variant={
                                                    form.language.includes(lang)
                                                        ? "primary"
                                                        : "outline-primary"
                                                }
                                                className="lang-btn"
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
                        <Form.Label>Upload Movie Poster</Form.Label>
                        <Form.Control
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className={images.length === 0 ? "invalid" : ""}
                        />
                        <div className="preview-grid mt-3">
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="preview"
                                    className="preview-img"
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
                            placeholder="Enter short movie description"
                            value={form.description}
                            onChange={handleChange}
                            className={!form.description ? "invalid" : ""}
                        />
                    </Form.Group>

                    <div className="text-center">
                        <Button type="submit" className="add-btn px-5 py-2 fw-bold">
                            ➕ Add Movie
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}

export default AddMovie;
