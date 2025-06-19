// src/pages/Home.js
import './Home.css';
import {useEffect} from 'react';
import background from '../assets/Background.gif';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto'; // scroll heractiveren als je de pagina verlaat
        };
    }, []);

    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20; // max 10px links/rechts
        const y = (e.clientY / window.innerHeight - 0.5) * 20; // max 10px boven/onder
        setOffset({ x, y });
    };

    return (
        <div
            className="home-wrapper"
            onMouseMove={handleMouseMove}
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: `${50 + offset.x}% ${50 + offset.y}%`,
            }}
        >
            <div className="home-overlay" />
            <div className="home-container">
                <h1 className="home-title">Projecten</h1>
                <div className="project-list">
                    <Link to="/PythonGame" className="project-link">Python Game (trauma)</Link>
                    <Link to="/GameJam" className="project-link">Gamejam Game</Link>
                    <Link to="/Parkourtag" className="project-link">Parkour Game</Link>
                    <Link to="/CGPTPlugin" className="project-link">ChatGPT Plugin</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
