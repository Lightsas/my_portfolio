import React from 'react';
import { FaBars } from 'react-icons/fa';
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
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#future">Future</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;