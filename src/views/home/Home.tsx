import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Info } from 'reducers/info-reducer';

import Education from 'views/components/education/Education';
import WorkExperience from 'views/components/work-experience/WorkExperience';

import './Home.scss';

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
                    <Education />
                    <WorkExperience />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    info: state.infoReducer.info,
});

export default connect(mapStateToProps, null)(Home);
