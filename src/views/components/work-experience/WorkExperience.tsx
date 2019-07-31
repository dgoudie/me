import React, { Component } from 'react';

import './WorkExperience.scss';
import { WorkExperienceItem } from 'model/Info';

class WorkExperience extends Component<{ workExperience: WorkExperienceItem[] }> {

    public render() {
        const { workExperience } = this.props;
        return (
            <section className="work-experience">
                <h2>Work experience</h2>
                <ol>
                    {workExperience.map((workExperienceItem, i) => (
                        <li key={i}>
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
                            <div className={`line up ${i === 0 ? `dotted` : ``}`} />
                            <div className="circle" />
                            <div className={`line down ${i >= workExperience.length - 1 ? `dotted` : ``}`} />
                            <img src={`${process.env.PUBLIC_URL}/work-experience/${workExperienceItem.icon}`} alt="Company" />
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

export default WorkExperience;
