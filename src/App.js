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

    handleOnSubmit = (location, speciality) => {
        let doctors = data.doctors.filter(doctor => doctor.speciality === speciality);
        this.setState({location, speciality, doctors});
    };

    handleBookNowClick = (doctor) => {
        this.setState({doctor});
        console.log(doctor);
    };

    handleOnSubmitPatient = (e, {name, surname, contactNumber, email}) => {
        let patient = {name, surname, contactNumber, email};
        this.setState({patient});
        e.preventDefault();
    };

    handleBook = ({facility, date, time}) => {
        this.setState({facility, date, time});
        let booking = this.state;
        console.log(booking);
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() =>
                        <main className="container">
                            <Form handleOnSubmit={this.handleOnSubmit}/>
                            <Doctors doctors={this.state.doctors} handleBookNowClick={this.handleBookNowClick}/>
                        </main>
                    }/>
                    <Route exact path="/booking_details" component={BookForm}/>
                    <Route exact path="/booking_details2" render={ () =>
                        <BookForm2 handleBook={this.handleBook}/>
                    }/>
                </Switch>
            </Router>
        );
    }
}

export default App;
