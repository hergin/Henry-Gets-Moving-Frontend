import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, {useEffect, useState} from "react";
import {Calendar as ReactCalendar} from "react-calendar";
import API from '../../API';
import {Exercise, ExerciseLog, FamilyMember} from '../../Structs/DataTypes';
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import BackArrow from "../../Components/BackArrow/BackArrow";
import swings from "../../Assets/Swings.png";
import LightIntensity from '../../Assets/LightIntensity.svg'
import ModerateIntensity from '../../Assets/ModerateIntensity.svg'
import VigorousIntensity from '../../Assets/VigorousIntensity.svg'
import {Link} from "react-router-dom";

const Calendar = () => {
    const [selectedDate, selectDay] = useState(new Date());
    const [members, setFamilyMembers] = useState([] as FamilyMember[]);
    const [familyMember, setFamilyMember] = useState({} as FamilyMember)
    const [exerciseLogs, setExerciseLogs] = useState([] as ExerciseLog[])
    const [dailyTime, setDailyTime] = useState(0)
    useEffect(() => {
        API.getFamilyMembers().then((members) => {
            setFamilyMembers(members)
            setFamilyMember(members[0])
        });
        API.getExerciseLogs().then((logs) => {
            setExerciseLogs(logs)
        })
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
            <ReactCalendar onClickDay={(date) => {
                selectDay(date)
            }} value={selectedDate} minDate={new Date(2022, 9, 20)}
                           className="date-picker"/>
            <div className={"date-member-select"}>
                <h1>On {selectedDate.toLocaleDateString()}…</h1>
                <select onChange={(event) => {
                    event.preventDefault()
                    const index: number = parseInt(event.currentTarget.value, 10)
                    setFamilyMember(familyMember => {
                        return {...(members[index] as FamilyMember)}
                    })
                }}>
                    {members && members.map((member, index) => {
                        return (
                            <option value={index}>{member.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className='exercise-logs-div'>
                {(exerciseLogs && exerciseLogs.filter((log) => {return new Date(log.date).toDateString() == selectedDate.toDateString() && log.family_member_id == familyMember.id}).length != 0) &&
                    <div className='legend'>
                        <p>Name</p>
                        <p>Exercise Type</p>
                        <p>Duration</p>
                        <p>Intensity</p>
                    </div>}
                {(!exerciseLogs || exerciseLogs.filter((log) => {return new Date(log.date).toDateString() == selectedDate.toDateString() && log.family_member_id == familyMember.id}).length == 0) &&
                    <div className='no-logs'>
                        <p>There are no exercise logs for {familyMember.name} on this day.</p>
                        <Link className={'red-button'} to={'/exercise-log'}>Get Moving!</Link>
                    </div>}
                {exerciseLogs && exerciseLogs.filter((log) => {
                    return new Date(log.date).toDateString() == selectedDate.toDateString() && log.family_member_id == familyMember.id
                }).map((log) => {
                    return (
                        <div className='log'>
                            <p>{log.name}</p>
                            <p>{log.type}</p>
                            <p>{log.duration} minutes</p>
                            {log.intensity === "Light" &&
                            <img src={LightIntensity}/>
                            }
                            {log.intensity === "Moderate" &&
                            <img src={ModerateIntensity}/>
                            }
                            {log.intensity === "Vigorous" &&
                            <img src={VigorousIntensity}/>
                            }
                        </div>
                    )
                })}
            </div>
            <div className='swings'>
                <img src={swings} alt={"Henry and Jasmine on Swings"}/>
            </div>
            <Grass/>
        </div>
    )
}
export default Calendar;