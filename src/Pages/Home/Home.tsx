import './Home.scss';
import homePhoto from '../../Assets/henry-gets-moving-home.jpg'
import {Link} from "react-router-dom";
import recipeImage from '../../Assets/recipeStock.jpg';
import exerciseImage from '../../Assets/exerciseStock.jpg';
import React, {useEffect, useState} from "react";
import footerImage from "../../Assets/HomeFooter.svg";
import footerDesktopImage from '../../Assets/HomeFooterDesktop.svg';
import footerMobileImage from '../../Assets/HomeFooterMobile.svg'
import {Helmet, HelmetProvider} from "react-helmet-async";
import Weather from "../../Components/Weather";
import API from "../../API";
import {Exercise, Recipe} from "../../Structs/DataTypes";

const Home = () => {

    const [exerciseFeatured, setExerciseFeatured] = useState<Exercise>();
    const [recipeFeatured, setRecipeFeatured] = useState<Recipe>();

    useEffect(() => {
        API.getFeaturedExercise().then((exercise) => setExerciseFeatured(exercise))
        API.getFeaturedRecipe().then((recipe) => setRecipeFeatured(recipe))
    }, [])

    return (
        <div className="home">
            <HelmetProvider>
                <Helmet>
                    <title>Henry Gets Moving</title>
                </Helmet>
            </HelmetProvider>
            <div className='book-container'>
                <img src={homePhoto} alt="Henry Gets Moving"/>
            </div>
            <div className='home-content'>
                <Weather/>
               <div className='otd-div'>
                   <div className='of-the-day'>
                       <p>Exercise of the Day</p>
                       <Link to={'/get-moving'}><img src={exerciseFeatured?.thumbnail_link} alt="Featured Exercise"/></Link>
                       <Link to={'/get-moving'}>Title</Link>
                   </div>
                   <div className='of-the-day'>
                       <p>Recipe of the Day</p>
                       <Link to={'/recipes'}><img src={recipeImage} alt="Recipe Photo"/></Link>
                       <Link to={'/recipes'}>Title</Link>
                   </div>
               </div>
            </div>
            <img src={footerImage} className='footer' alt={"Grass"}/>
            <img src={footerDesktopImage} className='footer-desktop' alt={"Grass"}/>
            <img src={footerMobileImage} className='footer-mobile' alt={"Grass"}/>
        </div>
    )
}

export default Home;