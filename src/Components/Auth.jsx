import React, { useState } from 'react';

function Auth({ onAuthSuccess }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();

    if (isSignIn) {
      // Sign In logic
      const response = await fetch(`http://localhost:5000/users?email=${email}`);
      const users = await response.json();

      if (users.length > 0 && users[0].password === password) {
        onAuthSuccess();
      } else {
        alert('Invalid credentials');
      }
    } else {
      // Sign Up logic
      const response = await fetch(`http://localhost:5000/users?email=${email}`);
      const users = await response.json();

      if (users.length > 0) {
        alert('User already exists');
      } else {
        await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        alert('User registered successfully. Please sign in.');
        setIsSignIn(true);
      }
    }
  };

  return (
    <div>
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <form onSubmit={handleAuth}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
      </form>
      <button onClick={() => setIsSignIn(!isSignIn)}>
        {isSignIn ? 'Switch to Sign Up' : 'Switch to Sign In'}
      </button>
    </div>
  );
}

export default Auth;
