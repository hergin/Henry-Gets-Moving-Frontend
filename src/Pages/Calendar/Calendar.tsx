import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, { useState } from "react";
import {Calendar as ReactCalendar} from "react-calendar";

const Calendar = () => {
    const [today, selectDay] = useState(new Date());
    const minimumDate = new Date(2022, 10, 20);
    return (
        <div className="calendar">
            <HelmetProvider>
                <Helmet>
                    <title>Calendar</title>
                </Helmet>
            </HelmetProvider>
            <ReactCalendar onChange={selectDay} value={today} minDate={minimumDate}/>
        </div>
    )
}
export default Calendar;