import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../homepageComponents/navbar/Navbar";
import { USER_LOGIN } from "../../graphql/Mutation";
import { useMutation } from "@apollo/client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const notify = () =>
    toast.success("🦄 Login Successfully !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });


  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [userLogin, { loading }] = useMutation(USER_LOGIN, {
    onCompleted: ({ signInUser }) => {
      localStorage.setItem("userToken", signInUser.userToken);
      localStorage.setItem("userId", signInUser.userId);
      navigate("/userDashboard");
    },
    onError: (e) => {
      alert("Username & Password not match!!!");
    },
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(false);
      event.preventDefault();
      userLogin({
        variables: {
          signInUserInput: {
            email: `${email}`,
            password: `${password}`,
          },
        },
      }).then(() => {
        setemail("");
        setpassword("");
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
          <h3 className="mb-3">Welcome Back</h3>
        </div>
        <div className="row">
          <Form
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              width: 500,
            }}
            className="p-5 shadow"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
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
                  onClick={notify}
                  style={{ backgroundColor: "tomato", border: "none" }}
                  type="submit"
                >
                  Login
                </Button>
              )}
              <ToastContainer />
            </div>
            <div className="mt-3">
              <p>
                If dont't have an account{" "}
                <Link to="/preRegister">Register</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
