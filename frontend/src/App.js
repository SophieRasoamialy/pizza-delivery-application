import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez également Routes
import LoginPage from './components/auth/loginPage';
import RegisterPage from './components/auth/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
