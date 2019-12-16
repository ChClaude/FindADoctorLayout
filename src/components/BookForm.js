import React, {Component} from 'react';
import PropTypes from "prop-types";

class BookForm extends Component {

    state = {
        name: '',
        surname: '',
        contactNumber: '',
        email: ''
    };

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div className="book-form">
                <div className="card">
                    <h2 className="text-center">Schedule an Appointment</h2>
                    <p className="text-center">Please enter your details before scheduling your appointment</p>
                    <form onSubmit={(e)=> this.props.handleOnSubmitPatient(e, this.state)}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleOnChange}/>
                        <label htmlFor="surname">Surname</label>
                        <input type="text" name="surname" id="surname" value={this.state.surname} onChange={this.handleOnChange}/>
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input type="number" name="contactNumber" id="contactNumber" value={this.state.contactNumber}
                               onChange={this.handleOnChange}/>
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleOnChange}/>
                        <input type="submit" value="Next" />
                    </form>
                </div>
            </div>
        );
    }
}

BookForm.protoType = {
    handleOnSubmitPatient: PropTypes.func.isRequired
};

export default BookForm;