import { gql, useQuery } from '@apollo/client';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import Dialog from 'components/dialog/Dialog';
import { ErrorContext, HomePageParams } from 'App';
import React, { useContext, useMemo } from 'react';
import StackItemLinks from 'components/stack-item-links/StackItemLinks';
import reactStringReplace from 'react-string-replace';
import styles from './StackItemDialog.module.scss';
import { WebsiteStackDialogElementData } from '@dgoudie/me-types';
import StackItemImages from 'components/stack-item-images/StackItemImages';

export default function StackItemDialog() {
  const history = useHistory();
  const { stackItemId } = useParams<HomePageParams>();
  const { loading, error, data } = useQuery<{
    websiteStackDialog: WebsiteStackDialogElementData;
  }>(WEBSITE_STACK_DIALOG_QUERY, {
    skip: !stackItemId,
    variables: { id: stackItemId },
  });

  const { setError } = useContext(ErrorContext);

  const itemInfo = data?.websiteStackDialog;

  const dialogAndButtonStyle: React.CSSProperties = useMemo(
    () => (!!itemInfo?.theme ? itemInfo.theme : {}),
    [itemInfo]
  );

  if (loading) {
    return null;
  }

  if (error) {
    setError(error);
    return <Redirect to="/error" />;
  }

  let children: JSX.Element | JSX.Element[] | undefined = undefined;

  if (!!itemInfo) {
    children = (
      <div className={styles.dialog}>
        <div className={styles.dialogHeader}>
          <div className={styles.dialogHeaderImageWrapper}>
            <img alt={itemInfo.title} src={itemInfo.imageUrl} />
          </div>
          <span>{itemInfo.title}</span>
        </div>
        <div className={styles.dialogBody}>
          <p>{transformCodeSnippetsInDescription(itemInfo.description)}</p>
        </div>
        {!!itemInfo.links?.length && (
          <StackItemLinks
            links={itemInfo.links}
            linkTheme={itemInfo.theme?.linkTheme}
          />
        )}
        {!!itemInfo.additionalImages?.length && (
          <StackItemImages images={itemInfo.additionalImages} />
        )}
      </div>
    );
  }

  return (
    <Dialog
      dialogStyle={dialogAndButtonStyle}
      closeButtonStyle={dialogAndButtonStyle}
      onClose={() => history.push(`/`)}
    >
      {children}
    </Dialog>
  );
}

const transformCodeSnippetsInDescription = (description?: string) =>
  reactStringReplace(description, /`(.+)`/g, (match) => (
    <code key={match}>{match}</code>
  ));

const WEBSITE_STACK_DIALOG_QUERY = gql`
  query websiteStackDialog($id: String!) {
    websiteStackDialog(id: $id)
  }
`;
