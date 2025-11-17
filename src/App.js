// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>

    
    <div className="App">
      {/* Cambio para forzar redeploy */}
      <h1>CRM Inmobiliario</h1>
    </div>


  );
}

export default App;