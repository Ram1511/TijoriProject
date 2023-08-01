import React from 'react';
import ReactDOM from 'react-dom/client';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/stylesheet.css';
import App from './App';

// window = {};
// const container = document.getElementById('root');

// const root = ReactDOM.hydrateRoot(container, <App />);
const root = ReactDOM.createRoot(document.getElementById('root'));
// AOS.init();
root.render(<App />);