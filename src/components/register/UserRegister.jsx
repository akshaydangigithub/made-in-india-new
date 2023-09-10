import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../homepageComponents/navbar/Navbar";
import { useMutation } from "@apollo/client";
import { CREAT_USER } from "../../graphql/Mutation";
// import { useAlert } from "react-alert";

const Register = () => {
  // const alert = useAlert();
  const navigation = useNavigate();

  const [createUser, { loading, error }] = useMutation(CREAT_USER);
  // variable for save the user in backend
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzip] = useState("");
  const [password, setpassword] = useState("");
  const [Cpassword, setCpassword] = useState("");

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(false);
      event.preventDefault();

      createUser({
        variables: {
          userInput: {
            zip: zip,
            state: state,
            password: password,
            email: email,
            contact: contact,
            LName: lname,
            FName: fname,
            Cpassword: Cpassword,
          },
        },
      })
        .then(() => {
          navigation("/");
        })
        .catch((e) => {
          alert(e.message)
        });
    }
  };
  return (
    <>
      <Navigation />
      <div
        style={{ height: "88vh" }}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <div className="row">
          <h3 className="mb-3">Welcome to Made In India ☺ </h3>
        </div>
        <div className="row">
          <Form
            style={{ backgroundColor: "#fff", borderRadius: "10px" }}
            className="p-5 shadow"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  onChange={(e) => setfname(e.target.value)}
                  value={fname}
                  required
                  type="text"
                  placeholder="First name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  onChange={(e) => setlname(e.target.value)}
                  value={lname}
                  required
                  type="text"
                  placeholder="Last name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  required
                  type="email"
                  placeholder="Email"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  onChange={(e) => setcontact(e.target.value)}
                  value={contact}
                  type="number"
                  placeholder="Contact"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control
                  onChange={(e) => setstate(e.target.value)}
                  value={state}
                  type="text"
                  placeholder="State"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  onChange={(e) => setzip(e.target.value)}
                  value={zip}
                  type="text"
                  placeholder="Zip"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  onChange={(e) => setCpassword(e.target.value)}
                  value={Cpassword}
                  type="password"
                  placeholder="Confirm password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div>
              {loading ? (
                <Spinner
                  animation="border"
                  role="status"
                  className="mx-auto d-block"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <Button
                  style={{ backgroundColor: "tomato", border: "none" }}
                  type="submit"
                >
                  Register Now
                </Button>
              )}
            </div>
            <div className="mt-3">
              <p>
                If already have an account <Link to="/preLogin">Login</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
