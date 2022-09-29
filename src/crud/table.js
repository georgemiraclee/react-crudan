import React from "react";
import { Table } from "react-bootstrap";

const table = ({ bio, editData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {bio.map((bio, index) => {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{bio.firstName}</td>
              <td>{bio.lastName}</td>
              <td>{bio.username}</td>
              <td>
                  <button className="btn btn-warning" onclick={() => editData(bio.id)}>Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default table;
