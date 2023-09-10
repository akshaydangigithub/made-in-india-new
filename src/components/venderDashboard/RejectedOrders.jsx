import React, { useState } from "react";
import { FaExchangeAlt, FaEye } from "react-icons/fa";
import { Row, Col, Table, Button, Modal, Form } from "react-bootstrap";

const RejectedOrders = () => {
  const [statusNameState, setStatusNameState] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function clickShowModal() {
    handleShow();
  }

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
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Deo</td>
            <td>John12@gmail.com</td>
            <td>Rejected</td>

            <td>
              <button
                className="btn btn-warning"
                onClick={() => clickShowModal()}
              >
                <FaExchangeAlt />
              </button>
            </td>
          </tr>
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
              Handle Status
            </option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
            <option value="delivered">Delivered</option>
          </Form.Control>
          <Button
            onClick={() => changeStatusHandel()}
            className="mx-auto d-block"
            style={{ marginTop: 20 }}
          >
            Change
          </Button>
        </Modal.Body>
      </Modal>

     
    </>
  );
};
export default RejectedOrders;
