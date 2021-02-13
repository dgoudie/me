import { gql, useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';

import Dialog from 'components/dialog/Dialog';
import { HomePageParams } from 'App';
import React from 'react';
import ServerErrorPage from 'views/home/server-error-page/ServerErrorPage';
import { WebsiteStackItemInfo } from '@stan/me-types';
import styles from './StackItemDialog.module.scss';

export default function StackItemDialog() {
  const history = useHistory();
  const { stackItemId } = useParams<HomePageParams>();
  const { loading, error, data } = useQuery<{
    websiteStackItemInfo: WebsiteStackItemInfo;
  }>(WEBSITE_STACK_ITEM_INFO_QUERY, {
    skip: !stackItemId,
    variables: { id: stackItemId },
  });

  if (loading) {
    return null;
  }

  const itemInfo = data?.websiteStackItemInfo;

  let children: JSX.Element | JSX.Element[] | undefined = undefined;

  if (error) {
    children = <ServerErrorPage error={error} />;
  } else if (!!itemInfo) {
    children = (
      <div className={styles.dialog}>
        <div className={styles.dialogHeader}>
          <div className={styles.dialogHeaderImageWrapper}>
            <img alt={itemInfo.title} src={itemInfo.imageUrl} />
          </div>
          <span>{itemInfo.title}</span>
        </div>
        <div className={styles.dialogBody}>
          <p>{itemInfo.description}</p>
        </div>
      </div>
    );
  }

  return <Dialog onClose={() => history.push(`/`)}>{children}</Dialog>;
}

const WEBSITE_STACK_ITEM_INFO_QUERY = gql`
  query WebsiteStackItemInfo($id: String!) {
    websiteStackItemInfo(id: $id) {
      title
      imageUrl
      description
    }
  }
`;
