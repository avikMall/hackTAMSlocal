import React from 'react';
import './about.css';
import Top from '../images/about_top.svg';
import Left from '../images/about_left.svg';
import Right from '../images/about_right.svg';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false, toggle: 'left' };
    }

    toggleDropdown = () => {
        this.setState({ dropdown: !this.state.dropdown });
    };

    changeSwitch = (dir) => {
        this.setState({ toggle: dir });
    };

    changeState_l = (dir_p) => {
        this.changeSwitch(dir_p);
        document.getElementsByClassName("left")[0].id = "selected";
        document.getElementsByClassName("middle")[0].id = "";
        document.getElementsByClassName("right")[0].id = "";
    }

    changeState_m = (dir_p) => {
        this.changeSwitch(dir_p);
        document.getElementsByClassName("left")[0].id = "";
        document.getElementsByClassName("middle")[0].id = "selected";
        document.getElementsByClassName("right")[0].id = "";
    }

    changeState_r = (dir_p) => {
        this.changeSwitch(dir_p);
        document.getElementsByClassName("left")[0].id = "";
        document.getElementsByClassName("middle")[0].id = "";
        document.getElementsByClassName("right")[0].id = "selected";
    }

    render() {
        return (
            <div className="about" id="about">
                <img src={Top} alt="lights" className="top"></img>
                <div className="info">
                    <h1>About</h1>
                    <p>
                        hackTAMS is an annual hackathon organized by students at the Texas Academy of Mathematics and
                        Science. Our event brings high school students from across the DFW area to showcase their talent and
                        creativity. A hackathon is a coding marathon where students design, build, and present a project —
                        typically software, and sometimes hardware — within a short period of time. Students have access to
                        mentors, speakers, workshops, and networking opportunities while working on their project.
                </p>
                    <p>
                        A hackathon is a coding marathon where students design, build, and present a project — typically
                        software, and sometimes hardware — within a short period of time. Students have access to mentors,
                        speakers, workshops, and networking opportunities while working on their project.
                </p>
                    <div className="tracks-container">
                        <div className="track-switch-container">
                            <div
                                className={`track-switch left ${this.state.toggle}-active`}
                                onClick={this.changeState_l.bind(this, 'left')}
                                id="selected"
                            >
                                <h3>Hack</h3>
                            </div>
                            <div
                                className={`track-switch middle ${this.state.toggle}-active`}
                                onClick={this.changeState_m.bind(this, 'middle')}
                                id=""
                            >
                                <h3>Design</h3>
                            </div>
                            <div
                                className={`track-switch right ${this.state.toggle}-active`}
                                onClick={this.changeState_r.bind(this, 'right')}
                                id=""
                            >
                                <h3>Learn</h3>
                            </div>
                        </div>
                        <div className={`track hack ${this.state.toggle}`}>
                            <p>
                                The Hack track is geared towards students who have experience in computer science and
                                engineering. Students will design and prototype a project using their technical skills and the
                        latest technologies. For example projects, consider looking at{' '}
                                <a href="https://devpost.com/software" target="_blank" rel="noreferrer">
                                    previous projects on Devpost
                        </a>
                        .
                    </p>
                        </div>
                        <div className={`track design ${this.state.toggle}`}>
                            <p>
                                To be decided.
                    </p>
                        </div>
                        <div className={`track learn ${this.state.toggle}`}>
                            <p>
                                The Learn track is for students who have not as much experience in coding. Take this as an
                                opportunity to add new skills to your toolbox and put them to your first use! Here are some of
                                the “starting kits” we will provide to give you a head-start on your project: Web Dev, Machine
                                Learning, Video Games.
                    </p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <img src={Left} alt="chairs" className="item"></img>
                    <img src={Right} alt="hotel" className="item"></img>
                </div>
            </div>
        );
    }
}

export default About;
