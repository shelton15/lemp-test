import React, { useState } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DeviceList from './components/DeviceList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessLogin = () => {
    setIsLoggedIn(true);
  };

  return (
  
      <div>
        {isLoggedIn ? (
          <Navigate  replace to="/devices" />
        ) : (
          <LoginForm onSuccessLogin={handleSuccessLogin} />
        )}
        <Routes>
          <Route exact path="/devices">
            {isLoggedIn ? <DeviceList /> : <Navigate  replace to="/" />}
          </Route>
        </Routes>
        
      </div>
    
  );
};

export default App;