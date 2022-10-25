import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, { useState } from "react";
import {Calendar as ReactCalendar} from "react-calendar";

const Calendar = () => {
    const [selectedDate, selectDay] = useState(new Date());
    return (
        <div className="calendar">
            <HelmetProvider>
                <Helmet>
                    <title>Calendar</title>
                </Helmet>
            </HelmetProvider>
            <ReactCalendar onChange={selectDay} value={selectedDate} minDate={new Date(2022, 9, 20)} className="date-picker"/>
            <br/>
            <h2>On {selectedDate.toLocaleDateString()}…</h2>
            <p>[FAMILY MEMBER 1] logged [MINUTES] minutes of activity! Almost there!</p>
            <p>[FAMILY MEMBER 2] logged [MINUTES OVER 60] minutes of activity! Great job!</p>
            <p>et cetera…</p>
            // TODO: pull this from the le epic database
        </div>
    )
}
export default Calendar;