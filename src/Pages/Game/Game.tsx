import './Game.scss';
import {Helmet, HelmetProvider} from "react-helmet-async";
import React from "react";
import squirmMaze from '../../Assets/squirm_maze.png';
import crossword from '../../Assets/crossword.png';
type Game = {
    [key: string]: any;
    thumbnail: string;
    name: string;
}
const Game = () => {
    const games_list = [
        {
            thumbnail: crossword,
            name: "Healthy Eating Crossword"
        }
    ];
    const gamesLayout = (game: Game[]) => {
        return game.map((game) => {
                return (
                    <div className='grid-content'>
                        <img src={game.thumbnail} alt={game.name + "Thumbnail"}/>
                        <p className='name'>{game.name}</p>
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
            <div className="game-container">
                <img src={squirmMaze} alt="Squirm's maze"/>
            </div>
            <div className="game-picker">
                {gamesLayout(games_list)}
            </div>
        </div>
    )
}

export default Game;