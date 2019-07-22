import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Info } from 'reducers/info-reducer';

import Education from 'views/components/education/Education';
import WorkExperience from 'views/components/work-experience/WorkExperience';

import './Home.scss';
import Interests from 'views/components/interests/Interests';
import TopSkills from 'views/components/top-skills/TopSkills';
import BuiltWith from 'views/components/built-with/BuiltWith';

class Home extends Component<{ info: Info }> {

    public render() {
        const { info } = this.props;
        return (
            <div className="home">
                <div className="column-wrapper">
                    <section className="title">
                        <h1>{info.name}</h1>
                        <h3>{info.title}</h3>
                    </section>
                    <section className="about">
                        <h2>About Me</h2>
                        {info.about.map((infoItem, i) => <p key={i}>{infoItem}</p>)}
                    </section>
                    <Education />
                    <WorkExperience />
                    <Interests />
                    <TopSkills />
                    <BuiltWith />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    info: state.infoReducer.info,
});

export default connect(mapStateToProps)(Home);
