import React, { Component } from 'react';

import './BuiltWith.scss';
import { BuiltWithItem } from 'model/Info';

class BuiltWith extends Component<{ builtWith: BuiltWithItem[] }> {
  render() {
    const builtWith = this.props.builtWith;
    return (
      <section className="built-with">
        <h2>Website Built and Hosted With...</h2>
        <div className="grid">
          {builtWith.map((bw, i) => (
            <div key={i}>
              <img
                src={`${process.env.PUBLIC_URL}/built-with/${bw.icon}`}
                alt="Product Icon"
              />
              {!!bw.link ? (
                <a href={bw.link} target="_blank" rel="noreferrer noopener">
                  {bw.name}
                </a>
              ) : (
                <span>{bw.name}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default BuiltWith;
