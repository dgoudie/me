import Loader from 'components/loader/Loader';
import React from 'react';
import styles from './Dialog.module.scss';

interface Props {
  children?: JSX.Element | JSX.Element[];
  onClose?: () => void;
  loading?: boolean;
}

export default function Dialog({ children, onClose, loading }: Props) {
  const showDialog = !!children || !!loading;

  React.useEffect(() => {
    const className = 'no-scroll';
    if (!!showDialog) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [showDialog]);

  let body: JSX.Element = <></>;

  if (loading) {
    body = <Loader className={styles.loading} />;
  } else {
    if (!children) {
      return null;
    }
    body = (
      <div className={styles.dialogBody}>
        <button className={styles.dialogClose} onClick={onClose}>
          <i className="fas fa-times" />
        </button>
        <div className={styles.dialogBodyInner}>{children}</div>
      </div>
    );
  }

  return (
    <div className={styles.dialog}>
      <div className={styles.dialogShadow} onClick={onClose}></div>
      {body}
    </div>
  );
}
