import './Game.scss';
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, {useState} from "react";
import squirmMaze from '../../Assets/Games/squirm_maze.png';
import race from '../../Assets/Games/henry_race.png';
import CrosswordComponent from "../../Components/Crossword/CrosswordComponent";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import WordsearchComponent from "../../Components/Wordsearch/WordsearchComponent";
import rightArrow from '../../Assets/RightArrow.svg';
import leftArrow from '../../Assets/LeftArrow.svg';
import {GameType} from "../../Structs/DataTypes";
import moveCube from '../../Assets/Games/MoveCube.png'
import rockPaperScissors from '../../Assets/Games/RPSShowdown.png';
import bingo from '../../Assets/Games/FitnessBingo.png'

const Game = () => {
    const games_list = [
        {
            thumbnail: race,
            link: race,
            name: 'Henry Gets Moving Race'
        },
        {
            thumbnail: squirmMaze,
            link: squirmMaze,
            name: 'Squirm Maze'
        },
        {
            thumbnail: moveCube,
            link: moveCube,
            name: 'The Move Cube'
        },
        {
            thumbnail: rockPaperScissors,
            link: rockPaperScissors,
            name: 'Rock, Paper, Scissors Showdown'
        },
        {
            thumbnail: bingo,
            link: bingo,
            name: 'Fitness Bingo'
        },
    ];

    const [startSlice, setStartSlice] = useState(0);
    const [maxSlice, setMaxSlice] = useState(3);

    const gamesLayout = (games: GameType[]) => {
        return games.slice(startSlice, maxSlice).map((game) => {
                return (
                    <div className='individual-game'>
                        <a href={game.link} download target='_blank'>
                            <img src={game.thumbnail} alt={game.name}/>
                        </a>
                        <p>{game.name}</p>
                    </div>
                )
            }
        )
    }

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
                <div className='arrow' onClick={
                    event => {
                        if (startSlice == 0) {
                            setStartSlice(games_list.length - ((games_list.length % 3) ? games_list.length % 3 : 3))
                            setMaxSlice(games_list.length)
                        }
                        if (startSlice == games_list.length - ((games_list.length % 3) ? games_list.length % 3 : 3)) {
                            setMaxSlice(startSlice)
                            setStartSlice(prev => prev - 3)
                        } else if (startSlice > 0) {
                            setStartSlice(prev => prev - 3);
                            {
                                setMaxSlice(prev => prev - 3)
                            }
                        }
                    }}>
                    <img src={leftArrow} alt={"Left"}/>
                </div>
                <div className='games'>
                    {gamesLayout(games_list)}
                </div>
                <div className='arrow' onClick={
                    event => {
                        if (maxSlice < games_list.length) {
                            setStartSlice(maxSlice);
                            {
                                setMaxSlice(maxSlice + 3)
                            }
                        } else {
                            setStartSlice(0)
                            setMaxSlice(3)
                        }
                    }}>
                    <img src={rightArrow}/>
                </div>
            </div>
        </div>
    )
}

export default Game;