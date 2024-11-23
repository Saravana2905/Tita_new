import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Header() {
    return (
        <div>
            <header className="header header_style_01">
                <nav className="megamenu navbar navbar-default">
                    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className="navbar-header" style={{ display: 'flex', alignItems: 'center' }}>
                            <a className="navbar-brand">
                                <img src="assets/images/logos/logo-seo.png" alt="image" style={{ height: '50px' }} />
                            </a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse" style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                            <ul className="nav navbar-nav menu-top" style={{ display: 'flex', margin: '0', padding: '0', listStyle: 'none', flexGrow: 1 }}>
                                <li><a className="active" href="index-2.html">Home</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="case-study.html">Careers</a></li>
                                <li><a href="pricing.html">Contact</a></li>
                                <li><a href="contact.html">Blogs</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                <li style={{ margin: '0 5px' }}>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ fontSize: '20px', color: 'green' }} /></a>
                                </li>
                                <li style={{ margin: '0 5px' }}>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ fontSize: '20px', color: 'green' }} /></a>
                                </li>
                                <li style={{ margin: '0 5px' }}>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ fontSize: '20px', color: 'green' }} /></a>
                                </li>
                                <li style={{ margin: '0 5px' }}>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ fontSize: '20px', color: 'green' }} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;
