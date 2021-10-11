import React from 'react';

import { ReactComponent as Sign } from '../images/contact-us-sign.svg';
import { ReactComponent as Facebook } from '../images/facebook.svg';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import { ReactComponent as Twitter } from '../images/twitter.svg';

import './footer.css';

class Footer extends React.Component {
    openSite = (site) => {
        if (site !== '') window.open(site);
    };

    render() {
        return (
            <div className="footer" ref={this.props.reference} id="footer">
                <div className="footer-signs">
                    <Sign alt="Contact Us" className="footer-sign" />
                    <Facebook
                        alt="Facebook"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://www.facebook.com/hackTAMS')}
                    />
                    <Instagram
                        alt="Instagram"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://www.instagram.com/hacktams/?hl=en')}
                    />
                    <Twitter
                        alt="Twitter"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://twitter.com/thehackTAMS')}
                    />
                </div>
                <p className="footer-info">
                    Contact us at <a href="mailto: team@hacktams.org">team@hacktams.org</a>!<br></br>
                    Want to sponsor us? Email us at{' '}
                    <a href="mailto:sponsorship@hacktams.org">sponsorship@hacktams.org</a>!
                </p>
            </div>
        );
    }
}

export default Footer;
