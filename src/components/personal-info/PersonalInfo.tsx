import React, { Component } from 'react';

import ImageAndName from 'components/image-and-name/ImageAndName';
import { Info } from 'model/Info';
import styles from './PersonalInfo.module.scss';

interface Props {
  className?: string;
  info: Info;
}

export default class PersonalInfo extends Component<Props, {}> {
  render() {
    return (
      <div className={this.props.className}>
        <ImageAndName
          className={styles.imageAndName}
          name={this.props.info.name}
          title={this.props.info.title}
        />
        <div className={styles.info}>
          <section>
            <h3>
              <i className="fas fa-user"></i>
              <span>about me</span>
            </h3>
            {this.props.info.about.map((item) => (
              <p>{item}</p>
            ))}
          </section>
          <section className={styles.contact}>
            <h3>
              <i className="fas fa-address-book"></i>
              <span>contact me</span>
            </h3>
            <ul>
              {this.props.info.links.map((link) => (
                <li>
                  <i className={link.icon}></i>
                  <a href={link.link} className={styles.noPrint}>
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
              {this.props.info.topSkills.map((skill) => (
                <li>
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
    );
  }
}
