// frontend/src/modules/leads/index.js
import React from 'react';
import { Route } from 'react-router-dom';

import LeadCreate from './pages/LeadCreate';

const LeadsModule = () => {
  return (
    <Route path="/leads/new" element={<LeadCreate />} />
  );
};

export default LeadsModule;