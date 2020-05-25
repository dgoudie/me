import { ApolloError, gql } from 'apollo-boost';
import React, { Component } from 'react';

import { Info } from 'model/Info';
import PersonalInfo from 'components/personal-info/PersonalInfo';
import { Query } from 'react-apollo';
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
            return <p>Error :(</p>;
          }
          return (
            <div className={styles.root}>
              <PersonalInfo info={data.info} className={styles.personalInfo} />
              <SupplementalInfo className={styles.supplementalInfo} />
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
        icon
      }
      about
      education {
        icon
        title
        secondaryInfo
      }
      workExperience {
        icon
        company
        jobTitle
        startMonth
        startYear
        endMonth
        endYear
      }
      interests
      topSkills {
        name
        percentage
      }
      builtWith {
        icon
        name
        link
      }
    }
  }
`;

export default Home;
