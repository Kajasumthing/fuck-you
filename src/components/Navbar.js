// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <div className="navbar-logo">
                    MijnSite <span className="navbar-subtext">- gemaakt door Kieran</span>
                </div>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/PythonGame">Python Game</Link></li>
                <li><Link to="/Gamejam">Gamejam Game</Link></li>
                <li><Link to="/Parkourtag">Parkour Game</Link></li>
                <li><Link to="/CGPTPlugin">ChatGPT Plugin</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
