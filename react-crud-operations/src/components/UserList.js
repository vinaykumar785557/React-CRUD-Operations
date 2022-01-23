import React from "react";
import { ListGroup, ListGroupItem, Button, List } from "reactstrap";
import { Link } from "react-router-dom";
function UserList() {
  return (
    <ListGroup className="mt-4">
      <ListGroupItem className="d-flex">
        <strong>User One</strong>
        <div className="ml-auto">
          <Link className="btn btn-warning mr-1" to="/edit/1">
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
      <ListGroupItem className="d-flex">
        <strong>User One</strong>
        <div className="ml-auto">
          <Link className="btn btn-warning mr-1" to="/edit/1">
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
}

export default UserList;
