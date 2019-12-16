import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

class BookForm2 extends Component {

    date = new Date();
    state = {
        facility: 'facility',
        date: `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDay()}`,
        time: `${this.date.getHours()}:${this.date.getMinutes()}`
    };

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleOnSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    };

    handleHourSelection = (e, time) => {
        e.target.style.backgroundColor = e.target.style.backgroundColor=== "teal"? "white" : "teal";
        e.target.style.color = e.target.style.color === "white" ? "black" : "white";

        this.setState({time});
    };


    render() {
        const times = [
            "08:00", "08:15", "08:30", "08:45",
            "09:00", "09:15", "09:30", "09:45",
            "10:00", "10:15", "10:30", "10:45",
            "11:00", "11:15", "11:30", "11:45",
            "12:00", "12:15", "12:30", "12:45",
            "13:00", "13:15", "13:30", "13:45",
            "14:00", "14:15", "14:30", "14:45",
            "15:00", "15:15", "15:30", "15:45",
            "16:00", "16:15", "16:30", "16:45",
        ];

        return (
            <div className="book-form">
                <div className="card">
                    <h2 className="text-center">Schedule an Appointment</h2>

                    <form onSubmit={this.handleOnSubmit} style={{marginTop: "15px"}}>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" value={this.state.date}
                               onChange={this.handleOnChange}/>
                        <select name="facility" onChange={this.handleOnChange}>
                            <option value>{this.state.facility}</option>
                            <option value="Parow">Parow</option>
                            <option value="Century City">Century City</option>
                            <option value="Bellville">Bellville</option>
                            <option value="Observatory">Observatory</option>
                            <option value="Cape Town">Cape Town</option>
                            <option value="Guguletho">Guguletho</option>
                            <option value="Sea Point">Sea Point</option>
                            <option value="Strand">Strand</option>
                        </select>
                        <button type="submit">
                            <FontAwesomeIcon icon="search"/> Search
                        </button>
                    </form>
                    <div className="show">
                        <div className="hours-box">
                            {times.map((time) =>
                                <span
                                    key={time}
                                    onClick={(e) => this.handleHourSelection(e, time)}
                                >{time}
                                </span>)}
                        </div>
                        <button onClick={() => this.props.handleBook(this.state)}>Book</button>
                    </div>
                </div>
            </div>
        );
    }
}

BookForm2.propTypes = {
    handleBook: PropTypes.func.isRequired
};

export default BookForm2;