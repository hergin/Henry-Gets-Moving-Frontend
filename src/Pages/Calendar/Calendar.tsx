import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, { useEffect, useState } from "react";
import {Calendar as ReactCalendar} from "react-calendar";
import API from '../../API';
import { FamilyMember } from '../../Structs/DataTypes';
import familyMemberLayout from '../../Components/familyMemberLayout';

const Calendar = () => {
    const [selectedDate, selectDay] = useState(new Date());
    const [members, setFamilyMembers] = useState([] as FamilyMember[]);
    useEffect(() => {
        API.getFamilyMembers().then((members) => setFamilyMembers(members));
    }, []);
    
    return (
        <div className="calendar">
            <HelmetProvider>
                <Helmet>
                    <title>Calendar</title>
                </Helmet>
            </HelmetProvider>
            <ReactCalendar onChange={selectDay} value={selectedDate} minDate={new Date(2022, 9, 20)} className="date-picker"/>
            <br/>
            <h1>On {selectedDate.toLocaleDateString()}…</h1>
            <div className='logText'>
                {familyMemberLayout(members, selectedDate).length > 0 ? familyMemberLayout(members, selectedDate) : "No one logged any activity on this day, but there's still time to log some for today!"}
            </div>
        </div>
    )
}
export default Calendar;