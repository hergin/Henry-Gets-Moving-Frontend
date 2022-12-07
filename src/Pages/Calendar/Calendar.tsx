import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, {useEffect, useState} from "react";
import {Calendar as ReactCalendar} from "react-calendar";
import API from '../../API';
import {ExerciseLog, FamilyMember} from '../../Structs/DataTypes';
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";


const Calendar = () => {
    const [selectedDate, selectDay] = useState(new Date());
    const [members, setFamilyMembers] = useState([] as FamilyMember[]);
    const [familyMember, setFamilyMember] = useState({} as FamilyMember)
    useEffect(() => {
        API.getFamilyMembers()
            .then((members) => setFamilyMembers(members));
    }, []);


    return (
        <div className="calendar">
            <HelmetProvider>
                <Helmet>
                    <title>Calendar</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
            <ReactCalendar onChange={selectDay} value={selectedDate} minDate={new Date(2022, 9, 20)}
                           className="date-picker"/>
            <h1>On {selectedDate.toLocaleDateString()}…</h1>
            <div className='exercise-logs-div'>
                <select>
                {members && members.map((member) => {
                    return (
                        <option value={member.id}>{member.name}</option>
                    )
                })}
                </select>
            </div>
            <Grass/>
        </div>
    )
}
export default Calendar;