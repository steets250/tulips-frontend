import React from "react";
import { Link } from "react-router-dom";

import './style.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <h1>Project Tulips</h1>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/data-report">data report</Link>
            <Link to="/resources">resources</Link>
        </div>
    );
};

export default Header;