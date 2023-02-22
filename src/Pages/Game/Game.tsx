import './Game.scss';
import {Helmet, HelmetProvider} from "react-helmet-async";
import React from "react";
import squirmMaze from '../../Assets/squirm_maze.png';
import crossword from '../../Assets/crossword.png';
import race from '../../Assets/henry_race.png';
import CrosswordComponent from "../../Components/Crossword/CrosswordComponent";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import WordsearchComponent from "../../Components/Wordsearch/WordsearchComponent";
import rightArrow from '../../Assets/RightArrow.svg';
import leftArrow from '../../Assets/LeftArrow.svg';

type Game = {
    [key: string]: any;
    thumbnail: string;
    name: string;
}
const Game = () => {
    const games_list = [
        {
            thumbnail: crossword,
            link: '../../Assets/crossword.png'
        },
        {
            thumbnail: race,
            link: '../../Assets/henry_race.png'
        },
        {
            thumbnail: squirmMaze,
            link: '../../Assets/squirm_maze.png'
        }
    ];

    return (
        <div className="game">
            <HelmetProvider>
                <Helmet>
                    <title>Game</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
            <h3>Henry Gets Moving Crossword</h3>
            <CrosswordComponent/>
            <h3>Henry Gets Moving Word Search</h3>
            <WordsearchComponent/>
            <Grass/>
            <h3>Downloadable Games</h3>
            <div className='games-list'>
                <div className='arrow'>
                    <img src={leftArrow} alt={"Left"}/>
                </div>
                <div>
                   list
                </div>
                <div className='arrow'>
                    <img src={rightArrow} alt={"Right"}/>
                </div>
            </div>
        </div>
    )
}

export default Game;