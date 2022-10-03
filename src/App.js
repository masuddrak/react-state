import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExtarnalUsers></ExtarnalUsers>
    </div>
  );
}
function ExtarnalUsers() {
  const [users, setUsers] = useState([])
  console.log(users)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>External Users Loaded {users.length}</h1>
      {
        users.map(user => <Users
          name={user.name}
          key={user.id}
          email={user.email}
        ></Users>)
      }
    </div>
  )
}
function Users(props) {
  return (
    <div>
      <h3>name:{props.name}</h3>
      <p>name:{props.email}</p>
    </div>
  )
}
export default App;
