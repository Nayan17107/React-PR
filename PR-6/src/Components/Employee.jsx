import React, { useState, useEffect } from 'react'
import { Col, Form, Row, Button, InputGroup, Card } from 'react-bootstrap';
import uniqueId from 'generate-unique-id';
import './Employee.css'; 

function Employee() {
    const handalstorage = () => {
        return JSON.parse(localStorage.getItem('Employee')) || [];
    };

    const initialState = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneno: ""
    }

    const [inputForm, setinputForm] = useState(initialState);
    const [inputErr, setinputErr] = useState({});
    const [storage, setStorage] = useState(handalstorage());
    const [edit, setedit] = useState(false)

    useEffect(() => {
        localStorage.setItem('Employee', JSON.stringify(storage));
    }, [storage])

    const handalchang = (e) => {
        const { name, value } = e.target
        setinputForm({
            ...inputForm,
            [name]: value
        })
    }

    const handalsubmit = (e) => {
        e.preventDefault();

        if (handalErros()) {
            if (edit) {
                const updatedData = storage.map((emp) =>
                    emp.id === inputForm.id ? inputForm : emp
                );
                setStorage(updatedData);
                setedit(false);
                setinputForm(initialState);
            } else {
                const newEmployee = {
                    ...inputForm,
                    id: uniqueId({
                        length: 4,
                        useLetters: false,
                    }),
                };
                setStorage([...storage, newEmployee]);
                setinputForm(initialState);
            }
        }
    };

    const handalErros = () => {
        let errors = {}

        if (inputForm.firstName === "") errors.nameErr = "Enter Your Name";
        if (inputForm.lastName === "") errors.lastNameErr = "Enter Last Name";
        if (inputForm.email === "") errors.emailErr = "Enter Your Email";
        if (inputForm.address === "") errors.addressErr = "Enter Your Address";
        if (inputForm.phoneno === "") errors.phonenoErr = "Enter Your No";

        setinputErr(errors)
        return Object.keys(errors).length === 0
    }

    const handalDelete = (id) => {
        let updateData = storage.filter((ele) => ele.id !== id)
        setStorage(updateData)
    }

    const handalEdit = (id) => {
        const findeingdata = storage.find((ele) => ele.id === id);
        setedit(true);
        setinputForm(findeingdata);
    };

    return (
        <>
            <h1>Employee Management Form</h1><br />

            <div className="justify-content-center align-items-center">

                <Form onSubmit={handalsubmit}>

                    <Form.Label className="fw-bold">First Name :-</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder={inputErr.nameErr ? inputErr.nameErr : "First Name"}
                            className={inputErr.nameErr ? "is-invalid placeholder-red" : ""}
                            onChange={handalchang}
                            value={inputForm.firstName}
                        />
                    </InputGroup><br />

                    <Form.Label className="fw-bold">Last Name :-</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            name="lastName"
                            placeholder={inputErr.lastNameErr ? inputErr.lastNameErr : "Last Name"}
                            className={inputErr.lastNameErr ? "is-invalid placeholder-red" : ""}
                            onChange={handalchang}
                            value={inputForm.lastName}
                        />
                    </InputGroup><br />

                    <Form.Label className="fw-bold">Email :-</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder={inputErr.emailErr ? inputErr.emailErr : "Email"}
                            className={inputErr.emailErr ? "is-invalid placeholder-red" : ""}
                            onChange={handalchang}
                            value={inputForm.email}
                        />
                    </InputGroup><br />

                    <Form.Label className="fw-bold">Address :-</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="address"
                        placeholder={inputErr.addressErr ? inputErr.addressErr : "Enter your Address here..."}
                        className={inputErr.addressErr ? "is-invalid placeholder-red" : ""}
                        onChange={handalchang}
                        value={inputForm.address}
                    /><br />

                    <Form.Label className="fw-bold">Phone No :-</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            name="phoneno"
                            placeholder={inputErr.phonenoErr ? inputErr.phonenoErr : "Phone No"}
                            className={inputErr.phonenoErr ? "is-invalid placeholder-red" : ""}
                            onChange={handalchang}
                            value={inputForm.phoneno}
                        />
                    </InputGroup><br />

                    <Button variant={edit ? "warning" : "success"} type="submit">
                        {edit ? "Update Employee" : "Add Employee"}
                    </Button>
                </Form>

                <Row className="mt-5">
                    {storage.length > 0 ? (
                        storage.map((emp) => (
                            <Col key={emp.id} xs={12} sm={6} md={4} className="mb-3">
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <Card.Title>{emp.firstName} {emp.lastName}</Card.Title>
                                        <Card.Text>
                                            <b>Email:</b> {emp.email} <br />
                                            <b>Address:</b> {emp.address} <br />
                                            <b>Phone:</b> {emp.phoneno}
                                        </Card.Text>
                                        <Button variant="primary" className="me-2" onClick={() => handalEdit(emp.id)}>Edit</Button>
                                        <Button variant="danger" onClick={() => handalDelete(emp.id)}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p className="text-center text-muted">No employees found</p>
                    )}
                </Row>
            </div>
        </>
    )
}

export default Employee;