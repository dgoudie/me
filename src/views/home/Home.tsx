import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Info } from 'reducers/info-reducer';
import './Home.scss';

class Home extends Component<{ info: Info }> {

    public render() {
        const { info } = this.props;
        return (
            <div className="home">
                <div className="column-wrapper">
                    <div className="column" id="column1">
                        <section>
                            <h1>{info.name}</h1>
                            <h3>{info.title}</h3>
                        </section>
                        <section className="education">
                            <h2>Education</h2>
                            <ol>
                                {info.education.map((educationItem) => (
                                    <li>
                                        <h4>{educationItem.title}</h4>
                                        <span>{educationItem.secondaryInfo}</span>
                                        <span>{educationItem.tertiaryInfo}</span>
                                    </li>
                                ))}
                            </ol>
                        </section>
                        <section className="work-experience">
                            <h2>Education</h2>
                            <ol>
                                <li className="present">
                                    <div className="dotted-line up"></div>
                                    <div className="cirle"></div>
                                    <div className="line-down"></div>
                                    <span>Present</span>
                                </li>
                                {info.workExperience.map((workExperienceItem) => (
                                    <li>
                                        <div className="dotted-line up"></div>
                                        <div className="cirle"></div>
                                        <div className="line-down"></div>
                                        <span>Present</span>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    </div>
                    <div className="column" id="column2"></div>
                    <div className="column" id="column3"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    info: state.infoReducer.info,
});

export default connect(mapStateToProps, null)(Home);
