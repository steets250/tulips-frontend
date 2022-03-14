import React from "react";
import { Link } from "react-router-dom";

import './style.less';

const Header: React.FC = () => {
    return (
        <div className="header">
            <h1>Project Tulips</h1>
            <nav>
                <Link to="/" className="link">home</Link>
                <Link to="/about" className="link">about</Link>
                <Link to="/report" className="link">data report</Link>
                <Link to="/resources" className="link">resources</Link>
            </nav>
        </div>
    );
};

export default Header;