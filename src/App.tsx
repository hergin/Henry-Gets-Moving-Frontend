import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from '../src/Components/Header/Header';
import About from "./Pages/About/About";
import Calendar from "./Pages/Calendar/Calendar";
import ExercisePage from "./Pages/Exercise/ExercisePage";
import ExerciseLogPage from "./Pages/ExerciseLog/ExerciseLogPage";
import Game from "./Pages/Game/Game";
import Home from "./Pages/Home/Home";
import IndividualRecipe from "./Pages/IndividualRecipe/IndividualRecipe";
import LearnMore from "./Pages/LearnMore/LearnMore";
import Login from "./Pages/Login/Login";
import RecipePage from "./Pages/Recipe/RecipePage";
import Register from "./Pages/Register/Register";
import Admin from "./Pages/Admin/Admin";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/all-logs' element={<Calendar/>}/>
                <Route path='/get-moving' element={<ExercisePage/>}/>
                <Route path='/exercise-log' element={<ExerciseLogPage/>}/>
                <Route path='/games' element={<Game/>}/>
                {/*TODO Set this up so that the url is the recipe name*/}
                <Route path='/individual-recipe' element={<IndividualRecipe/>}/>
                <Route path='/learn-more' element={<LearnMore/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/recipes' element={<RecipePage/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
        </div>
    );
}

export default App;
