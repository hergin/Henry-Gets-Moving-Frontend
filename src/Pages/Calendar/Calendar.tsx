import './Calendar.scss'
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, {useEffect, useState} from "react";
import {Calendar as ReactCalendar} from "react-calendar";
import API, {API_URL} from '../../API';
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
import exit from "../../Assets/Exit.svg";
import light from "../../Assets/LightIntensity.svg";
import medium from "../../Assets/ModerateIntensity.svg";
import hard from "../../Assets/VigorousIntensity.svg";

const Calendar = () => {

    const [selectedDate, selectDay] = useState(new Date());
    const [members, setFamilyMembers] = useState([] as FamilyMember[]);
    const [familyMember, setFamilyMember] = useState({} as FamilyMember)
    const [exerciseLogs, setExerciseLogs] = useState([] as ExerciseLog[])
    const [newName, setNewName] = useState("")
    const [dailyTime, setDailyTime] = useState(0)
    const [selectedLog, setSelectedLog] = useState<null | ExerciseLog>(null);
    const [selectedLogFamilyMember, setSelectedLogFamilyMember] = useState({} as FamilyMember)
    useEffect(() => {
        API.getFamilyMembers().then((members) => {
            setFamilyMembers(members)
            setFamilyMember(members[0])

        });
        API.getExerciseLogs().then((logs) => {
            setExerciseLogs(logs)
        })
    }, []);

    const deleteFamilyMember = async () => {
        if (!window.confirm(`Are you sure you want to delete ${familyMember.name}? This action cannot be undone!`)) return;
        await fetch(`${API_URL}/familyMembers/${familyMember.id}`, {
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

    const editFamilyMember = async () => {
        const formData = new FormData();
        formData.append("name", familyMember.name);
        formData.append("user_id", String(familyMember.user_id))
        await fetch(`${API_URL}/familyMembers/${familyMember.id}`, {
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
    const deleteLog = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (window.confirm("Delete this exercise log?")) {
            await fetch(`${API_URL}/exerciseLogs/${selectedLog?.id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    window.alert("Exercise log deleted!")
                    window.location.reload()
                    return response
                })
                .catch(err => {
                    window.alert(err);
                })
        }
    }
    const updateLog = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("intensity", selectedLog?.intensity!)
        formData.append("duration", selectedLog?.duration!)
        formData.append("type", selectedLog?.type!)
        formData.append("date", selectedLog?.date!)
        const childFormData = new FormData()
        childFormData.append("name", selectedLogFamilyMember.name)
        console.log(selectedLog)
        const familyMember = await fetch(`${API_URL}/checkFamilyMember`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("session_key")}`
            },
            body: childFormData,
        })
            .then(response => {
                return response.json();
            })
        await formData.append('family_member_id', familyMember.id)
        return fetch(`${API_URL}/exerciseLogs/${selectedLog?.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("session_key")}`
            },
            body: formData,

        })
            .then(response => {
                return response.json();
            })
            .then(response => {
                window.alert("Your exercise log has been updated!")
                window.location.reload()
                return response
            })
            .catch(err => {
                window.alert(err);
            })
    }

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
                        <input type="text" id="name-changer" value={familyMember?.name ? String(familyMember?.name) : ""}
                               onChange={event => {
                                   setFamilyMember((familyMember) => {
                                       return {...familyMember, name: event.target.value} as FamilyMember
                                   });

                               }}/>
                        <button className="red-button save" onClick={editFamilyMember}
                                disabled={members.includes(familyMember) || !familyMember.name}>Save changes
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
                                <p>{log.familyMember?.name}</p>
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
                                {<button className={'edit-button'} onClick={e => {setSelectedLog(log); setSelectedLogFamilyMember(log.familyMember!)}}><img src={Edit} alt={"Edit"}/></button>}
                                {selectedLog &&
                                <div className='dialog-box'>
                                    <div className='background-color'>
                                        <form onSubmit={updateLog}>
                                            <div className='exit-button'>
                                                <img src={exit} alt='Exit' onClick={e => (setSelectedLog(null))}/>
                                            </div>
                                            <div className='log-input'>
                                                <div className='label-input'>
                                                    <label>Child's Name</label>
                                                    <input defaultValue={selectedLogFamilyMember.name} onChange={(event) => {
                                                        setSelectedLogFamilyMember((log) => {
                                                            return {...log, name: event.target.value} as FamilyMember
                                                        })
                                                    }
                                                    }/>
                                                </div>
                                                <div className='label-input'>
                                                    <label>Exercise Type</label>
                                                    <input defaultValue={selectedLog.type} onChange={(event) => {
                                                        setSelectedLog((log) => {
                                                            return {...log, type: event.target.value} as ExerciseLog
                                                        })
                                                    }
                                                    }/>
                                                </div>
                                                <div className='intensity label-input'>
                                                    <label>Intensity</label>
                                                    <div className="icons">
                                                        <div className={selectedLog.intensity === 'Light' ? 'intensity-icon selected' : "intensity-icon"} onClick={(event) => {
                                                            setSelectedLog((log) => {
                                                                return {...log, intensity: "Light"} as ExerciseLog
                                                            })
                                                        }
                                                        }>
                                                            <img src={light} alt={"Light Intensity"} />
                                                            <p>Light</p>
                                                        </div>
                                                        <div className={selectedLog.intensity  === 'Moderate' ? 'intensity-icon selected' : "intensity-icon"} onClick={(event) => {
                                                            setSelectedLog((log) => {
                                                                return {...log, intensity: "Moderate"} as ExerciseLog
                                                            })
                                                        }
                                                        }>
                                                            <img src={medium} alt={"Moderate Intensity"}/>
                                                            <p>Moderate</p>
                                                        </div>
                                                        <div className={selectedLog.intensity  === 'Vigorous' ? 'intensity-icon selected' : "intensity-icon"} onClick={(event) => {
                                                            setSelectedLog((log) => {
                                                                return {...log, intensity: "Vigorous"} as ExerciseLog
                                                            })
                                                        }
                                                        }>
                                                            <img src={hard} alt={"Vigorous Intensity"}/>
                                                            <p>Vigorous</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='label-input'>
                                                    <label>Duration</label>
                                                    <input placeholder="# of Minutes" defaultValue={selectedLog.duration} onChange={(event) => {
                                                        setSelectedLog((log) => {
                                                            return {...log, duration: event.target.value} as ExerciseLog
                                                        })
                                                    }
                                                    }/>
                                                </div>
                                            </div>
                                            <div className='buttons'>
                                                <button className='red-button' onClick={deleteLog}>Delete Log</button>
                                                <button className='red-button' type="submit">Save Log</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='background'/>
                                </div>
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

}
export default Calendar;