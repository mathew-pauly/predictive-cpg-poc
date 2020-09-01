import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';
const Header = () =>{
    return <header className="header">
        <img src={logo} alt={"logo"}/>
        <div className="title-container">
            <div className="app-title">
                <span>ADVANDED</span>
                <span>TECHNOLOGY</span>
                <span>COLLABORATION</span>
            </div>
            <hr/>
            <div className="app-desc">
                <span>Clinical Practice Guideline</span>
            </div>
        </div>
    </header>
}

export default Header;
