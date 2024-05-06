import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez également Routes
import LoginPage from './components/auth/loginPage';
import RegisterPage from './components/auth/register';
import Home from './components/home';
import CustomPizza from './components/page/customPizza';
import Commande from './components/admin/commande';
import Pizza from './components/admin/pizza';
import Ingredients from './components/admin/ingredients';
import ClientOrder from './components/page/myOrder';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/customPizza" element={<CustomPizza />} /> 
          <Route path="/client/order" element={<ClientOrder />} />
          <Route path="/admin/commande" element={<Commande />} /> 
          <Route path="/admin/pizza" element={<Pizza />} /> 
          <Route path="/admin/ingredients" element={<Ingredients />} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
