import React from 'react';
import {Routes,Route} from 'react-router-dom'
import LoginPage from '../Components/LoginPage';
import SignupPage from '../Components/SignupPage';
import Dashboard from '../Components/Dashboard';

export default function RouterComp() {
  return (
  <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="Signup" element={<SignupPage/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
  </Routes>
  );
}
