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
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let newErrors = {}

        if (!inputForm.name.trim()) newErrors.name = true
        if (!inputForm.email.trim()) newErrors.email = true
        if (!inputForm.phone_no.trim()) newErrors.phone_no = true
        if (!inputForm.review.trim()) newErrors.review = true
        if (inputForm.rating === 0) newErrors.rating = true

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const Submit = (e) => {
        e.preventDefault()

        if (!validateForm()) {
            console.log("Form validation failed!")
            return
        }

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
                <input
                    placeholder={errors.name ? "Enter The Details" : "Name"}
                    type="text"
                    name="name"
                    value={inputForm.name}
                    onChange={handleChange}
                    style={{ borderColor: errors.name ? "red" : "" }} 
                /><br /><br />

                <label>Email :-</label>
                <input
                    placeholder={errors.email ? "Enter The Details" : "Email"}
                    type="email"
                    name="email"
                    value={inputForm.email}
                    onChange={handleChange}
                    style={{ borderColor: errors.email ? "red" : "" }}
                /><br /><br />

                <label>Phone No :-</label>
                <input
                    placeholder={errors.phone_no ? "Enter The Details" : "Phone No"}
                    type="number"
                    name="phone_no"
                    value={inputForm.phone_no}
                    onChange={handleChange}
                    style={{ borderColor: errors.phone_no ? "red" : "" }}
                /><br /><br />

                <label>Rating</label>
                {[1, 2, 3, 4, 5].map((num) => (
                    <span
                        key={num}
                        onClick={() => handleRating(num)}
                        style={{
                            cursor: "pointer",
                            fontSize: "30px",
                            color: num <= inputForm.rating ? "gold" : "gray",
                            border: errors.rating ? "1px solid red" : "none",
                            padding: "2px"
                        }}
                    >
                        &#9733;
                    </span>
                ))}<br /><br />

                <label>Review</label>
                <textarea
                    placeholder={errors.review ? "Enter The Details" : ""}
                    name="review"
                    value={inputForm.review}
                    onChange={handleChange}
                    style={{ borderColor: errors.review ? "red" : "" }}
                ></textarea><br /><br />

                <div>
                    <button type='submit' onClick={Submit}>Submit</button>
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