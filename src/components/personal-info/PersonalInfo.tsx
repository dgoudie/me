import { Info, TopSkillItem } from '@stan/me-types';
import React, { Component } from 'react';
import { Subscription, fromEvent } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import ImageAndName from 'components/image-and-name/ImageAndName';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import sort from 'fast-sort';
import styles from './PersonalInfo.module.scss';

interface Props {
  className?: string;
  info: Info;
}

interface State {
  headerVisible: boolean;
}

export default class PersonalInfo extends Component<Props, State> {
  stickySubscription: Subscription | undefined;
  stickyElementRef = React.createRef<HTMLDivElement>();

  state = {
    headerVisible: false,
  };

  render() {
    const topSkills: TopSkillItem[] = sort([...this.props.info.topSkills]).by([
      { desc: (skill: TopSkillItem) => skill.percentage },
      { asc: (skill: TopSkillItem) => skill.name },
    ]);
    return (
      <div className={this.props.className}>
        <ImageAndName
          className={styles.imageAndName}
          name={this.props.info.name}
          title={this.props.info.title}
        />
        <div className={styles.info}>
          <div className={styles.sectionWrapper} ref={this.stickyElementRef}>
            <section>
              <h3>
                <i className="fas fa-user"></i>
                <span>about me</span>
              </h3>
              {this.props.info.about.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </section>
            <section className={styles.contact}>
              <h3>
                <i className="fas fa-address-book"></i>
                <span>contact me</span>
              </h3>
              <ul>
                {this.props.info.links.map((link, i) => (
                  <li key={i}>
                    <i className={link.faIcon}></i>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link.link}
                      className={styles.noPrint}
                    >
                      {link.text}
                    </a>
                    <span className={styles.print}>{link.textForPrint}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className={styles.topSkills}>
              <h3>
                <i className="fas fa-palette"></i>
                <span>top skills</span>
              </h3>
              <ul>
                {topSkills.map((skill, i) => (
                  <li key={i}>
                    <div>{skill.name}</div>
                    <div className={styles.skillPercentageBar}>
                      <div
                        className={styles.skillPercentageBarFill}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: styles.headerEnter,
            leave: styles.headerLeave,
          }}
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}
        >
          {!!this.state.headerVisible && (
            <header className={styles.header} key="Header">
              <section>
                <div>
                  <img
                    src="https://cdn.goudie.dev/images/daniel.jpg"
                    alt="Daniel Goudie"
                  />
                  <h3>{this.props.info.name}</h3>
                </div>
              </section>
              <section></section>
            </header>
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

  componentDidMount() {
    if (!!this.stickyElementRef.current) {
      const current = this.stickyElementRef.current;
      this.stickySubscription = fromEvent(document, 'scroll')
        .pipe(
          map(() => current.getBoundingClientRect().top <= 56),
          distinctUntilChanged()
        )
        .subscribe((stuck) => this.setState({ headerVisible: stuck }));
    }
  }

  componentWillUnmount() {
    this.stickySubscription?.unsubscribe();
  }
}
