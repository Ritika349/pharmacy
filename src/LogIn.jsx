import React, { useState } from 'react';
import Bounce from 'react-reveal/Bounce';
const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
     if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
      alert('Logged in successfully!');
    } else {
      alert('Please enter username and password.');
    }
  };

  return (
    <Bounce top>
    <div className="flex justify-center items-center h-screen border ">
    <div className=" p-8 rounded shadow-md border border-black 2xl">
      {loggedIn ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Welcome, {username}!</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => setLoggedIn(false)} >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
          <input type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"/>
          <button className="btn-primary px-6 py-3 w-36 mt-6 bg-blue-300 hover:bold " onClick={handleLogin} >
            Login
          </button>
        </div>
      )}
    </div>
  </div>
  </Bounce>
  );
};

export default LogIn;
