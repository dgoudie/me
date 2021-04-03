import { gql, useQuery } from '@apollo/client';

import { Info } from '@dgoudie/me-types';
import PersonalInfo from 'components/personal-info/PersonalInfo';
import React from 'react';
import ServerErrorPage from './server-error-page/ServerErrorPage';
import StackItemDialog from 'components/stack-item-dialog/StackItemDialog';
import SupplementalInfo from 'components/supplemental-info/SupplementalInfo';
import styles from './Home.module.scss';

export default function Home() {
  const { loading, error, data } = useQuery<{ info: Info }>(infoQuery);

  if (loading) {
    return <div />;
  }
  if (error || !data) {
    return <ServerErrorPage error={error} />;
  }
  return (
    <div className={styles.root}>
      <PersonalInfo info={data.info} className={styles.personalInfo} />
      <SupplementalInfo info={data.info} className={styles.supplementalInfo} />
      <button
        className={styles.scrollToTopButton}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Scroll to top"
      >
        <i className="fas fa-chevron-up" />
      </button>
      <StackItemDialog />
    </div>
  );
}

const infoQuery = gql`
  {
    info {
      name
      title
      links {
        text
        textForPrint
        link
        faIcon
        name
      }
      about
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
      interests
      topSkills {
        name
        percentage
      }
      websiteStackElements
    }
  }
`;
