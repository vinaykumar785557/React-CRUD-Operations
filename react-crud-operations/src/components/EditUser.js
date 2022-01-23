import React, { useContext, useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

function EditUser(props) {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });

  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    // console.log(typeof userId);
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
    // console.log(selectedUser);
  }, [currentUserId, users]);

  const onSubmit = (event) => {
    event.preventDefault();
    editUser(selectedUser)
    history.push("/");
  };

  const onChange = (e) => {
    setSelectedUser({...selectedUser,[e.target.name]:e.target.value})
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={selectedUser.name}
          onChange={onChange}
          placeholder="Enter Name"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
}

export default EditUser;
