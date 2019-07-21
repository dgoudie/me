import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Info } from 'reducers/info-reducer';

import './Education.scss';

class Education extends Component<{ info: Info }> {
    public render() {
        const { info } = this.props;
        return (
            <section className="education">
                <h2>Education</h2>
                <ol>
                    {info.education.map((educationItem) => (
                        <li>
                            <h4>{educationItem.title}</h4>
                            <span>{educationItem.secondaryInfo}</span>
                            <span>{educationItem.tertiaryInfo}</span>
                        </li>
                    ))}
                </ol>
            </section>
        );
    }
}

const mapStateToProps = (state: any) => ({
    info: state.infoReducer.info,
});

export default connect(mapStateToProps)(Education);
