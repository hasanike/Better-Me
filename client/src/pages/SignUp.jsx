import React, { useState } from 'react';

const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Your authentication logic here (e.g., calling an API)
    try {
      // Simulating authentication
      if (email === 'user@example.com' && password === 'password') {
        // Successful sign-in
        console.log('Sign-in successful!');
        // Redirect user to dashboard or another page
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError('An error occurred while signing in');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
