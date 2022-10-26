import './Game.scss';
import {Helmet, HelmetProvider} from "react-helmet-async";
import React from "react";
import squirmMaze from '../../Assets/squirm_maze.png';

const Game = () => {
    return (
        <div className="game">
            <HelmetProvider>
                <Helmet>
                    <title>Game</title>
                </Helmet>
            </HelmetProvider>
            <div className="game-container">
                <img src={squirmMaze} alt="Squirm's maze"/>
                // TODO update to change with carousel game picker
            </div>
            <div className="game-picker">
                
            </div>
        </div>
    )
}

export default Game;