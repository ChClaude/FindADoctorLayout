import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Form from "./components/Form";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faSearch, faUserNurse} from '@fortawesome/free-solid-svg-icons';
import Doctors from "./components/Doctors";
import data from "./data/data";
import BookForm from "./components/BookForm";
import BookForm2 from "./components/BookForm2";
import BookingCard from "./components/BookingCard";

library.add(fab, faUserNurse, faSearch);

class App extends Component {

    state = {
        doctors: [],
        doctor: {},
        location: '',
        speciality: '',
        patient: {},
        facility: '',
        date: '',
        time: ''
    };

    booking = {};

    handleOnSubmit = (location, speciality) => {
        let doctors = data.doctors.filter(doctor => doctor.speciality === speciality);
        this.setState({location, speciality, doctors});
    };

    handleBookNowClick = ({doctor, history}) => {
        this.setState({doctor});
        history.push('/booking_details');
    };

    handleOnSubmitPatient = ({name, surname, contactNumber, email}, history) => {
        let patient = {name, surname, contactNumber, email};
        this.setState({patient});
        history.push('/booking_details2');
    };

    handleBook = ({facility, date, time}, history) => {
        this.setState({facility, date, time});
        const {doctor, patient} = this.state;
        this.booking = {doctor, patient, facility, date, time};
        console.log(this.booking);
        history.replace('/booking_confirmation');
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) =>
                        <main className="container">
                            <Form handleOnSubmit={this.handleOnSubmit} {...props} />
                            <Doctors doctors={this.state.doctors}
                                     handleBookNowClick={this.handleBookNowClick} {...props} />
                        </main>
                    }/>
                    <Route exact path="/booking_details"
                           render={(props) => <BookForm {...props} handleOnSubmitPatient={this.handleOnSubmitPatient}/>
                           }/>
                    <Route exact path="/booking_details2" render={(props) =>
                        <BookForm2 handleBook={this.handleBook} {...props} />
                    }/>
                    <Route exact path="/booking_confirmation" render={(props) => <BookingCard booking={this.booking} {...props} />}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
