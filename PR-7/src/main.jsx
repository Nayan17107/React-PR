import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//   const validate = () => {
//     let err = {};
//     if (!form.name) err.name = "Enter movie name";
//     if (!form.image) err.image = "Provide image URL";
//     if (!form.director) err.director = "Enter director name";
//     if (!form.rating || form.rating < 1 || form.rating > 10) err.rating = "Rating must be between 1–10";
//     if (form.language.length === 0) err.language = "Select at least one language";
//     if (!form.runtime) err.runtime = "Enter runtime";
//     if (!form.description) err.description = "Provide description";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   }; for validation just remove this insted add only that validation when any feild is empty that feild will be red and also show placeholder to enter details 