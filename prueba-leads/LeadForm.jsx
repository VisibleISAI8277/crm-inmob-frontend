// frontend/src/modules/leads/components/LeadForm.jsx
import React, { useState } from 'react';
import { db } from '../../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const LeadForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zone, setZone] = useState('Providencia');

  const handleSaveLead = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'leads'), {
        name,
        email,
        source: 'web',
        preferences: { zones: [zone], type: 'depto' },
        createdAt: new Date()
      });
      alert('Lead guardado en Firebase ✅');
      // Opcional: resetear formulario
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Error al guardar lead:', err);
      alert('Error al guardar');
    }
  };

  return (
    <form onSubmit={handleSaveLead}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Guardar Lead</button>
    </form>
  );
};

export default LeadForm;