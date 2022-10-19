import './Exercise.scss';
import exerciseStock from '../../Assets/exerciseStock.jpg'
import trophy from '../../Assets/40mins.svg'
import weather from "../../Assets/Weather.svg";
import React, {useState} from "react";
import footerImage from "../../Assets/grass.svg";
import {Link} from "react-router-dom";
import exit from '../../Assets/Exit.svg';

type Exercise = {
    [key: string]: any;
    thumbnail: string;
    name: string;
    video_url: string,
    category: string;
}

const Exercise = () => {
    const exercise_list = [
        {
            thumbnail: 'https://media.istockphoto.com/id/1132957137/video/woman-doing-lunges-exercise-on-white-background.jpg?s=640x640&k=20&c=c39G5V_c3mpAJgfMZdu5ynVpKYTVWrn1tBb47w6MgkY=',
            video_url: 'https://archive.org/download/Starry_Sky_Time_Lapse/Stars%20H264.mp4',
            name: "Some name",
            category: "Yoga",
        },
        {
            thumbnail: 'https://media.istockphoto.com/id/1132957137/video/woman-doing-lunges-exercise-on-white-background.jpg?s=640x640&k=20&c=c39G5V_c3mpAJgfMZdu5ynVpKYTVWrn1tBb47w6MgkY=',
            name: "Some name",
            video_url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            category: "Yoga",
        },
        {
            thumbnail: 'https://media.istockphoto.com/id/1132957137/video/woman-doing-lunges-exercise-on-white-background.jpg?s=640x640&k=20&c=c39G5V_c3mpAJgfMZdu5ynVpKYTVWrn1tBb47w6MgkY=',
            name: "Some name",
            video_url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            category: "Yoga",
        },
        {
            thumbnail: 'https://media.istockphoto.com/id/1132957137/video/woman-doing-lunges-exercise-on-white-background.jpg?s=640x640&k=20&c=c39G5V_c3mpAJgfMZdu5ynVpKYTVWrn1tBb47w6MgkY=',
            name: "Some name",
            video_url: '',
            category: "Yoga",
        },
    ]

    const [selectedExercise, setSelectedExercise] = useState<null | Exercise>(null);

    const exerciseLayout = (individualExercise: Exercise[]) => {
        return individualExercise.map((exercise) => {
                return (
                    <>
                        <div className='grid-content'>
                            <img src={exercise.thumbnail} onClick={e => (setSelectedExercise(exercise))} alt={exercise.name + "Thumbnail"}/>
                            <p className='name'>{exercise.name}</p>
                            <p className='category'>{exercise.category}</p>
                        </div>

                    </>
                )
            }
        )
    }
    return (
        <div className="exercise">
            <div className='weather-div'>
                <img src={weather} className='weather' alt={"Weather"}/>
            </div>
            <div className='otd-div'>
                <div className='otd-image'>
                    <img src={exerciseStock} alt={"OTD Thumbnail"}/>
                </div>
                <div className='otd-text'>
                    <h2>Exercise of the Day</h2>
                    <p>Exercise Name</p>
                </div>
            </div>
            <div className='trophy-div'>
                <div className='trophy-image'>
                    <img src={trophy} alt={"Trophy"}/>
                </div>
                <div className='trophy-text'>
                    <p>You Have Logged</p>
                    <p>40 minutes</p>
                    <p>for Child's Name</p>
                    <p>Keep up the good work!</p>
                </div>
            </div>
            <div className='exercise-log'>
                <Link to={'/exercise-log'} className='red-button'>Log Exercise</Link>
            </div>
            <div className='exercise-content'>
                <div className='select-link'>
                    <select>
                        <option value="" hidden={true}>Category Selection</option>
                    </select>
                    <Link to={'/all-logs'} className='red-button'>View All Logs</Link>
                </div>
                <div className='exercise-grid'>
                    {exerciseLayout(exercise_list)}
                </div>
                {selectedExercise &&
                <div className='dialog-box'>
                    <div className='background-color'>
                        <img className='weather' src={weather} alt={"Weather"}/>
                        <div className='exit-button'>
                            <img src={exit} alt='Exit' onClick={e => (setSelectedExercise(null))}/>
                        </div>
                        <div className='episode-player'>
                            <div className='video-player'>
                                <iframe
                                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                    frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className='exercise-text'>
                            <p className='dbox-name'>{selectedExercise.name}</p>
                            <p className='dbox-category'>{selectedExercise.category}</p>
                        </div>
                        <div>
                        {/*TODO Add picture of henry here*/}
                        </div>
                        <img src={footerImage} className='footer' alt={"Grass"}/>
                    </div>
                    <div className='background'/>
                </div>
                }
                <div className='see-more'>
                    <button className='red-button'>See More</button>
                </div>
            </div>
            <img src={footerImage} className='footer' alt={"Grass"}/>
        </div>
    )
}

export default Exercise;