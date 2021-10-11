import React from 'react';
import Home from './pages/home';
import Navbar from './pages/navbar'
import About from './pages/about';
import Speakers from './pages/speakers';
import FAQ from './pages/faq';
import Sponsors from './pages/sponsors';
import Footer from './pages/footer';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.home = React.createRef();
        this.navbar = React.createRef();
        this.about = React.createRef();
        this.speakers = React.createRef();
        this.faq = React.createRef();
        this.sponsors = React.createRef();
        this.footer = React.createRef();
    }
    render() {
        return (
            <div className="app">
                <Navbar reference={this.navbar} />
                <Home reference={this.home} />
                <About reference={this.about} />
                <div className="section-break sb1" />
                <Speakers reference={this.speakers} />
                <div className="section-break sb2" />
                <FAQ reference={this.faq} />
                <div className="section-break sb3" />
                <Sponsors reference={this.sponsors} />
                <div className="section-break sb4" />
                <Footer reference={this.footer} />
            </div>
        );
    }
}

export default App;
