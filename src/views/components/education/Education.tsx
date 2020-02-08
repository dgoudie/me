import React, { Component } from 'react';

import './Education.scss';
import { EducationItem } from 'model/Info';

class Education extends Component<{ education: EducationItem[] }> {
  public render() {
    const { education } = this.props;
    return (
      <section className="education">
        <h2>Education</h2>
        <ol>
          {education.map((educationItem, i) => [
            <li key={i}>
              <div className="img-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/education/${educationItem.icon}`}
                  alt="School Icon"
                />
              </div>
              <div>
                <h4>{educationItem.title}</h4>
                {educationItem.secondaryInfo.map((si, j) => (
                  <span key={j}>{si}</span>
                ))}
              </div>
            </li>
          ])}
        </ol>
      </section>
    );
  }
}

export default Education;
