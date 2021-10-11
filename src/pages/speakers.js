import React from 'react';
import Speaker from '../components/speaker';
import data from '../data/speakerData.json';
import Side from '../images/hologram-side-02.svg';
import Base from '../images/hologram-base.svg';
import Frame from '../images/hologram-frame.svg';
import './speakers.css';

class Speakers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    createSpeakers = () => {
        const speakerList = [];
        // speaker data will be something about image and then name and description
        data.forEach((speaker) => {
            speakerList.push(<Speaker key="" info={speaker} />);
        });
        return speakerList;
    };

    render() {
        const speakers = this.createSpeakers();

        return (
            <div className="speakers" id="speakers">
                <h1>Speakers</h1>
                <p>
                    Coming soon! Please email <a href="mailto: team@hacktams.org">team@hacktams.org</a> if you are
                    interested in speaking at our event!
                </p>
                <div className="speakers-container">
                    <div className="speakers-menu">{speakers}</div>
                    <div className="speakers-display">
                        <img src={Side} alt="speakers" className="side"></img>
                    </div>
                    <div className="speakers-screen">
                        <img src={Frame} alt="speaker frame" className="display"></img>
                        <img src={Base} alt="base" className="display"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Speakers;
