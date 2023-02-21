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
import clouds from "../../Assets/clouds.gif";
import sun from "../../Assets/sun.gif";

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
                <Link to={require("../../Assets/HenryGetsMovingBook.pdf")} target={"blank"}><img src={homePhoto} alt="Henry Gets Moving"/></Link>
            </div>
            <div className='home-content'>
                <div className='weather'>
                    <img className='clouds' src={clouds} alt={'clouds'}/>
                    <img className='sun' src={sun} alt={'sun'}/>
                </div>
                <div className='weather-desktop'>
                    <img className='clouds' src={clouds} alt={'clouds'}/>
                    <img className='sun' src={sun} alt={'sun'}/>
                </div>
                <div className='weather-mobile'>
                    <img className='clouds' src={clouds} alt={'clouds'}/>
                    <img className='sun' src={sun} alt={'sun'}/>
                </div>
               <div className='otd-div'>
                   <div className='of-the-day'>
                       <p>Exercise of the Day</p>
                       <Link to={'/get-moving'}><img src={exerciseFeatured?.thumbnail_link} alt="Featured Exercise"/></Link>
                       <Link to={'/get-moving'}>{exerciseFeatured?.name}</Link>
                   </div>
                   <div className='of-the-day'>
                       <p>Recipe of the Day</p>
                       <Link to={'/recipes'}><img src={recipeFeatured?.thumbnail} alt="Featured Recipe"/></Link>
                       <Link to={'/recipes'}>{recipeFeatured?.name}</Link>
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