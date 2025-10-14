import { Form, InputGroup, Button } from 'react-bootstrap';

function Employee() {

    return (
        <>
            <h1>Employee Management Form</h1><br />
            
            <div className="justify-content-center align-items-center">
                <Form className="">
                    <Form.Label className="fw-bold">First Name :-</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                        />
                    </InputGroup><br/>

                    <Form.Label className="fw-bold">Last Name :-</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                        />
                    </InputGroup><br/>

                    <Form.Label className="fw-bold">Email :-</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="e-mail"
                            name="email"
                            placeholder="Email"
                        />
                    </InputGroup><br/>

                    <Form.Label className="fw-bold">Address :-</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Enter your Address here..."
                    /><br/>

                    <Form.Label className="fw-bold">Phone No :-</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            name="phoneno"
                            placeholder="Phone No"
                        />
                    </InputGroup><br/>

                    <Button variant="success">Submit</Button>
                </Form>
            </div>
        </>
    )
};

export default Employee;