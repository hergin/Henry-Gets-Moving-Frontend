import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, {useEffect, useState} from "react";
import {Calendar as ReactCalendar} from "react-calendar";
import API from '../../API';
import {FamilyMember} from '../../Structs/DataTypes';
import familyMemberLayout from '../../Components/familyMemberLayout';
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import BackArrow from "../../Components/BackArrow/BackArrow";

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
            <Weather/>
            <BackArrow route={'/get-moving'}/>
            <ReactCalendar onChange={selectDay} value={selectedDate} minDate={new Date(2022, 9, 20)}
                           className="date-picker"/>
            <h1>On {selectedDate.toLocaleDateString()}…</h1>
            <div className='exercise-logs-div'>
                {familyMemberLayout(members, selectedDate).length > 0 ? familyMemberLayout(members, selectedDate) : "No one logged any activity on this day, but there's still time to log some for today!"}
            </div>
            <Grass/>
        </div>
    )
}
export default Calendar;