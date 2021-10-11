import React from 'react';
import { ReactComponent as Left } from '../images/website-top-left.svg';
import { ReactComponent as Right } from '../images/website-top-right.svg';
import './home.css';

class Home extends React.Component {
    submit = () => {
        alert('Registration opens in August!');
    };

    render() {
        return (
            <div className="home">
                <div className="home-container">
                    <h1 className="home-title">hackTAMS</h1>
                    {/* TODO make not button */}
                    <div className="home-register" onClick={this.submit}>
                        Register Now
                    </div>
                    <p>Registration opens in August!</p>
                </div>
                <Left alt="left-building" className="home-building left-building" />
                <Right alt="right-building" className="home-building right-building" />
            </div>
        );
    }
}

export default Home;
