import React from 'react';
import Frame from '../images/sponsor_frame.svg';
/*import Default from '../images/raw.png';*/
import './sponsors.css';

class Sponsors extends React.Component {
    render() {
        return (
            <div className="sponsors" id="sponsors">
                <h1>Our Sponsors</h1>
                <div className="break"></div>
                <img src={Frame} alt="Frame" className="sponsor large" />
                <div className="break"></div>
                <img src={Frame} alt="Frame" className="sponsor medium" />
                <img src={Frame} alt="Frame" className="sponsor medium" />
                <img src={Frame} alt="Frame" className="sponsor small" />
                <img src={Frame} alt="Frame" className="sponsor small" />
                <img src={Frame} alt="Frame" className="sponsor small" />
            </div>
        );
    }
}

export default Sponsors;
