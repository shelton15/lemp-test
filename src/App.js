import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DeviceList from './components/DeviceList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    // Set the isLoggedIn state to true upon successful login
    setIsLoggedIn(true);
    navigate('/devices'); // Navigate to the '/devices' route after successful login
  };

  return (
    <Router>
      <div>
        <h1>App</h1>

        <Route exact path="/">
          {isLoggedIn ? (
            <Route path="/devices">
              <DeviceList />
            </Route>
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
        </Route>
      </div>
    </Router>
  );
}

export default App;