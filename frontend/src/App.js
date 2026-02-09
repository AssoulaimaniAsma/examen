import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import LivresPage from './pages/LivresPage';
import EmpruntsPage from './pages/EmpruntsPage';
import UsersPage from './pages/UsersPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/livres" element={<LivresPage />} />
            <Route path="/emprunts" element={<EmpruntsPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;