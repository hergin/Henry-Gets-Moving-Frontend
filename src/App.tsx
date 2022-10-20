import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from '../src/Components/Header/Header';
import About from "./Pages/About/About";
import Calendar from "./Pages/Calendar/Calendar";
import Exercise from "./Pages/Exercise/Exercise";
import ExerciseLog from "./Pages/ExerciseLog/ExerciseLog";
import Game from "./Pages/Game/Game";
import Home from "./Pages/Home/Home";
import IndividualRecipe from "./Pages/IndividualRecipe/IndividualRecipe";
import LearnMore from "./Pages/LearnMore/LearnMore";
import Login from "./Pages/Login/Login";
import Recipe from "./Pages/Recipe/Recipe";
import Register from "./Pages/Register/Register";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/all-logs' element={<Calendar/>}/>
                <Route path='/get-moving' element={<Exercise/>}/>
                <Route path='/exercise-log' element={<ExerciseLog/>}/>
                <Route path='/games' element={<Game/>}/>
                {/*TODO Set this up so that the url is the recipe name*/}
                <Route path='/individual-recipe' element={<IndividualRecipe/>}/>
                <Route path='/learn-more' element={<LearnMore/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/recipes' element={<Recipe/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
