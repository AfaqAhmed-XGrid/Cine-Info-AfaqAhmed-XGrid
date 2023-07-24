// Import packages
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, useLocation } from 'react-router';

// Import components
import PrivateRoute from './ui/components/PrivateRoute';
import Navbar from './ui/components/Navbar/Navbar';
import SideNavbar from './ui/components/SideNavbar/SideNavbar';

// Import pages
import Signin from './ui/pages/SignIn/SignIn';
import Signup from './ui/pages/SignUp/SignUp';
import Dashboard from './ui/pages/Dashboard/Dashboard';
import EditProfile from './ui/pages/EditProfile/EditProfile';

// Import constants
import constants from './app.constants';

// Import css
import './App.css';


const App = () => {
  const location = useLocation();
  const showNavbar = ['/dashboard', '/edit-profile', '/change-password', '/charts', '/users'].includes(location.pathname);
  return (
    <section>
      {showNavbar && <Navbar />}
      {showNavbar && <SideNavbar />}
      <Routes>
        <Route
          path={constants.pagelinks.dashbaord}
          element={<PrivateRoute Component={Dashboard} />}
        />
        <Route
          path={constants.pagelinks.home}
          element={<PrivateRoute Component={Dashboard} />}
        />
        <Route
          path={constants.pagelinks.editProfile}
          element={<PrivateRoute Component={EditProfile} />}
        />
        <Route path={constants.pagelinks.signin} element=<Signin /> />
        <Route path={constants.pagelinks.signup} element=<Signup /> />
      </Routes>
      <Toaster />
    </section>
  );
};

export default App;
