import React, {Component} from 'react';
import PropTypes from "prop-types";

class Form extends Component {

    state = {
        location: 'Location',
        speciality: 'Speciality'
    };

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    this.props.handleOnSubmit(this.state.location, this.state.speciality);
                    e.preventDefault()
                }}>
                    <select name="location" onChange={this.handleOnChange}>
                        <option value>{this.state.location}</option>
                        <option value="Cape Town">Cape Town</option>
                        <option value="Johannesburg">Johannesburg</option>
                        <option value="Durban">Durban</option>
                        <option value="Pretoria">Pretoria</option>
                        <option value="Alice">Alice</option>
                        <option value="Port Elizabeth">Port Elizabeth</option>
                        <option value="Queen's Town">Queen's Town</option>
                        <option value="Wellington">Wellington</option>
                    </select>
                    <select name="speciality" onChange={this.handleOnChange}>
                        <option value>{this.state.speciality}</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Paediatrician">Paediatrician</option>
                        <option value="General Practitioner">General Practitioner</option>
                        <option value="Dermatologist">Dermatologist</option>
                        <option value="Gynaecologist">Gynaecologist</option>
                        <option value="Opthalmologist">Opthalmologist</option>
                        <option value="Surgeon">Surgeon</option>
                        <option value="Psychologist">Psychologist</option>
                        <option value="Psychiatrist">Psychiatrist</option>
                    </select>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired
};

export default Form;