import React, { useState } from "react";
import Navigation from "../homepageComponents/navbar/Navbar";
import Footer from "../footer/Footer";
import { CREATE_CONTACT } from "../../graphql/Mutation";
import { useMutation } from "@apollo/client";
import {
  Button,
  Col,
  Form,
  Row,
} from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [content, setContent] = useState("");
  const [validated, setValidated] = useState(false);

  const [addContact, { loading }] = useMutation(CREATE_CONTACT);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(false);
      event.preventDefault();

      addContact({
        variables: {
          contactInput: {
            name: name,
            email: email,
            contact: contact,
            content: content,
          },
        },
      })
        .then(() => {
          setName("");
          setEmail("");
          setContact("");
          setContent("");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <Navigation />
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-1">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="mb-4 p-3 w-100 shadow-none"
                    style={{ border: "1px solid red", borderRadius: 0 }}
                    required
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-1">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="mb-4 p-3 w-100 shadow-none"
                    style={{ border: "1px solid red", borderRadius: 0 }}
                    required
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-1">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    className="mb-4 p-3 w-100 shadow-none"
                    style={{ border: "1px solid red", borderRadius: 0 }}
                    required
                    type="number"
                    placeholder="Contact"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-1">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    className="mb-4 p-3 w-100 shadow-none"
                    style={{
                      border: "1px solid red",
                      borderRadius: 0,
                      height: 100,
                    }}
                    required
                    as="textarea"
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit" variant="danger">
                Submit form
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
