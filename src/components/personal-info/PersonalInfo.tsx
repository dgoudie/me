import { Info, Link, TopSkillItem } from '@dgoudie/me-types';
import React, { useContext, useEffect, useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import ImageAndName from 'components/image-and-name/ImageAndName';
import classnames from 'classnames';
import styles from './PersonalInfo.module.scss';
import { gql, useQuery } from '@apollo/client';
import { ErrorContext } from 'App';
import Loader from 'components/loader/Loader';
import { Redirect } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const personalInfoQuery = gql`
  {
    info {
      name
      imageUrl
      title
      about
    }
    links {
      text
      textForPrint
      link
      faIcon
      name
    }
    topSkills {
      name
      percentage
    }
  }
`;

export default function PersonalInfo() {
  const [imageAndNameFirstInView, setImageAndNameFirstInView] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  const { data, error, loading } = useQuery<{
    info: Info;
    links: Link[];
    topSkills: TopSkillItem[];
  }>(personalInfoQuery);

  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  useEffect(() => {
    !!inView && setImageAndNameFirstInView(true);
  }, [inView]);

  useEffect(() => {
    setHeaderVisible(!inView && !!imageAndNameFirstInView);
  }, [inView, imageAndNameFirstInView]);

  const { setError } = useContext(ErrorContext);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );
  }

  if (error) {
    setError(error);
    return <Redirect to="/error" />;
  }

  const { info, links, topSkills } = data!;
  return (
    <div className={styles.root}>
      <ImageAndName ref={ref} className={styles.imageAndName} info={info} />
      <div className={styles.info}>
        <div className={styles.sectionWrapper}>
          <section>
            <h3>
              <i className="fas fa-user"></i>
              <span>about me</span>
            </h3>
            {info.about.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </section>
          <section className={styles.contact}>
            <h3>
              <i className="fas fa-address-book"></i>
              <span>contact me</span>
            </h3>
            <ul>
              {links.map((link, i) => (
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
      <CSSTransition
        in={headerVisible}
        classNames={{
          enter: styles.headerEnter,
          exit: styles.headerExit,
          enterDone: styles.headerEnterDone,
          exitDone: styles.headerExitDone,
        }}
        timeout={200}
      >
        <header className={classnames(styles.header)} key="Header">
          <section>
            <div>
              <img src={info.imageUrl} alt={info.name} />
              <h3>{info.name}</h3>
            </div>
          </section>
          <section></section>
        </header>
      </CSSTransition>
    </div>
  );
}
