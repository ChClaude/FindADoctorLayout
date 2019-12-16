import React, {Component} from 'react';
import Doctor from "./Doctor";
import PropTypes from "prop-types";

class Doctors extends Component {

    render() {
        return (
            <div className="container doctors">
                {this.props.doctors.map( doctor =>
                    <Doctor doctor={doctor} key={doctor.name.concat(doctor.speciality)} handleBookNowClick={this.props.handleBookNowClick}/>
                )}
            </div>
        );
    }
}

Doctors.propTypes = {
    doctors: PropTypes.array.isRequired,
    handleBookNowClick: PropTypes.func.isRequired
};


export default Doctors;