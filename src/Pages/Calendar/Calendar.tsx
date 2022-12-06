import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, { useEffect, useState } from "react";
import {Calendar as ReactCalendar} from "react-calendar";
import API from '../../API';
import { FamilyMember } from '../../Structs/DataTypes';


const Calendar = () => {
    const [selectedDate, selectDay] = useState(new Date());
    const [members, setFamilyMembers] = useState([] as FamilyMember[]);
    useEffect(() => {
        API.getFamilyMembers().then((members) => setFamilyMembers(members));
    }, []);
    const familyMembersLayout = () => {
        let familyMemberNames: string[] = [];
        let totalDurations: string[] = [];
        let counter = 0;
        members.forEach(function (member) {
            member.exerciseLog.forEach(function (log) {
                if (log.createdAt == new Date()) {
                    if (familyMemberNames[counter]) {
                        totalDurations[counter] = `${parseInt(totalDurations[counter]) + parseInt(log.duration)}`;
                        counter++;
                    } else {
                        totalDurations[counter] = log.duration;
                        counter++;
                    }
                }
            });
    });
        return members.map((member)=>{
            return (
                <div className='logs'>
                    <p>{member + " logged "+ totalDurations[members.indexOf(member)] +" minutes of activity!"}</p>
                </div>
            )
        });
    }
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
            <div>
                {familyMembersLayout()}
            </div>
        </div>
    )
}
export default Calendar;