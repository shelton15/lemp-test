import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DeviceList from './components/DeviceList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <Redirect to="/devices" />
        ) : (
          <LoginForm onSuccessLogin={handleSuccessLogin} />
        )}

        <Route exact path="/devices">
          {isLoggedIn ? <DeviceList /> : <Redirect to="/" />}
        </Route>
      </div>
    </Router>
  );
};

export default App;