import React, { useContext } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
function UserList() {
  // const usersData = useContext (GlobalContext)
  //console.log(usersData)
  // const{users} =  usersData // destructuring

  const { users, removeUser } = useContext(GlobalContext);
  // console.log(users);
  // console.log(removeUser);
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {/* // mapping data using javascript map() */}
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <Button onClick={() => removeUser(user.id)} color="danger">
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No users found</h4>
      )}
    </ListGroup>
  );
}

export default UserList;
