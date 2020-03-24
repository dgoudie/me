import './Home.scss';

import { ApolloError, gql } from 'apollo-boost';
import React, { Component } from 'react';

import BuiltWith from 'views/components/built-with/BuiltWith';
import Education from 'views/components/education/Education';
import { Info } from 'model/Info';
import Interests from 'views/components/interests/Interests';
import Loader from 'views/components/loader/Loader';
import PrintCopyButton from 'views/components/print-copy-button/PrintCopyButton';
import { Query } from 'react-apollo';
import TopSkills from 'views/components/top-skills/TopSkills';
import WorkExperience from 'views/components/work-experience/WorkExperience';

class Home extends Component<
  { info: Info },
  { printCopyButtonPressed: boolean }
> {
  state = {
    printCopyButtonPressed: false
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
          data
        }: {
          loading: boolean;
          error?: ApolloError;
          data: { info: Info };
        }) => {
          if (loading) {
            return <Loader />;
          }
          if (error) {
            return <p>Error :(</p>;
          }
          const { info } = data;
          return (
            <div className="home">
              <div className="column-wrapper">
                <section className="title">
                  <h1>{info.name}</h1>
                  <h3>{info.title}</h3>
                </section>
                <section className="links">
                  {info.links.map((link, i) => (
                    <div key={i} className="link">
                      <i className={link.icon} />
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href={link.link}
                      >
                        <span className="no-print">{link.text}</span>
                        <span className="print">{link.textForPrint}</span>
                      </a>
                    </div>
                  ))}
                </section>
                <section className="about">
                  <h2>About Me</h2>
                  {info.about.map((infoItem, i) => (
                    <p key={i}>{infoItem}</p>
                  ))}
                </section>
                <Education education={info.education} />
                <WorkExperience workExperience={info.workExperience} />
                <div className="ts-int-wrapper">
                  <Interests interests={info.interests} />
                  <TopSkills topSkills={info.topSkills} />
                </div>
                <BuiltWith builtWith={info.builtWith} />
                <span
                  className={`ref-to-website ${
                    !!printCopyButtonPressed ? 'no-need' : ''
                  }`}
                >
                  This page was exported from my website at{' '}
                  <code>https://goudie.dev</code>. Stop on by to see what I used
                  built it.
                </span>
                <PrintCopyButton onClick={this._printCopyButtonOnClick} />
              </div>
            </div>
          );
        }}
      </Query>
    );
  }

  private _printCopyButtonOnClick = () => {
    this.setState({ printCopyButtonPressed: true });
  };
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
