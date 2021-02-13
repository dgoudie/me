import React, { Component } from 'react';

import { Info } from '@stan/me-types';
import WebsiteStack from 'components/website-stack/WebsiteStack';
import moment from 'moment';
import styles from './SupplementalInfo.module.scss';

interface Props {
  info: Info;
  className?: string;
}

export default class SupplementalInfo extends Component<Props, {}> {
  render() {
    return (
      <div className={this.props.className}>
        <div className={styles.inner}>
          <section className={styles.education}>
            <h3>
              <i className="fas fa-graduation-cap"></i>
              <span>education</span>
            </h3>
            <ul>
              {this.props.info.education.map((educationItem, i) => (
                <li key={i}>
                  <div className={styles.imgWrapper}>
                    <img
                      alt={educationItem.title}
                      src={educationItem.iconUrl}
                    />
                  </div>
                  <div>
                    <h4>{educationItem.title}</h4>
                    {educationItem.secondaryInfo.map((item, j) => (
                      <h5 key={`${i}-${j}`}>{item}</h5>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.workExperience}>
            <h3>
              <i className="fas fa-building"></i>
              <span>work experience</span>
            </h3>
            <ul>
              {this.props.info.workExperience.map((wei, i) => (
                <li key={i}>
                  <h4>{wei.jobTitle}</h4>
                  <h5>
                    <span>
                      <img src={wei.iconUrl} alt={wei.company} />
                      {wei.company}
                    </span>
                    <span>
                      <i className="fas fa-calendar"></i>
                      {moment(wei.startDate).format('MMMM YYYY')} -{' '}
                      {!!wei.endDate
                        ? moment(wei.endDate).format('MMMM YYYY')
                        : 'Present'}
                    </span>
                  </h5>
                  <p>{wei.description}</p>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.websiteStack}>
            <h3>
              <i className="fas fa-server"></i>
              <span>this website's tech-stack</span>
            </h3>
            <h6>
              I run a full web stack from my house (on which this website is
              hosted). Below is a graph representing the components and tools
              this website relies on.
            </h6>
            <h6>Click or tap on an item to learn more about its usage</h6>
            <WebsiteStack
              websiteStackElements={this.props.info.websiteStackElements}
            />
          </section>
          <section></section>
        </div>
      </div>
    );
  }
}
