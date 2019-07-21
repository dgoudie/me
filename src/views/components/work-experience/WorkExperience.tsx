import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Info } from 'reducers/info-reducer';

import './WorkExperience.scss';

class WorkExperience extends Component<{ info: Info }> {

    public render() {
        const { info } = this.props;
        return (
            <section className="work-experience">
                <h2>Work experience</h2>
                <ol>
                    {info.workExperience.map((workExperienceItem, index) => (
                        <li>
                            <div className="date">
                                <div className="start">
                                    <span>{workExperienceItem.startMonth}</span>
                                    <span>{workExperienceItem.startYear}</span>
                                </div>
                                <div className="dash" />
                                <div className="start">
                                    <span>{workExperienceItem.endMonth}</span>
                                    {!!workExperienceItem.endYear ? <span>{workExperienceItem.endYear}</span> : null}
                                </div>
                            </div>
                            {index === 0 ? <div className="line up dotted" /> : null}
                            <div className="circle" />
                            <div className={`line down ${index >= info.workExperience.length - 1 ? `dotted` : ``}`} />
                            <img src={`${process.env.PUBLIC_URL}/work-experience/${workExperienceItem.icon}`} alt="Company"/>
                            <div>
                                <h4>{workExperienceItem.jobTitle}</h4>
                                <span>{workExperienceItem.company}</span>
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

export default connect(mapStateToProps)(WorkExperience);