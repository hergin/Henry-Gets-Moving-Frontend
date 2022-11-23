import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, { useEffect, useState } from "react";
import {Calendar as ReactCalendar} from "react-calendar";
import API from '../../API';
import { ExerciseLog } from '../../Structs/DataTypes';


const Calendar = () => {
    const [selectedDate, selectDay] = useState(new Date());
    const [logs, setExerciseLogs] = useState([] as ExerciseLog[]);
    useEffect(() => {
        API.getExerciseLogs().then((logs) => setExerciseLogs(logs));
    }, []);
    const familyMembersLayout = (exerciseLog: Promise<ExerciseLog[]>) => {
        const members: string[] = [];
        const totalDurations: string[] = [];
        let counter = 0;
        logs.forEach(function (log) {
            if (log.createdAt == new Date()) {
                if (members[counter]) {
                    totalDurations[counter] = `${parseInt(totalDurations[counter]) + parseInt(log.duration)}`;
                    counter++;
                } else {
                    members[counter] = String(log.FamilyMember?.name);
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
            <ReactCalendar onChange={selectDay} value={selectedDate} minDate={new Date(2022, 9, 20)} className="date-picker"/>
            <br/>
            <h2>On {selectedDate.toLocaleDateString()}…</h2>
            <div>
                {familyMembersLayout(API.getExerciseLogs())}
            </div>
        </div>
    )
}
export default Calendar;