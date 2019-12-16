import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

class Doctor extends Component {
    render() {
        return (
            <div className="card doctor hover-grow">
                <FontAwesomeIcon icon="user-nurse" className="medium"/>
                <h3>{this.props.doctor.name}</h3>
                <span style={{display: "block"}}>{this.props.doctor.speciality}</span>
                <button
                    onClick={() => this.props.handleBookNowClick(this.props)}
                >Book now
                </button>
            </div>
        );
    }
}

Doctor.propTypes = {
    doctor: PropTypes.object.isRequired,
    handleBookNowClick: PropTypes.func.isRequired
};

export default Doctor;