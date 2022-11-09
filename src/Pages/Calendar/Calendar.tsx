import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, { useState } from "react";
import {Calendar as ReactCalendar} from "react-calendar";
import API from '../../API';
import { ExerciseLog } from '../../Structs/DataTypes';


const Calendar = () => {
    const [selectedDate, selectDay] = useState(new Date());
    const familyMembersLayout = (exerciseLog: ExerciseLog[]) => {
        const members: string[] = [];
        const totalDurations: string[] = [];
        let counter = 0;
        exerciseLog.forEach(function (log) {
            if (log.createdAt == new Date()) {
                if (members[counter]) {
                    totalDurations[counter] = `${parseInt(totalDurations[counter]) + parseInt(log.duration)}`;
                    counter++;
                } else {
                    members[counter] = log.FamilyMember.name;
                    totalDurations[counter] = log.duration;
                    counter++;
                }
            }
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
            <ReactCalendar onClickDay={updateLogText} onChange={selectDay} value={selectedDate} minDate={new Date(2022, 9, 20)} className="date-picker"/>
            <br/>
            <h2>On {selectedDate.toLocaleDateString()}…</h2>
            <div>
                {familyMembersLayout(API.getExerciseLogs())}
            </div>
            <p>[FAMILY MEMBER 1] logged [MINUTES] minutes of activity! Almost there!</p>
            <p>[FAMILY MEMBER 2] logged [MINUTES OVER 60] minutes of activity! Great job!</p>
            <p>et cetera…</p>
            // TODO: pull this from the le epic database
        </div>
    )
}
export default Calendar;