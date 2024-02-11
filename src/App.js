import React, {useState} from 'react';

import AddUser from './Components/UI/Users/AddUser';
import UsersList from './Components/UI/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, collegename: uCollege, id: Math.random().toString()}];
    })
  }

  return (
    <>
      <AddUser onAddUser ={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
