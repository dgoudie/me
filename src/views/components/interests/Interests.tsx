import React, { Component } from 'react';

import './Interests.scss';

class Interests extends Component<{ interests: string[] }> {
    render() {
        const { interests } = this.props;
        return (
            <section className="interests">
                <h2>Tech Interests</h2>
                <ol>
                    {interests.map((interest, i) => (
                        <li key={i}>{interest}</li>
                    ))}
                </ol>
            </section>
        );
    }
}

export default Interests;