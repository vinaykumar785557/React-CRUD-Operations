import React, { useContext, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
function AddUser() {
  const [name, setName] = useState("");

  const { addUser } = useContext(GlobalContext);
  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      // id: 4,
      // name: "User Four",
      id: uuid(),
      name: name,
    };

    addUser(newUser);
    history.push("/");
  };

  const onChange = (event) => setName(event.target.value);
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="Enter Name"
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
}

export default AddUser;
