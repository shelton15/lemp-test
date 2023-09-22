import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DeviceList from './components/DeviceList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    // Set the isLoggedIn state to true upon successful login
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <h1>App</h1>

        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/devices" /> : <LoginForm onLogin={handleLogin} />}
          />

          <Route
            path="/devices"
            element={isLoggedIn ? <DeviceList /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;