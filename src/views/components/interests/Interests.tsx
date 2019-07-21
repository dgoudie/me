import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Info } from 'reducers/info-reducer';

import './Interests.scss';

class Interests extends Component<{ info: Info }> {
    render() {
        const { info } = this.props;
        return (
            <section className="interests">
                <h2>Tech Interests</h2>
                <ol>
                    {info.interests.map(interest => (
                        <li>{interest}</li>
                    ))}
                </ol>
            </section>
        );
    }
}

const mapStateToProps = (state: any) => ({
    info: state.infoReducer.info
})

export default connect(mapStateToProps)(Interests);