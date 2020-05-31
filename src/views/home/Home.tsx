import { ApolloError, gql } from 'apollo-boost';
import React, { Component } from 'react';

import { Info } from '@stan/me-types';
import PersonalInfo from 'components/personal-info/PersonalInfo';
import { Query } from 'react-apollo';
import ServerErrorPage from './server-error-page/ServerErrorPage';
import SupplementalInfo from 'components/supplemental-info/SupplementalInfo';
import styles from './Home.module.scss';

class Home extends Component<
  { info: Info },
  { printCopyButtonPressed: boolean }
> {
  state = {
    printCopyButtonPressed: false,
  };

  public render() {
    const { printCopyButtonPressed } = this.state;
    if (printCopyButtonPressed) {
      setTimeout(() => window.print(), 500);
    }
    return (
      <Query query={infoQuery}>
        {({
          loading,
          error,
          data,
        }: {
          loading: boolean;
          error?: ApolloError;
          data: { info: Info };
        }) => {
          if (loading) {
            return <div />;
          }
          if (error) {
            return <ServerErrorPage error={error} />;
          }
          return (
            <div className={styles.root}>
              <PersonalInfo info={data.info} className={styles.personalInfo} />
              <SupplementalInfo
                info={data.info}
                className={styles.supplementalInfo}
              />
              <button
                className={styles.scrollToTopButton}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                title="Scroll to top"
              >
                <i className="fas fa-chevron-up" />
              </button>
            </div>
          );
        }}
      </Query>
    );
  }
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
      builtWith {
        iconUrl
        name
        links {
          text
          url
        }
      }
    }
  }
`;

export default Home;
