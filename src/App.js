import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import React from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
