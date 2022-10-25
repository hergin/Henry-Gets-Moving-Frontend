import './Home.scss';
import homePhoto from '../../Assets/henry-gets-moving-home.jpg'
import {Link} from "react-router-dom";
import recipeImage from '../../Assets/recipeStock.jpg';
import exerciseImage from '../../Assets/exerciseStock.jpg';
import React from "react";
import footerImage from "../../Assets/HomeFooter.png";
import footerDesktopImage from '../../Assets/HomeFooterDesktop.png';
import weather from '../../Assets/WeatherDesktop.svg';
import {Helmet, HelmetProvider} from "react-helmet-async";
import weatherMobile from "../../Assets/WeatherMobile.svg";

const Home = () => {
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
                <div className='weather-div'>
                    <img src={weather} className='weather' alt={"Weather"}/>
                    <img src={weatherMobile} className='weather-mobile' alt={"Weather"}/>
                </div>
               <div className='otd-div'>
                   <div className='of-the-day'>
                       <p>Exercise of the Day</p>
                       <Link to={'/get-moving'}><img src={exerciseImage} alt="Exercise Photo"/></Link>
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
        </div>
    )
}

export default Home;