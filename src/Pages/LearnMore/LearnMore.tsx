import './LearnMore.scss';
import footerImage from "../../Assets/grass.svg";
import React, {useEffect, useState} from "react";
import exit from "../../Assets/Exit.svg";
import {Helmet, HelmetProvider} from "react-helmet-async";
import grassDesktop from "../../Assets/grassDesktop.svg";
import Grass from "../../Components/Grass";
import Weather from "../../Components/Weather";
import {Demonstration, DemonstrationCategory, Diagram, ExerciseCategory} from "../../Structs/DataTypes";
import API from "../../API";

const LearnMore = () => {
    const [selectedDemo, setSelectedDemo] = useState<null | Demonstration>(null);
    const [demos, setDemos] = useState([] as Demonstration[])
    const [demoCategory, setDemoCategory] = useState([] as DemonstrationCategory[])
    const [selectedCategory, setSelectedCategory] = useState("");
    const [diagrams, setDiagrams] = useState([] as Diagram[])
    const [page, setPage] = useState(2)
    const [noMoreDemos, setNoMoreDemos] = useState(false);

    document.addEventListener('keydown', function (event) {
        const key = event.key; // const {key} = event; in ES6+
        if (key === "Escape") {
            setSelectedDemo(null);
        }
    });

    useEffect(() => {
        API.getPaginatedDemos('1').then((demos) => setDemos(demos.data));
        API.getPaginatedDemos(String(page)).then((response) => {
            if(response.data.length == 0){
                setNoMoreDemos(true)
            }
        });
        API.getDemonstrationCategories().then((category) => setDemoCategory(category));
        API.getDiagrams().then((diagrams) => setDiagrams(diagrams));
    }, [])

    const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    }
    const getMoreDemos = () => {
        API.getPaginatedDemos(String(page)).then((demonstrations) => setDemos(demos.concat(demonstrations.data)));
        API.getPaginatedDemos(String(page+1)).then((response) => {
            if(response.data.length == 0){
                setNoMoreDemos(true)
            }
        });
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

    const demoLayout = (individualDemo: Demonstration[], filter: string) => {
        return individualDemo.filter((demo) => {
            if (filter === "") return true;
            return (demo.demoCategories?.map(x => x.name).join(", ")!).includes(filter);
        }).map((demo) => {
                return (
                    <div className='grid-content'>
                       <img src={demo.thumbnail_link} onClick={e => (setSelectedDemo(demo))} alt={demo.name + " Thumbnail"}/>
                        <p className='name'>{demo.name}</p>
                        <p className='category'>{demo.demoCategories?.map(x => x.name).join(", ")}</p>
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
                    {diagramLayout(diagrams)}
                </div>
            </div>
            <div className='demo-content'>
                <h2>Demonstrations</h2>
                <div className='select-search'>
                    <select onChange={onCategoryChange}>
                        <option value="" >All</option>
                        {categoryLayout(demoCategory)}
                    </select>
                    <input id='search' placeholder="Search"/>
                </div>
                <div className='demo-grid'>
                    {demoLayout(demos, selectedCategory)}
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
                                    src={selectedDemo.video_link}
                                    frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <img src={footerImage} className='footer' alt={"Grass"}/>
                        <img src={grassDesktop} className='footer-desktop' alt={"Grass"}/>
                    </div>
                    <div className='background'/>
                </div>
                }
                {!noMoreDemos &&
                    <div className='see-more'>
                        <button className='red-button' onClick={getMoreDemos}>See More</button>
                    </div>
                }

            </div>
          <Grass/>
        </div>
    )
}

export default LearnMore;