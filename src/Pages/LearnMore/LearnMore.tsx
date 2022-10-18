import './LearnMore.scss';
import {Link} from "react-router-dom";
import weather from "../../Assets/Weather.svg";
import recipeStock from "../../Assets/recipeStock.jpg";
import footerImage from "../../Assets/grass.svg";
import React from "react";

type Demonstration = {
    [key: string]: any;
    thumbnail: string;
    name: string;
    category: string;
}

type Diagram = {
    [key: string]: any;
    thumbnail: string;
}


const LearnMore = () => {
    const demonstration_list = [
        {
            thumbnail: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/veg-pizza-puffs-recipe-280x280.jpg',
            name: "Some name",
            category: "Healthy",
        },
        {
            thumbnail: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/veg-pizza-puffs-recipe-280x280.jpg',
            name: "Some name",
            category: "Healthy",
        },
        {
            thumbnail: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/veg-pizza-puffs-recipe-280x280.jpg',
            name: "Some name",
            category: "Healthy",
        },
        {
            thumbnail: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/veg-pizza-puffs-recipe-280x280.jpg',
            name: "Some name",
            category: "Healthy",
        },
    ]

    const diagram_list = [
        {
            thumbnail: 'https://myplate-prod.azureedge.us/sites/default/files/styles/medium/public/2020-11/myplate-brand--labelled.png?itok=7VtFXcBC',
        },
        {
            thumbnail: 'https://www.ncagr.gov/agscool/images/pyramid.gif',
        },
        {
            thumbnail: 'http://www.washingtonpost.com/wp-srv/nation/daily/graphics/diet_042005.gif',
        },
    ]

    const demoLayout = (individualDemo: Demonstration[]) => {
        return individualDemo.map((demo) => {
                return (
                    <div className='grid-content'>
                       <img src={demo.thumbnail}/>
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
                        <img src={diagram.thumbnail}/>
                    </div>
                )
            }
        )
    }
    return (
        <div className="learn-more">
            <img src={weather} className='weather'/>
            <div className='diagrams'>
                <h2>Diagrams</h2>
                <div className='demo-image'>
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
                <div className='see-more'>
                    <button className='red-button'>See More</button>
                </div>
            </div>
            <img src={footerImage} className='footer'/>
        </div>
    )
}

export default LearnMore;