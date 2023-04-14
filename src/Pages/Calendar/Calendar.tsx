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
import Edit from '../../Assets/Edit.svg'

const Calendar = () => {
    async function deleteLog(logToDelete: ExerciseLog) {
        if (window.confirm("Delete this exercise log?")) {
            await fetch(`${API.API_URL}/exerciseLogs/${logToDelete.id}`, {
                method: 'DELETE',
            }).then((res) => {
                if (res.status >= 400 && res.status < 600) {
                    alert("Error deleting log")
                } else {
                    alert("Exercise log successfully deleted!")
                    window.location.reload()
                    return res.json()
                }
            })
        }
    }

    async function editFamilyMember() {
        if (newName == familyMember.name) return;
        const formData = new FormData();
        formData.append("name", newName);
        formData.append("user_id", String(familyMember.user_id))
        await fetch(`${API.API_URL}/familyMembers/${familyMember.id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("session_key")}`
            },
            body: formData
        }).then((res) => {
            if (res.status >= 400 && res.status < 600) {
                alert("Error editing family member")
            } else {
                alert("Changes saved!")
                window.location.reload()
                return res.json()
            }
        })
    }

    async function deleteFamilyMember() {
        if (!window.confirm(`Are you sure you want to delete ${familyMember.name}? This action cannot be undone!`)) return;
        await fetch(`${API.API_URL}/familyMembers/${familyMember.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("session_key")}`
            }
        }).then((res) => {
            if (res.status >= 400 && res.status < 600) {
                alert("Error deleting family member")
            } else {
                alert("Family member successfully deleted!")
                window.location.reload()
                return res.json()
            }
        })
    }

    const [selectedDate, selectDay] = useState(new Date());
    const [members, setFamilyMembers] = useState([] as FamilyMember[]);
    const [familyMember, setFamilyMember] = useState({} as FamilyMember)
    const [exerciseLogs, setExerciseLogs] = useState([] as ExerciseLog[])
    const [newName, setNewName] = useState("")
    const [dailyTime, setDailyTime] = useState(0)
    const [selectedLog, setSelectedLog] = useState<null | ExerciseLog>(null);
    useEffect(() => {
        API.getFamilyMembers().then((members) => {
            setFamilyMembers(members)
            setFamilyMember(members[0])

        });
        API.getExerciseLogs().then((logs) => {
            setExerciseLogs(logs)
        })
        console.log(newName)
        console.log(Boolean(newName))
    }, []);
    if (members.length == 0) {
        return (
            <div className={"calendar"}>
                <HelmetProvider>
                    <Helmet>
                        <title>Calendar</title>
                    </Helmet>
                </HelmetProvider>
                <Weather/>
                <BackArrow route={'/get-moving'}/>
                <div className='no-submits'>
                    <p>You have never submitted an exercise log before! To view the calendar, get moving and submit your
                        first log!</p>
                    <Link className={'red-button'} to={'/exercise-log'}>Get Moving!</Link>
                </div>
                <div className='swings'>
                    <img src={swings} alt={"Henry and Jasmine on Swings"}/>
                </div>
                <Grass/>
            </div>
        )
    } else {
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
                <div className="edit-menu">
                    <h3>Edit Family Members</h3>
                    <div className='edit-content'>
                        <label htmlFor="name-changer">Name</label>
                        <input type="text" id="name-changer" defaultValue={familyMember.name} onChange={event => {
                            setNewName(event.target.value);
                        }}/>
                        <button className="red-button save" onClick={editFamilyMember}
                                disabled={newName == familyMember.name || !Boolean(newName)}>Save changes
                        </button>
                        <button className="red-button delete" onClick={deleteFamilyMember}>Delete family member</button>
                    </div>
                </div>
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
                    {(exerciseLogs && exerciseLogs.filter((log) => {
                        return new Date(log.date).toDateString() == selectedDate.toDateString() && log.family_member_id == familyMember.id
                    }).length != 0) &&
                    <div className='legend'>
                        <p>Name</p>
                        <p>Exercise Type</p>
                        <p>Duration</p>
                        <p>Intensity</p>
                        <p>Edit</p>
                    </div>}
                    {(!exerciseLogs || exerciseLogs.filter((log) => {
                        return new Date(log.date).toDateString() == selectedDate.toDateString() && log.family_member_id == familyMember.id
                    }).length == 0) &&
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
                                {<button className={'edit-button'} onClick={e => (setSelectedLog(log))}><img src={Edit} alt={"Edit"}/></button>}
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

}
export default Calendar;