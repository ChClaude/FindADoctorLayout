import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <form action >
        <select name="location">
          <option value>Location</option>
          <option value="Cape Town">Cape Town</option>
          <option value="Johannesburg">Johannesburg</option>
          <option value="Durban">Durban</option>
          <option value="Pretoria">Pretoria</option>
          <option value="Alice">Alice</option>
          <option value="Port Elizabeth">Port Elizabeth</option>
          <option value="Queen's Town">Queen's Town</option>
          <option value="Wellington">Wellington</option>
        </select>
        <select name="speciality">
          <option value>Speciality</option>
          <option value="Dentist">Dentist</option>
          <option value="Paediatrician">Paediatrician</option>
          <option value="General Practitioner">General Practitioner</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Gynaecologist">Gynaecologist</option>
          <option value="Opthalmologist">Opthalmologist</option>
          <option value="Surgeon">Surgeon</option>
          <option value="Psychologist">Psychologist</option>
          <option value="Psychologist">Psychologist</option>
          <option value="Psychiatrist">Psychiatrist</option>
        </select>
        <button>Search</button>
      </form>
    </main>
  );
}

export default App;
