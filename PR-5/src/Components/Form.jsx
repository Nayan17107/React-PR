import React, { useState } from 'react'
import './Form.css'

function Form() {
    const initial = {
        name: "",
        email: "",
        phone_no: "",
        review: "",
        rating: 0
    }

    const [inputForm, setInputForm] = useState(initial)
    const [submittedData, setSubmittedData] = useState([])

    const Submit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", inputForm)
        setSubmittedData([...submittedData, inputForm])
        setInputForm(initial)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const handleRating = (num) => {
        setInputForm({
            ...inputForm,
            rating: num
        })
    }

    return (
        <>
            <form>
                <label>Name :-</label>
                <input placeholder="Name" type="text" name="name" value={inputForm.name} onChange={handleChange} /><br /><br />

                <label>Email :-</label>
                <input placeholder="Email" type="email" name="email" value={inputForm.email} onChange={handleChange} /><br /><br />

                <label>Phone No :-</label>
                <input placeholder="Phone No" type="number" name="phone_no" value={inputForm.phone_no} onChange={handleChange} /><br /><br />

                <label>Rating</label>
                {[1, 2, 3, 4, 5].map((num) => (
                    <span
                        key={num}
                        onClick={() => handleRating(num)}
                        style={{
                            cursor: "pointer",
                            fontSize: "30px",
                            color: num <= inputForm.rating ? "gold" : "gray"
                        }}
                    >
                        &#9733;
                    </span>
                ))}<br /><br />

                <label>Review</label>
                <textarea name="review" value={inputForm.review} onChange={handleChange}></textarea><br /><br />

                <div>
                    <button type='submit' onClick={Submit} >Submit</button>
                </div>
            </form>

            {submittedData.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                    <h2>All Submissions:</h2>
                    {submittedData.map((data, index) => (
                        <div key={index} style={{ marginBottom: "15px", padding: "10px", border: "1px solid gray" }}>
                            <p><b>Name:</b> {data.name}</p>
                            <p><b>Email:</b> {data.email}</p>
                            <p><b>Phone:</b> {data.phone_no}</p>
                            <p><b>Rating:</b> {"★".repeat(data.rating) || "No rating"}</p>
                            <p><b>Review:</b> {data.review}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Form;

// import React, { useState } from 'react';
// import { FaStar, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
// import './Form.css';

// const ReviewForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         review: '',
//         rating: 0
//     });

//     const [reviews, setReviews] = useState([]);
//     const [hoverRating, setHoverRating] = useState(0);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleRatingClick = (rating) => {
//         setFormData(prevState => ({
//             ...prevState,
//             rating: rating
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (formData.rating === 0) {
//             alert('Please select a rating');
//             return;
//         }

//         const newReview = {
//             id: Date.now(),
//             ...formData,
//             date: new Date().toLocaleDateString()
//         };

//         setReviews(prevReviews => [newReview, ...prevReviews]);

//         setFormData({
//             name: '',
//             email: '',
//             phone: '',
//             review: '',
//             rating: 0
//         });
//         setHoverRating(0);
//     };

//     const StarRating = ({ rating, onRatingChange, hoverRating, onHoverChange }) => {
//         return (
//             <div className="star-rating">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                     <FaStar
//                         key={star}
//                         className={`star ${star <= (hoverRating || rating) ? 'active' : ''}`}
//                         onClick={() => onRatingChange(star)}
//                         onMouseEnter={() => onHoverChange(star)}
//                         onMouseLeave={() => onHoverChange(0)}
//                     />
//                 ))}
//                 <span className="rating-text">
//                     {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'Select rating'}
//                 </span>
//             </div>
//         );
//     };

//     return (
//         <div className="review-app">
//             <div className="container">
//                 <h1 className="app-title">Customer Reviews</h1>

//                 {/* Review Form */}
//                 <div className="form-section">
//                     <h2>Submit Your Review</h2>
//                     <form onSubmit={handleSubmit} className="review-form">
//                         <div className="form-group">
//                             <div className="input-icon">
//                                 <FaUser />
//                             </div>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Your Name"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <div className="input-icon">
//                                 <FaEnvelope />
//                             </div>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Your Email"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <div className="input-icon">
//                                 <FaPhone />
//                             </div>
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 placeholder="Your Phone Number"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <div className="input-icon">
//                                 <FaComment />
//                             </div>
//                             <textarea
//                                 name="review"
//                                 placeholder="Your Review"
//                                 value={formData.review}
//                                 onChange={handleInputChange}
//                                 rows="4"
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>Rating</label>
//                             <StarRating
//                                 rating={formData.rating}
//                                 onRatingChange={handleRatingClick}
//                                 hoverRating={hoverRating}
//                                 onHoverChange={setHoverRating}
//                             />
//                         </div>

//                         <button type="submit" className="submit-btn">
//                             Submit Review
//                         </button>
//                     </form>
//                 </div>

//                 {/* Reviews Display */}
//                 <div className="reviews-section">
//                     <h2>Customer Reviews ({reviews.length})</h2>
//                     {reviews.length === 0 ? (
//                         <p className="no-reviews">No reviews yet. Be the first to submit one!</p>
//                     ) : (
//                         <div className="reviews-grid">
//                             {reviews.map(review => (
//                                 <div key={review.id} className="review-card">
//                                     <div className="card-header">
//                                         <div className="user-info">
//                                             <h3 className="user-name">{review.name}</h3>
//                                             <span className="review-date">{review.date}</span>
//                                         </div>
//                                         <div className="rating-display">
//                                             {[1, 2, 3, 4, 5].map(star => (
//                                                 <FaStar
//                                                     key={star}
//                                                     className={`star ${star <= review.rating ? 'active' : ''}`}
//                                                 />
//                                             ))}
//                                             <span className="rating-number">({review.rating}/5)</span>
//                                         </div>
//                                     </div>

//                                     <div className="card-body">
//                                         <p className="review-text">{review.review}</p>
//                                     </div>

//                                     <div className="card-footer">
//                                         <div className="contact-info">
//                                             <span className="email">
//                                                 <FaEnvelope className="footer-icon" />
//                                                 {review.email}
//                                             </span>
//                                             <span className="phone">
//                                                 <FaPhone className="footer-icon" />
//                                                 {review.phone}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReviewForm;