import './ReactFlow.scss';

import ReactFlow, {
  Elements,
  FlowElement,
  Handle,
  HandleProps,
  XYPosition,
} from 'react-flow-renderer';

import React from 'react';
import { WebsiteStackGraphElementData } from '@dgoudie/me-types';
import styles from './WebsiteStack.module.scss';
import { useHistory } from 'react-router-dom';
import { useResizeDetector } from 'react-resize-detector';

interface Props {
  websiteStackElements: Elements<WebsiteStackGraphElementData>;
}

export default function WebsiteStack({ websiteStackElements }: Props) {
  const { width, ref } = useResizeDetector();
  const elements = buildElements(websiteStackElements, width);
  const history = useHistory();
  return (
    //@ts-ignore
    <div className={styles.root} ref={ref}>
      <ReactFlow
        className="app-react-flow"
        nodeTypes={{ stackItem: StackItem }}
        onElementClick={(_event, element) =>
          history.push(!!element.data ? `/${element.id}` : `/`)
        }
        elements={elements}
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

const buildElements = (
  elementsFromDatabase: Elements<WebsiteStackGraphElementData>,
  containerWidth?: number
): Elements<WebsiteStackGraphElementData> => {
  if (!containerWidth) {
    return [];
  }
  const itemSpacing = containerWidth >= 520 ? 24 : 18;
  const columnWidth = (containerWidth - 2 * itemSpacing) / 3;
  return elementsFromDatabase.map((element) => {
    let elementConverted: FlowElement<WebsiteStackGraphElementData> = {
      ...element,
      type: element.type ?? 'stackItem',
    };
    if (!!element.data) {
      let columnSpan = element.data?.columnSpan ?? 1;
      const widthHeightStyle: React.CSSProperties = {
        width: columnWidth * columnSpan + itemSpacing * (columnSpan - 1),
        height: 100,
      };
      let style = { ...widthHeightStyle, ...element.style };
      const position: XYPosition = {
        x:
          element.data.column * columnWidth + element.data.column * itemSpacing,
        y: element.data.yPosition,
      };
      elementConverted = { ...elementConverted, position, style };
    }
    return elementConverted;
  });
};

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
