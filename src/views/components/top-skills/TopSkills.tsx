import './TopSkills.scss';

import React, { Component } from 'react';

import { TopSkill } from 'model/Info';
import sort from 'fast-sort';

class TopSkills extends Component<{ topSkills: TopSkill[] }> {
    render() {
        const topSkills: TopSkill[] = sort(this.props.topSkills).by([
            { desc: (skill: TopSkill) => skill.percentage },
            { asc: (skill: TopSkill) => skill.name }
        ]);

        return (
            <section className="top-skills">
                <h2>Top Skills</h2>
                <ol>
                    {topSkills.map((ts, i) => (
                        <li key={i}>
                            <span>{ts.name}</span>
                            <div className="percentage-bar">
                                <div className="percentage-bar-fill" style={{ width: `${ts.percentage}%` }} />
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
        );
    }
}

export default TopSkills;