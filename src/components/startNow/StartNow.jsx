import React, { useContext, useState } from "react";
import Navigation from "../homepageComponents/navbar/Navbar";
import Cart from "../cartComponent/cart/Cart";
import { DataContext } from "../../contextApi";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const StartNow = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [quantity, setquantity] = useState(1);

  const IncQut = () => {
    setquantity(quantity + 1);
  };
  const DicQut = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };
  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="row">
              <h5 className="mt-3">Buyer Info.</h5>
              <div className="col bg-light py-3 mb-4">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom03">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" className="mb-3" controlId="validationCustom04">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="State" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" className="mb-3" controlId="validationCustom05">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" placeholder="Zip" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                </Form>
              </div>
            </div>

            <div className="row">
              <h5 className="mt-3">All Products Info.</h5>
              <Table className="mt-3" bordered variant="light">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Products</th>
                    <th>The Price of Product</th>
                    <th>Purchase Qty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="row">
                        <div className="col">
                          <img
                            src="https://images.unsplash.com/photo-1690971284880-fe1a22fbe361?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60"
                            width={100}
                            height={100}
                            alt="alt"
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          <Link to="#">
                            Man Sport Campus Shoes Men <br /> Sneakers Men Sport
                            Shoes 2022
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>$ 74537</td>
                    <td>
                      <div className="row">
                        <div className="col-3 d-flex align-items-center justify-content-center">
                          <button
                            onClick={DicQut}
                            className="btn btn-secondary"
                          >
                            -
                          </button>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-center">
                          <h6>{quantity}</h6>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                          <button
                            onClick={IncQut}
                            className="btn btn-secondary"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={12}>
                      <span className="d-flex align-items-center justify-content-end">
                        <p className="mt-2">
                          Total Price of Products : <b>$ 3475346</b>
                        </p>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="row mb-3">
              <h5 className="mt-3">Remark</h5>
              <div className="col">
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </div>
            </div>
            <div className="d-flex justify-content-end mb-4">
              <Button type="submit" variant="danger">
                Submit form
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StartNow;
