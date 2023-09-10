import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Navigation from "../homepageComponents/navbar/Navbar";
import { SUPER_ADMIN_LOGIN } from "../../graphql/Mutation";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorShow, setErrorShow] = useState(false);

  const [signinSuperAdmin, { loading }] = useMutation(SUPER_ADMIN_LOGIN, {
    onCompleted: ({ signInSuperAdmin }) => {
      localStorage.setItem("superAdminToken", signInSuperAdmin.superAdminToken);
      localStorage.setItem("superAdminId", signInSuperAdmin.superAdminId);
      navigate("/adminPanel/superAdminDashboardView");
    },
    onError: (e) => {
      setErrorShow(true);
    },
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setErrorShow(false);
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
    } else {
      setErrorShow(false);
      setValidated(false);
      event.preventDefault();
      signinSuperAdmin({
        variables: {
          signInSuperAdminInput: {
            username: `${username}`,
            password: `${password}`,
          },
        },
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("superAdminToken")) {
      navigate("/adminPanel/superAdminDashboardView");
    }
  }, [navigate]);

  return (
    <>
      <Navigation />
      <Container style={{ marginTop: 150 }}>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Card
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Card.Body>
                <h1
                  style={{
                    fontFamily: "poppins",
                    fontWeight: "bold",
                    fontSize: 20,
                    textAlign: "center",
                    color: "#34495e",
                  }}
                >
                  Admin Login
                </h1>
                <hr />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label style={{ fontFamily: "poppins" }}>
                        Username
                      </Form.Label>
                      <Form.Control
                        style={{ fontFamily: "poppins", fontSize: 12 }}
                        required
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label style={{ fontFamily: "poppins" }}>
                        Password
                      </Form.Label>
                      <Form.Control
                        style={{ fontFamily: "poppins", fontSize: 12 }}
                        required
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </Form.Group>
                  </Row>
                  {errorShow ? (
                    <h1
                      style={{
                        fontFamily: "poppins",
                        fontSize: 12,
                        color: "#e74c3c",
                        textAlign: "center",
                      }}
                    >
                      Username & Password not match!!!
                    </h1>
                  ) : (
                    ""
                  )}
                  {loading ? (
                    <Spinner animation="border" className="mx-auto d-block" />
                  ) : (
                    <Button
                      type="submit"
                      variant="danger"
                      style={{ fontFamily: "poppins" }}
                      className="loginBtnn mx-auto d-block"
                    >
                      Login
                    </Button>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
}
