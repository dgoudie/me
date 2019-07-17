import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
    public render() {
        return (
            <div className="home">
                <header>
                    <div className="header-inner">
                        <h2>Daniel Goudie</h2>
                        <h3>Full Stack Software Developer</h3>
                        <h1>Hello!</h1>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;
