import './Exercise.scss';
import exerciseStock from '../../Assets/exerciseStock.jpg'
import trophy0 from '../../Assets/0mins.svg';
import trophy10 from  '../../Assets/10mins.svg';
import trophy20 from '../../Assets/20mins.svg';
import trophy30 from '../../Assets/30mins.svg';
import trophy40 from '../../Assets/40mins.svg';
import trophy50 from '../../Assets/50mins.svg';
import trophy60 from '../../Assets/60mins.svg';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import exit from '../../Assets/Exit.svg';
import {Helmet, HelmetProvider} from "react-helmet-async";
import Grass from "../../Components/Grass";
import Weather from "../../Components/Weather";
import API from '../../API';
import {Exercise, ExerciseCategory, FamilyMember} from "../../Structs/DataTypes";

const ExercisePage = () => {
    const [selectedExercise, setSelectedExercise] = useState<null | Exercise>(null);
    const [exercises, setExercises] = useState([] as Exercise[])
    const [exerciseCategory, setExerciseCategory] = useState([] as ExerciseCategory[])
    const [selectedCategory, setSelectedCategory] = useState("");
    const [noMoreExercises, setNoMoreExercises] = useState(false)
    const [page, setPage] = useState(2)
    const [featuredExercise, setFeaturedExercise] = useState<Exercise>();
    const [duration, setDuration] = useState<null | number>();
    const [members, setFamilyMembers] = useState([] as FamilyMember[]);
    const [familyMember, setFamilyMember] = useState({} as FamilyMember)

    useEffect(() => {
        API.getPaginatedExercises(String(1)).then((response) => setExercises(response.data));
        API.getPaginatedExercises(String(page)).then((response) => {
            if(response.data.length == 0){
                setNoMoreExercises(true)
            }
        })
        API.getExerciseCategories().then((category) => setExerciseCategory(category));
        API.getFeaturedExercise().then((exercise) => setFeaturedExercise(exercise));
        API.getTotalLoggedDuration("").then((duration) => setDuration(duration));
        API.getFamilyMembers().then((members) => {
            setFamilyMembers(members)
            setFamilyMember(members[0])
        });
    }, [])
    const navigate = useNavigate();

    const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    }

    const getMoreExercises = () => {
        API.getPaginatedExercises(String(page)).then((response) => setExercises(exercises.concat(response.data)));
        API.getPaginatedExercises(String(page + 1)).then((response) => {
            if(response.data.length == 0){
                setNoMoreExercises(true)
            }
        })
        console.log(exercises)
        setPage(page + 1)
    }

    const categoryLayout = (category: ExerciseCategory[]) => {
        return category.map((category) => {
                return (
                    <option value={category.id}>{category.name}</option>
                )
            }
        )
    }

    const exerciseLayout = (individualExercise: Exercise[], filter: string) => {
        return  individualExercise.filter((exercise) => {
            if (filter === "") return true;
            return exercise.category_id.toString() === filter;
        }).map((exercise) => {
                return (
                    <>
                        <div className='grid-content'>
                            <img src={exercise.thumbnail_link} onClick={e => (setSelectedExercise(exercise))}
                                 alt={exercise.name + " Thumbnail"}/>
                            <p className='name'>{exercise.name}</p>
                            <p className='category'>{exercise.exerciseCategory?.name}</p>
                        </div>

                    </>
                )
            }
        )
    }

    const trophy = () => {
        if (duration != null){
            if (duration >= 0 && duration < 10){
                return(
                    <img src={trophy0} alt={"0 mins trophy"}/>
                )
            } else if (duration >= 10 && duration < 20){
                return(
                    <img src={trophy10} alt={"10 mins trophy"}/>
                )
            } else if (duration >= 20 && duration < 30){
                return(
                    <img src={trophy20} alt={"20 mins trophy"}/>
                )
            } else if (duration >= 30 && duration < 40){
                return(
                    <img src={trophy30} alt={"30 mins trophy"}/>
                )
            } else if (duration >= 40 && duration < 50){
                return(
                    <img src={trophy40} alt={"40 mins trophy"}/>
                )
            } else if (duration >= 50 && duration < 60){
                return(
                    <img src={trophy50} alt={"50 mins trophy"}/>
                )
            } else if (duration >= 60) {
                return(
                    <img src={trophy60} alt={"60 mins trophy"}/>
                )
            }
        }
    }

    const messages = () => {
        if (duration != null){
            if (duration >= 0 && duration < 10){
                return(
                    <p>Hey! You should get Moving!</p>
                )
            } else if (duration >= 10 && duration < 20){
                return(
                    <p>Way to go! Now keep it up!</p>
                )
            } else if (duration >= 20 && duration < 30){
                return(
                    <p>Keep up the good work!</p>
                )
            } else if (duration >= 30 && duration < 40){
                return(
                    <p>Half way through! You got this!</p>
                )
            } else if (duration >= 40 && duration < 50){
                return(
                    <p>You're moving like Henry!</p>
                )
            } else if (duration >= 50 && duration < 60){
                return(
                    <p>Just a little more! You're almost there!</p>
                )
            } else if (duration >= 60) {
                return(
                    <p>You did it! Great job!</p>
                )
            }
        }
    }
    return (
        <div className="exercise">
            <HelmetProvider>
                <Helmet>
                    <title>Get Moving</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
            <div className='otd-div'>
                <div className='otd-image'>
                    <img src={featuredExercise?.thumbnail_link} alt={"OTD Thumbnail"}/>
                </div>
                <div className='otd-text'>
                    <h2>Exercise of the Day</h2>
                    <p>{featuredExercise?.name}</p>
                </div>
            </div>
            {API.isLoggedIn() && members.length !== 0 &&
            <div className='trophy-div'>
                <div className='trophy-image'>
                    {trophy()}
                </div>
                <div className='trophy-text'>
                    <p>You Have Logged</p>
                    <p>{duration} minutes</p>
                    <p>for {familyMember.name}</p>
                    {messages()}
                </div>
            </div>
            }
            <div className='exercise-log-exercise'>
                <button onClick={() => {
                    navigate(API.isLoggedIn() ? '/exercise-log' : '/login');
                }} className='red-button'>Log Exercise
                </button>
            </div>
            <div className='exercise-content'>
                <div className='select-link'>
                    <select onChange={onCategoryChange}>
                        <option value="" >All</option>
                        {categoryLayout(exerciseCategory)}
                    </select>
                    <button onClick={() => {
                        navigate(API.isLoggedIn() ? '/all-logs' : '/login');
                    }} className='red-button'>View All Logs
                    </button>
                </div>
                <div className='exercise-grid'>
                    {exerciseLayout(exercises, selectedCategory)}
                </div>
                {selectedExercise &&
                <div className='dialog-box'>
                    <div className='background-color'>
                        <Weather/>
                        <div className='exit-button'>
                            <img src={exit} alt='Exit' onClick={e => (setSelectedExercise(null))}/>
                        </div>
                        <div className='desktop-dialog'>
                            <div className='episode-player'>
                                <div className='video-player'>
                                    <iframe
                                        src={selectedExercise.video_link}
                                        frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                            <div className='exercise-text'>
                                <p className='dbox-name'>{selectedExercise.name}</p>
                                <p className='dbox-category'>{selectedExercise.exerciseCategory?.name}</p>
                            </div>
                        </div>
                        <div>
                            {/*TODO Add picture of henry here*/}
                        </div>
                        <Grass/>
                    </div>
                    <div className='background'/>
                </div>
                }
                {!noMoreExercises &&
                    <div className='see-more'>
                        <button className='red-button' onClick={getMoreExercises}>See More</button>
                    </div>
                }
            </div>
            <Grass/>
        </div>
    )
}

export default ExercisePage