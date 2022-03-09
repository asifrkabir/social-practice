import { useEffect, useState } from 'react';
import './App.css';
import Admin from './components/Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import userData from './userData.json';

function App() {

  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, [])

  const handleAddFriends = (user) => {
    const newFriends = [...friends, user];
    setFriends(newFriends);
  }

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="container">
        <Admin friends={friends}></Admin>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 d-flex align-items-center">
          {users.map(user => <User key={user.id} user={user} handleAddFriends={handleAddFriends}></User>)}
        </div>
      </div>
    </div>
  );
}

export default App;
