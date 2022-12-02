import './LearnMore.scss';
import footerImage from "../../Assets/grass.svg";
import React, {useState} from "react";
import exit from "../../Assets/Exit.svg";
import {Helmet, HelmetProvider} from "react-helmet-async";
import grassDesktop from "../../Assets/grassDesktop.svg";
import Grass from "../../Components/Grass";
import Weather from "../../Components/Weather";
import {Demonstration, Diagram} from "../../Structs/DataTypes";

const LearnMore = () => {
    const [selectedDemo, setSelectedDemo] = useState<null | Demonstration>(null);

    const demoLayout = (individualDemo: Demonstration[]) => {
        return individualDemo.map((demo) => {
                return (
                    <div className='grid-content'>
                       <img src={demo.thumbnail_link} onClick={e => (setSelectedDemo(demo))} alt={demo.name + "Thumbnail"}/>
                        <p className='name'>{demo.name}</p>
                        <p className='category'>{demo.demonstrationCategory?.name}</p>
                    </div>
                )
            }
        )
    }

    const diagramLayout = (individualDiagram: Diagram[]) => {
        return individualDiagram.map((diagram) => {
                return (
                    <div className='content'>
                        <img src={diagram.thumbnail_link} alt={"Diagram"}/>
                    </div>
                )
            }
        )
    }
    return (
        <div className="learn-more">
            <HelmetProvider>
                <Helmet>
                    <title>Learn More</title>
                </Helmet>
            </HelmetProvider>
           <Weather/>
            <div className='diagrams'>
                <h2>Diagrams</h2>
                <div className='diagram-grid'>
                    {diagramLayout(diagram_list)}
                </div>
            </div>
            <div className='demo-content'>
                <h2>Demonstrations</h2>
                <div className='select-search'>
                    <select>
                        <option value="" hidden={true}>Category Selection</option>
                    </select>
                    <input id='search' placeholder="Search"/>
                </div>
                <div className='demo-grid'>
                    {demoLayout(demonstration_list)}
                </div>
                {selectedDemo &&
                <div className='dialog-box'>
                    <div className='background-color'>
                        <Weather/>
                        <div className='exit-button'>
                            <img src={exit} alt='Exit' onClick={e => (setSelectedDemo(null))}/>
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
                        <div>
                            {/*TODO Add picture of henry here*/}
                        </div>
                        <img src={footerImage} className='footer' alt={"Grass"}/>
                        <img src={grassDesktop} className='footer-desktop' alt={"Grass"}/>
                    </div>
                    <div className='background'/>
                </div>
                }
                <div className='see-more'>
                    <button className='red-button'>See More</button>
                </div>
            </div>
          <Grass/>
        </div>
    )
}

export default LearnMore;