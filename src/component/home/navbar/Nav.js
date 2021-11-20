import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <nav>
            <input type="checkbox" name="" id="check"></input>
            <label for="check" className="checkbtn">
                <i><FaBars /></i>
            </label>
            <label className="logo">LITON</label>
            <ul className="hoveer">
                <li><Link to="/" className="active" href="#home">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#future">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;