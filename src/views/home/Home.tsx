import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {

    public state = {
        titleFontSize: 10,
        headerPadding: 5,
    };

    public componentDidMount() {
        window.addEventListener(`scroll`, this.handleScroll);
    }

    public componentWillUnmount() {
        window.removeEventListener(`scroll`, this.handleScroll);
    }
    public render() {
        const { titleFontSize, headerPadding } = this.state;
        return (
            <div className="home">
                <header className={titleFontSize < 10 ? `fixed` : ``} style={{ padding: `${headerPadding}em` }}>
                    <div className="header-inner">
                        <div className="me">
                            <h2>Daniel Goudie</h2>
                            <h3>Full Stack Software Developer</h3>
                        </div>
                        <h1 style={{ fontSize: `${titleFontSize}rem` }}>Hello!</h1>
                    </div>
                </header>
                <div className="body" style={{ height: `2000px` }}>

                </div>
                <footer>
                    <div className="line"></div>
                    <div className="footer-inner">
                        <div>
                            <i className="fas fa-phone"></i>
                            <strong>Phone:</strong>
                            <span>402-618-5756</span>
                        </div>
                        <div>
                            <i className="fab fa-linkedin"></i>
                            <strong>LinkedIn:</strong>
                            <a href="https://www.linkedin.com/in/daniel-goudie-817b93115">Daniel Goudie</a>
                        </div>
                        <div>
                            <i className="fas fa-envelope"></i>
                            <strong>Email:</strong>
                            <a href="mailto:emdgoudie@gmail.com">emdgoudie@gmail.com</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

    public handleScroll = () => {
        let height = window.scrollY;
        if (height < 160) {
            height = 160;
        } else if (height > 320) {
            height = 320;
        }
        this.setState({
            headerPadding: ((-(height - 320) / 160) * 4) + 1,
            titleFontSize: (((160 - height) / 160) * 7) + 10,
        });
    }
}

export default Home;
