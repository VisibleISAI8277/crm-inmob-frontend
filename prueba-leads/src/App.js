// src/App.js
import React, { useState } from 'react';
import { db } from './lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveLead = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'leads'), {
        name,
        email,
        source: 'web',
        createdAt: new Date(),
      });
      alert('✅ Lead guardado en Firebase');
      setName('');
      setEmail('');
    } catch (err) {
      console.error(err);
      alert('❌ Error al guardar lead');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Prueba de Lead - Firebase</h2>
      <form onSubmit={handleSaveLead}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          required
          style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem' }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Guardar Lead
        </button>
      </form>
    </div>
  );
}

export default App;