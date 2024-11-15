import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Assurez-vous d'utiliser un seul Router ici
import App from './App';
import './index.css';

ReactDOM.render(
  <Router>  {/* Un seul Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
