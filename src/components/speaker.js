import React from 'react';
import './speaker.css';

class Speaker extends React.Component {
    render() {
        return (
            <div className="speaker">
                <img className="speaker-img" alt="speaker-img" />
                <p className="speaker-name">{this.props.info.name}</p>
                {/* TODO short description here maybe, or just image and name*/}
            </div>
        );
    }
}

export default Speaker;
