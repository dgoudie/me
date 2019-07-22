import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Info } from 'reducers/info-reducer';

import './TopSkills.scss';

class TopSkills extends Component<{ info: Info }> {
    render() {
        const topSkills = this.props.info.topSkills;
        return (
            <section className="top-skills">
                <h2>Top Skills</h2>
                <ol>
                    {topSkills.map((ts, i) => (
                        <li key={i}>
                            <span>{ts.name}</span>
                            <div className="percentage-bar">
                                <div className="percentage-bar-fill" style={{ width: `${ts.percentage}%` }} />
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
        );
    }
}

const mapStateToProps = (state: any) => ({
    info: state.infoReducer.info,
});

export default connect(mapStateToProps)(TopSkills);