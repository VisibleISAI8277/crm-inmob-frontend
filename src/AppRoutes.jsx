// frontend/src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LeadCreate from './modules/leads/pages/LeadCreate';

// ... otras importaciones y rutas del sistema



const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas existentes de IDURAR */}
      
      {/* Tu nueva ruta */}
      <Route path="/" element={<LeadCreate />} />	 
      <Route path="/leads/new" element={<LeadModule />} />
    </Routes>
  );
};

export default AppRoutes;