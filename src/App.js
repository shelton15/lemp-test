import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(
        `https://connect.paj-gps.de/api/login?email=${encodeURIComponent(
          email
        )}&password=${encodeURIComponent(password)}`,
        {
          method: 'POST',
        }
      );
      const data = await response.json();

      // Assuming the API response includes a token
      const token = data.token;
      setToken(token);

      // Do something with the token (e.g., store it in local storage)
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      {token ? (
        // Render your authenticated component or redirect to another page
        <h1>You are logged in!</h1>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;