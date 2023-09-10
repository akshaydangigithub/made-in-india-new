import { useQuery } from "@apollo/client";
import React from "react";
import Table from "react-bootstrap/Table";
import { FaEye } from "react-icons/fa";
import { GET_ALL_USER } from "../../graphql/Query";

const AllUsers = () => {
  const { data } = useQuery(GET_ALL_USER);

  return (
    <>
      <h5 className="mb-4">All Users</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S. NO.</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>-----</th>
            <th>-----</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.getAllUser.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.FName}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>
                  <button className="btn btn-danger">block</button>
                </td>
                <td>
                  <button className="btn btn-success">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default AllUsers;
