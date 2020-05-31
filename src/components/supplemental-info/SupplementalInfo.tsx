import React, { Component } from 'react';

import { Info } from '@stan/me-types';
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
                      <i className="fas fa-briefcase"></i>
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
          <section className={styles.builtWith}>
            <h3>
              <i className="fas fa-server"></i>
              <span>website built and hosted with...</span>
            </h3>
            <ul>
              {this.props.info.builtWith.map((bwi, i) => (
                <li key={i}>
                  <div className={styles.imgWrapper}>
                    <img src={bwi.iconUrl} alt={bwi.name} />
                  </div>
                  <h4>{bwi.name}</h4>
                  {!!bwi.links?.length && (
                    <div className={styles.builtWithLinks}>
                      {bwi.links.map((link) => (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={link.url}
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
