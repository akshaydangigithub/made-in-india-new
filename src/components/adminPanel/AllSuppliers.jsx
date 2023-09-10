import React, { useState } from "react";
import { FaExchangeAlt, FaEye } from "react-icons/fa";
import { Row, Col, Table, Button, Modal, Form } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ALL_VENDER } from "../../graphql/Query";

const AllSuppliers = () => {
  const { data } = useQuery(GET_ALL_VENDER);

  const [requestStatus, setrequestStatus] = useState(null);
  const [statusNameState, setStatusNameState] = useState("");
  const [reason, setReason] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDecline, setShowDecline] = useState(false);
  const handleCloseDecline = () => setShowDecline(false);
  const handleShowDecline = () => setShowDecline(true);

  function clickShowModal() {
    setrequestStatus(null);
    handleShow();
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
      handleClose();
      handleCloseDecline();
    } else {
      setValidated(false);
      event.preventDefault();
      event.stopPropagation();
      handleClose();
      handleCloseDecline();
    }
  };

  function changeStatusHandel() {
    handleClose();
  }

  return (
    <>
      <h5 className="mb-4">All Suppliers</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S. NO.</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Remove</th>
            <th>Requests</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.getAllVender.map((vender, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{vender.FName}</td>
                <td>{vender.email}</td>
                <td>{vender.contact}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => clickShowModal()}
                  >
                    <FaExchangeAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      {/* model for giving the reason for decline */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <Form.Control
            required
            as="select"
            style={{ fontFamily: "poppins", fontSize: 12 }}
            onChange={(e) => setStatusNameState(e.target.value)}
            value={statusNameState}
          >
            <option value="" disabled defaultValue>
              Handle Request
            </option>
            <option value="accepted">Accepted</option>
            <option value="declined">Declined</option>
          </Form.Control>
          {statusNameState === "declined" ? (
            <Button
              onClick={() => handleShowDecline()}
              className="mx-auto d-block"
              style={{ marginTop: 20 }}
            >
              Give Reason
            </Button>
          ) : (
            <Button
              onClick={() => changeStatusHandel()}
              className="mx-auto d-block"
              style={{ marginTop: 20 }}
            >
              Change
            </Button>
          )}
        </Modal.Body>
      </Modal>

      {/* model for accepting or declining the request */}
      <Modal show={showDecline} onHide={handleCloseDecline} centered size="lg">
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label style={{ fontFamily: "poppins", fontSize: 12 }}>
                  Enter your reason
                </Form.Label>
                <Form.Control
                  style={{ fontFamily: "poppins", fontSize: 12 }}
                  required
                  as="textarea"
                  placeholder="Enter your reason"
                  onChange={(e) => setReason(e.target.value)}
                  value={reason}
                />
              </Form.Group>
            </Row>
            <Button
              style={{ fontFamily: "poppins", fontSize: 12 }}
              className="mx-auto d-block"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AllSuppliers;
