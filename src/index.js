// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import Home from './pages/Home';
import PythonGame from './pages/PythonGame';
import GameJam from './pages/GameJam';
import ParkourTag from './pages/ParkourTag';
import CGPTPlugin from './pages/CGPTPlugin';
import Navbar from './components/Navbar'; // importeer Navbar
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navbar /> {/* staat boven je Routes zodat het overal zichtbaar is */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/PythonGame" element={<PythonGame />} />
            <Route path="Gamejam" element={<GameJam />} />
            <Route path="Parkourtag" element={<ParkourTag />} />
            <Route path="CGPTPlugin" element={<CGPTPlugin />} />
            <Route path="/App" element={<App />} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
