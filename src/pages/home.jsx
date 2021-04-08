import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await Axios.get('http://localhost:3003/users');
    setUsers(result.data.reverse());
  };

  const deleteUser = async id => {
    await Axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className='container'>
      <h1 className='py-4'>Inside home page</h1>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>User Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className='btn btn-primary mr-2' to={`users/${user.id}`}>
                  View
                </Link>
                <Link
                  className='btn btn-outline-primary mr-2'
                  to={`users/edit/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  className='btn btn-danger'
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
