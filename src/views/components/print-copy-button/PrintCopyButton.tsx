import './PrintCopyButton.scss';

import React, { Component } from 'react';

export default class PrintCopyButton extends Component<{
  onClick: () => void;
}> {
  render() {
    return (
      <button className="print-copy-button" onClick={this.props.onClick}>
        Print A copy
      </button>
    );
  }
}
