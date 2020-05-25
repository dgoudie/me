import React, { Component } from 'react';
import { faAddressBook, faUser } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
              <FontAwesomeIcon icon={faUser} />
              <span>about me</span>
            </h3>
            {this.props.info.about.map((item) => (
              <p>{item}</p>
            ))}
          </section>
          <section>
            <h3>
              <FontAwesomeIcon icon={faAddressBook} />
              <span>contact me</span>
            </h3>
            {this.props.info.about.map((item) => (
              <p>{item}</p>
            ))}
          </section>
        </div>
      </div>
    );
  }
}
