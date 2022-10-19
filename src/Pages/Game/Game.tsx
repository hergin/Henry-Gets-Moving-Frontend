import './Game.scss';
import {Helmet, HelmetProvider} from "react-helmet-async";
import React from "react";

const Game = () => {
    return (
        <div className="game">
            <HelmetProvider>
                <Helmet>
                    <title>Game</title>
                </Helmet>
            </HelmetProvider>
        </div>
    )
}

export default Game;