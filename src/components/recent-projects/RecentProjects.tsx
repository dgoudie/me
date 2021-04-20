import { gql, useQuery } from '@apollo/client';
import { RecentProject } from '@dgoudie/me-types';
import { ErrorContext } from 'App';
import classNames from 'classnames';
import Loader from 'components/loader/Loader';
import React, { useCallback, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './RecentProjects.module.scss';

const recentProjectsQuery = gql`
  {
    recentProjects {
      name
      imageUrl
      summary
      attributes
      link {
        url
        text
      }
      additionalImage {
        url
        backgroundColor
      }
    }
  }
`;

export default function RecentProjects() {
  const { data, error, loading } = useQuery<{
    recentProjects: RecentProject[];
  }>(recentProjectsQuery);

  const [expandedProjectName, setExpandedProjectName] = useState<string | null>(
    null
  );

  const expandRequested = useCallback(
    (name: string) => {
      if (expandedProjectName === name) {
        setExpandedProjectName(null);
      } else {
        setExpandedProjectName(name);
      }
    },
    [expandedProjectName]
  );

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

  const { recentProjects } = data!;
  return (
    <div className={styles.root}>
      {recentProjects.map((recentProject) => (
        <RecentProjectElement
          key={recentProject.name}
          recentProject={recentProject}
          expanded={recentProject.name === expandedProjectName}
          expandRequested={() => expandRequested(recentProject.name)}
        />
      ))}
    </div>
  );
}

interface RecentProjectProps {
  recentProject: RecentProject;
  expanded: boolean;
  expandRequested: () => void;
}

function RecentProjectElement({
  recentProject,
  expandRequested,
  expanded,
}: RecentProjectProps) {
  return (
    <div className={styles.recentProject}>
      <button className={styles.header} onClick={expandRequested}>
        <div className={styles.img}>
          <img src={recentProject.imageUrl} alt={recentProject.name} />
        </div>
        <div className={styles.title}>{recentProject.name}</div>
        <div className={styles.arrow}>
          <i className={`fas fa-chevron-${expanded ? 'up' : 'down'}`} />
        </div>
      </button>
      <div
        className={classNames(
          styles.additionalInfo,
          expanded && styles.expanded
        )}
      >
        <pre className={styles.summary}>{recentProject.summary}</pre>
        <ol className={styles.attributes}>
          {recentProject.attributes.map((attribute) => (
            <li key={attribute}>{attribute}</li>
          ))}
        </ol>
        {!!recentProject.link && (
          <a
            className={styles.link}
            href={recentProject.link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {recentProject.link.text}
          </a>
        )}
        {!!recentProject.additionalImage && (
          <div
            className={styles.additionalImage}
            style={{
              backgroundColor: recentProject.additionalImage.backgroundColor,
            }}
          >
            <img
              src={recentProject.additionalImage.url}
              alt={recentProject.summary}
            />
          </div>
        )}
      </div>
      <pre className={classNames(styles.summary, styles.summaryForPrint)}>
        {recentProject.summary}
      </pre>
      {!!recentProject.link && (
        <a
          className={classNames(styles.link, styles.linkForPrint)}
          href={recentProject.link.url}
        >
          {recentProject.link.url}
        </a>
      )}
    </div>
  );
}
