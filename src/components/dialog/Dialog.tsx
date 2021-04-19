import classNames from 'classnames';
import Loader from 'components/loader/Loader';
import React, { useMemo } from 'react';
import styles from './Dialog.module.scss';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  onClose?: () => void;
  loading?: boolean;
  dialogStyle?: React.CSSProperties;
  closeButtonStyle?: React.CSSProperties;
};

export default function Dialog({
  children,
  onClose,
  loading,
  dialogStyle,
  closeButtonStyle,
  ...props
}: Props) {
  const showDialog = useMemo(() => !!children || !!loading, [
    children,
    loading,
  ]);

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
        <button
          className={styles.dialogClose}
          onClick={onClose}
          style={closeButtonStyle}
        >
          <i className="fas fa-times" />
        </button>
        <div className={styles.dialogBodyInner} style={dialogStyle}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div {...props} className={classNames(props.className, styles.dialog)}>
      <div className={styles.dialogShadow} onClick={onClose}></div>
      {body}
    </div>
  );
}
