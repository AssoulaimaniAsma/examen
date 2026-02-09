import React from 'react';
import '../../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Chargement...</p>
    </div>
  );
};

export default Loader;