import './ReactFlow.scss';

import ReactFlow, {
  Edge,
  Handle,
  HandleProps,
  XYPosition,
} from 'react-flow-renderer';

import React, { useContext, useEffect, useState } from 'react';
import {
  WebsiteStackGraphElement,
  WebsiteStackGraphElementData,
} from '@dgoudie/me-types';
import styles from './WebsiteStack.module.scss';
import { Redirect, useHistory } from 'react-router-dom';
import { useResizeDetector } from 'react-resize-detector';
import { gql, useQuery } from '@apollo/client';
import { ErrorContext } from 'App';
import Loader from 'components/loader/Loader';

const websiteStackQuery = gql`
  {
    websiteStackNodes
    websiteStackEdges
  }
`;

export default function WebsiteStack() {
  const [nodes, setNodes] = useState<WebsiteStackGraphElement[]>([]);
  const [edges, setEdges] = useState<Edge<void>[]>([]);

  const { data, error, loading } = useQuery<{
    websiteStackNodes: WebsiteStackGraphElement[];
    websiteStackEdges: Edge<void>[];
  }>(websiteStackQuery);

  const { width: containerWidth, ref } = useResizeDetector();
  const history = useHistory();

  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    if (!containerWidth) {
      return setNodes([]);
    }
    const itemSpacing = containerWidth >= 520 ? 24 : 18;
    const columnWidth = (containerWidth - 2 * itemSpacing) / 3;
    const convertedNodes = data?.websiteStackNodes.map((node) => {
      let elementConverted: WebsiteStackGraphElement = {
        ...node,
        type: node.type ?? 'stackItem',
      };
      let columnSpan = node.data?.columnSpan ?? 1;
      const widthHeightStyle: React.CSSProperties = {
        width: columnWidth * columnSpan + itemSpacing * (columnSpan - 1),
        height: 100,
      };
      let style = { ...widthHeightStyle, ...node.style };
      const position: XYPosition = {
        x: node.data.column * columnWidth + node.data.column * itemSpacing,
        y: node.data.yPosition,
      };
      elementConverted = { ...elementConverted, position, style };
      return elementConverted;
    });
    setNodes(convertedNodes ?? []);
  }, [containerWidth, data]);

  useEffect(() => {
    if (!!nodes?.length && !!data?.websiteStackEdges) {
      setEdges(data.websiteStackEdges);
    }
  }, [data, nodes]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    setError(error);
    return <Redirect to="/error" />;
  }

  return (
    //@ts-ignore
    <div className={styles.root} ref={ref}>
      <ReactFlow
        className="app-react-flow"
        nodeTypes={{ stackItem: StackItem }}
        onElementClick={(_event, element) =>
          history.push(!!element.data ? `/${element.id}` : `/`)
        }
        elements={[...nodes, ...edges]}
        nodesDraggable={false}
        nodesConnectable={false}
        paneMoveable={false}
        zoomOnDoubleClick={false}
        zoomOnPinch={false}
        zoomOnScroll={false}
      />
    </div>
  );
}

const StackItem: React.FunctionComponent<{
  data: WebsiteStackGraphElementData;
}> = ({ data }) => (
  <button className={styles.stackItem}>
    {data.handles?.map((props: HandleProps, i) => (
      <Handle {...props} key={i} />
    ))}
    <div className={styles.stackItemBody}>
      <div className={styles.stackItemBodyImageWrapper}>
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <span>{data.title}</span>
    </div>
  </button>
);
