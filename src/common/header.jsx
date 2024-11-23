import React from "react";



function Header() {
    return (
        <div>
            <header className="header header_style_01">
                <nav className="megamenu navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" ><img src="assets/images/logos/logo-seo.png" alt="image" /></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right hidden-md hidden-sm hidden-xs">
                                <li><a className="btn-light btn-radius btn-brd top-btn" href="#"><i className="fa fa-angle-double-right" />SEO Analysis</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right menu-top">
                                <li><a className="active" href="index-2.html">Home</a></li>
                                <li><a href="about.html">About Us </a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="case-study.html">Case Study</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>


        </div>
    )
}

export default Header;
