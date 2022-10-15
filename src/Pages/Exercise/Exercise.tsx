import './Exercise.scss';
import exerciseStock from '../../Assets/exerciseStock.jpg'
import trophy from '../../Assets/40mins.svg'
import weather from "../../Assets/Weather.svg";
import React from "react";
import footerImage from "../../Assets/grass.svg";
import {Link} from "react-router-dom";

type Exercise = {
    [key: string]: any;
    thumbnail: string;
    name: string;
    category: string;
}

const Exercise = () => {
    const exercise_list = [
        {
            thumbnail: 'https://media.istockphoto.com/id/1132957137/video/woman-doing-lunges-exercise-on-white-background.jpg?s=640x640&k=20&c=c39G5V_c3mpAJgfMZdu5ynVpKYTVWrn1tBb47w6MgkY=',
            name: "Some name",
            category: "Yoga",
        },
        {
            thumbnail: 'https://media.istockphoto.com/id/1132957137/video/woman-doing-lunges-exercise-on-white-background.jpg?s=640x640&k=20&c=c39G5V_c3mpAJgfMZdu5ynVpKYTVWrn1tBb47w6MgkY=',
            name: "Some name",
            category: "Yoga",
        },
        {
            thumbnail: 'https://media.istockphoto.com/id/1132957137/video/woman-doing-lunges-exercise-on-white-background.jpg?s=640x640&k=20&c=c39G5V_c3mpAJgfMZdu5ynVpKYTVWrn1tBb47w6MgkY=',
            name: "Some name",
            category: "Yoga",
        },
        {
            thumbnail: 'https://media.istockphoto.com/id/1132957137/video/woman-doing-lunges-exercise-on-white-background.jpg?s=640x640&k=20&c=c39G5V_c3mpAJgfMZdu5ynVpKYTVWrn1tBb47w6MgkY=',
            name: "Some name",
            category: "Yoga",
        },
    ]

    const exerciseLayout = (individualExercise: Exercise[]) => {
        return individualExercise.map((exercise) => {
                return (
                    <div className='grid-content'>
                        <img src={exercise.thumbnail}/>
                        <p>{exercise.name}</p>
                        <p>{exercise.category}</p>
                    </div>
                )
            }
        )
    }
    return (
        <div className="exercise">
            <img src={weather} className='weather'/>
            <div className='otd-div'>
                <div className='otd-image'>
                    <img src={exerciseStock}/>
                </div>
                <div className='otd-text'>
                    <h2>Exercise of the Day</h2>
                    <p>Exercise Name</p>
                </div>
            </div>
            <div className='trophy-div'>
                <div className='trophy-image'>
                    <img src={trophy}/>
                </div>
                <div className='trophy-text'>
                    <p>You Have Logged</p>
                    <p>40 minutes</p>
                    <p>for Child's Name</p>
                    <p>Keep up the good work!</p>
                </div>
            </div>
            <div className='log-exercise'>
                <Link to={'/log-exercise'} className='red-button'>Log Exercise</Link>
            </div>
            <div className='exercise-content'>
                <div className='select-link'>
                    <select>
                        <option value="" hidden={true}>Category Selection</option>
                    </select>
                    <Link to={'/calendar'} className='red-button'>View All Logs</Link>
                </div>
                <div className='exercise-grid'>
                    {exerciseLayout(exercise_list)}
                </div>
                <button className='red-button'>See More</button>
            </div>
            <img src={footerImage} className='footer'/>
        </div>
    )
}

export default Exercise;