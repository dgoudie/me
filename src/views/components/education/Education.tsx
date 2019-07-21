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
                    {info.education.map((educationItem) => [
                        <li>
                            <div className="img-wrapper">
                                <img src={`${process.env.PUBLIC_URL}/education/${educationItem.icon}`} alt="School Icon" />
                            </div>
                            <div>
                                <h4>{educationItem.title}</h4>
                                {educationItem.secondaryInfo.map((si) => (
                                    <span>{si}</span>
                                ))}
                            </div>
                        </li>
                    ])}
                </ol>
            </section>
        );
    }
}

const mapStateToProps = (state: any) => ({
    info: state.infoReducer.info,
});

export default connect(mapStateToProps)(Education);
