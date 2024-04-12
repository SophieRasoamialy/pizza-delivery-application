import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez également Routes
import LoginPage from './components/auth/loginPage';
import RegisterPage from './components/auth/register';
import Home from './components/home';
import CustomPizza from './components/page/customPizza';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/customPizza" element={<CustomPizza />} /> 
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
