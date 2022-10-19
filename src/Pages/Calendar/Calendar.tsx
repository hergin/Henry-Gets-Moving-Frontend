import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React from "react";

const Calendar = () => {
    return (
        <div className="calendar">
            <HelmetProvider>
                <Helmet>
                    <title>Calendar</title>
                </Helmet>
            </HelmetProvider>
        </div>
    )
}

export default Calendar;