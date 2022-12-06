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
        members.forEach(function (member) {
            member.exerciseLog.forEach(function (log) {
                if (new Date(log.created_at).toLocaleDateString() == selectedDate.toLocaleDateString()) {
                    if (familyMemberNames.includes(log.name)) {
                        totalDurations[familyMemberNames.indexOf(log.name)] = `${parseInt(totalDurations[familyMemberNames.indexOf(log.name)]) + parseInt(log.duration)}`;
                    } else {
                        familyMemberNames.push(log.name);
                        totalDurations[familyMemberNames.indexOf(log.name)] = log.duration;
                    }
                }
            });
    });
        return familyMemberNames.map((member)=>{
            return (
                <div className='logs'>
                    <p>{member + " logged "+ totalDurations[familyMemberNames.indexOf(member)] +" minutes of activity! " + (parseInt(totalDurations[familyMemberNames.indexOf(member)]) > 59 ? "Great job!" : "There's still time to hit 60 minutes today!")}</p>
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
                {familyMembersLayout().length > 0 ? familyMembersLayout() : "No one logged any activity on this day, but there's still time to log some for today!"}
            </div>
        </div>
    )
}
export default Calendar;