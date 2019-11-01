import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import '../styles.scss';


const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="nav">
            <h1>Tennis Players</h1>
            <div className="dark-mode-toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default NavBar;