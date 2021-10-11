import React from 'react';

import './navbar.css';
import Logo from'../images/logo-2021.svg';

class Navbar extends React.Component {
    openSite = (site) => {
        if (site !== '') window.open(site);
    };

    render() {
        return (
            <div className="navbar" ref={this.props.reference} id="navbar">
                <header>
                    <a class="logo" href="/#navbar">
                        <img src={Logo} alt="logo" className="logoimg"/>
                    </a>
                    <nav>
                        <ul class="nav__links">
                            <li><a href="/#about">About</a></li>
                            <li><a href="/#speakers">Speakers</a></li>
                            <li><a href="/#faq">FAQ</a></li>
                            <li><a href="/#sponsors">Sponsors</a></li>
                        </ul>
                    </nav>
                    <a class="cta" href="/#footer">Contact</a>
                </header>
            </div>
        );
    }
}

export default Navbar;
