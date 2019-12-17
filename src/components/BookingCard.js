import React, {Component} from 'react';
import PropTypes from "prop-types";

class BookingCard extends Component {

    handleConfirmBooking = () => {
        this.props.history.replace('/');
    };

    render() {
        const {booking} = this.props;
        console.log(booking);
        const {patient, doctor, facility, date, time} = booking;
        return (
            <div className="booking-confirmation">
                {patient && doctor && facility && date && time ?
                    <div className="card container">
                        <h2 className="text-center" style={{marginBottom: "8px"}}>Booking Confirmation Details</h2>
                        <h3 className="text-center">Patient</h3>
                        <div className="details-box"><span>Name:</span> <span>{patient.name} {patient.surname}</span></div>
                        <div className="details-box"><span>Phone Number:</span> <span>{patient.contactNumber}</span></div>
                        <div className="details-box"><span>Email:</span> <span>{patient.email}</span></div>
                        <hr/>
                        <h3 className="text-center">Doctor</h3>
                        <div className="details-box"><span>Name:</span> <span>{doctor.name}</span></div>
                        <div className="details-box"><span>Speciality:</span> <span>{doctor.speciality}</span></div>
                        <div className="details-box"><span>Location:</span> <span>{doctor.location}</span></div>
                        <hr/>
                        <div className="details-box"><span>Facility:</span> <span className="text-accentuate">{facility}</span></div>
                        <div className="details-box"><span>Date:</span> <span className="text-accentuate">{date}</span></div>
                        <div className="details-box"><span>Time:</span> <span className="text-accentuate">{time}</span></div>
                        <div className="btn-box">
                            <button className="btn" onClick={this.handleConfirmBooking}>OK</button>
                            <button className="btn">Cancel</button>
                        </div>
                    </div> :
                    <div className="danger">
                        No Booking Specified
                        <button className="btn">Book</button>
                    </div>
                }
            </div>
        );
    }
}

BookingCard.propTypes = {
    booking: PropTypes.object.isRequired
};

export default BookingCard;