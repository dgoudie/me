import React, { useContext } from 'react';

import WebsiteStack from 'components/website-stack/WebsiteStack';
import moment from 'moment';
import styles from './SupplementalInfo.module.scss';
import { gql, useQuery } from '@apollo/client';
import { EducationItem, WorkExperienceItem } from '@dgoudie/me-types';
import { ErrorContext } from 'App';
import { Redirect } from 'react-router';
import RecentProjects from 'components/recent-projects/RecentProjects';

const supplementalInfoQuery = gql`
  {
    education {
      iconUrl
      title
      secondaryInfo
    }
    workExperience {
      iconUrl
      company
      jobTitle
      startDate
      endDate
      description
    }
  }
`;

export default function SupplementalInfo() {
  const { data, error } = useQuery<{
    education: EducationItem[];
    workExperience: WorkExperienceItem[];
  }>(supplementalInfoQuery);

  const { setError } = useContext(ErrorContext);

  if (error) {
    setError(error);
    return <Redirect to="/error" />;
  }

  return (
    <div className={styles.root}>
      {!!data && (
        <div className={styles.inner}>
          <section className={styles.education}>
            <h3>
              <i className="fas fa-graduation-cap"></i>
              <span>education</span>
            </h3>
            <ul className={styles.list}>
              {data.education.map((educationItem, i) => (
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
            <ul className={styles.list}>
              {data.workExperience.map((wei, i) => (
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
          <section className={styles.recentProjects}>
            <h3>
              <i className="fas fa-project-diagram"></i>
              <span>recent projects</span>
            </h3>
            <h6>
              Here are some of the things I've recently worked on or built both
              personally and professionally. Some of them may be a
              work-in-progress!
            </h6>
            <h6 className={styles.noPrint}>
              Click or tap on an item for a small summary
            </h6>
            <RecentProjects />
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
            <WebsiteStack />
          </section>
          <div className={styles.more}>
            <pre>
              This résumé was printed from{' '}
              <a href={window.location.origin}>{window.location.origin}</a>.
              Visit the website for more about everything above, and to see what
              I can do. 😎
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
