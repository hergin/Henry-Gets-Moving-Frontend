import './LearnMore.scss';
import weather from "../../Assets/Weather.svg";
import footerImage from "../../Assets/grass.svg";
import React, {useState} from "react";
import exit from "../../Assets/Exit.svg";
import {Helmet, HelmetProvider} from "react-helmet-async";
import grassDesktop from "../../Assets/grassDesktop.svg";

type Demonstration = {
    [key: string]: any;
    thumbnail: string;
    name: string;
    category: string;
}

type Diagram = {
    [key: string]: any;
    diagram: string;
}

const LearnMore = () => {
    const demonstration_list = [
        {
            thumbnail: 'https://miro.medium.com/max/1024/1*fHAtQWD_4n2eH3zNSRpZPA.jpeg',
            name: "Some name",
            category: "Healthy",
        },
        {
            thumbnail: 'https://miro.medium.com/max/1024/1*fHAtQWD_4n2eH3zNSRpZPA.jpeg',
            name: "Some name",
            category: "Food",
        },
        {
            thumbnail: 'https://miro.medium.com/max/1024/1*fHAtQWD_4n2eH3zNSRpZPA.jpeg',
            name: "Some name",
            category: "Sugar",
        },
        {
            thumbnail: 'https://miro.medium.com/max/1024/1*fHAtQWD_4n2eH3zNSRpZPA.jpeg',
            name: "Some name",
            category: "Science",
        },
    ]

    const diagram_list = [
        {
            diagram: 'https://myplate-prod.azureedge.us/sites/default/files/styles/medium/public/2020-11/myplate-brand--labelled.png?itok=7VtFXcBC',
        },
        {
            diagram: 'https://www.ncagr.gov/agscool/images/pyramid.gif',
        },
    ]

    const [selectedDemo, setSelectedDemo] = useState<null | Demonstration>(null);

    const demoLayout = (individualDemo: Demonstration[]) => {
        return individualDemo.map((demo) => {
                return (
                    <div className='grid-content'>
                       <img src={demo.thumbnail} onClick={e => (setSelectedDemo(demo))} alt={demo.name + "Thumbnail"}/>
                        <p className='name'>{demo.name}</p>
                        <p className='category'>{demo.category}</p>
                    </div>
                )
            }
        )
    }

    const diagramLayout = (individualDiagram: Diagram[]) => {
        return individualDiagram.map((diagram) => {
                return (
                    <div className='content'>
                        <img src={diagram.diagram} alt={"Diagram"}/>
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
            <div className='weather-div'>
                <img src={weather} className='weather' alt={"Weather"}/>
            </div>
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
                        <img className='weather' src={weather} alt={"Weather"}/>
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
            <img src={footerImage} className='footer' alt={"Grass"}/>
            <img src={grassDesktop} className='footer-desktop' alt={"Grass"}/>
        </div>
    )
}

export default LearnMore;