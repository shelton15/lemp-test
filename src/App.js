import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('https://connect.paj-gps.de/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('API response:', data); // Check the entire API response
  
        // Extract the token from the response
        if (data.token) {
          const token = data.token;
          console.log('Extracted token:', token); // Check the extracted token in the console
          setToken(token);
        } else {
          // console.error('Token not found in the API response');
          // Handle token not found error
        }
      } else {
        console.error('Error logging in:', response.status);
        // Handle login error
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error
    }
  };

  return (
    <div>
      {token ? (
        <p>You are logged in. Token: {token}</p>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;