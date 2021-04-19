import PersonalInfo from 'components/personal-info/PersonalInfo';
import React from 'react';
import StackItemDialog from 'components/stack-item-dialog/StackItemDialog';
import SupplementalInfo from 'components/supplemental-info/SupplementalInfo';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.root}>
      <PersonalInfo />
      <SupplementalInfo />
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
