import './About.scss';
import teamPhoto from '../../Assets/HGMteam.jpg';
import youtube from '../../Assets/YoutubeIcon.png';
import facebook from '../../Assets/FacebookIcon.png';
import React from "react";
import {Helmet, HelmetProvider} from "react-helmet-async"
import Grass from "../../Components/Grass";
import Weather from "../../Components/Weather";

const About = () => {
    return (
        <div className="about">
            <HelmetProvider>
                <Helmet>
                    <title>About</title>
                </Helmet>
            </HelmetProvider>
           <Weather/>
            <div className='team-photo'>
                <img src={teamPhoto} alt={"Henry Gets Moving Team"}/>
            </div>
            <div className='content'>
                <h1>Henry Gets Moving in Delaware County</h1>
                <div className='text'>
                    <p>
                        Henry the Hamster is a young boy who overcomes his obesity challenge with an active lifestyle
                        and healthy eating. When we first meet Henry, he is overweight, having difficulty in school and
                        at play. Like many children, Henry is teased for his weight. A discouraged Henry receives
                        positive support from his friend, his physician, and his family to overcome his obesity and poor
                        eating habits. Henry’s determination and his positive support network are the foundation of
                        successful community wellness movements.
                    </p>
                    <p>
                        Obesity is the foremost American public health problem. According to the Center for Disease
                        Control and Prevention (CDC), 17% of children and 36% of adults are classified as obese, a
                        condition that is strongly correlated with an increased risk of heart disease, stroke, and type
                        II diabetes. The CDC estimates that obesity-related health care costs approach $150 billion.
                        Increasingly sedentary lifestyles and diets with excessive quantities of fat, sugar, and
                        processed foods have facilitated the tripling of childhood obesity and the doubling of adult
                        obesity rates over the past 30 years.
                    </p>
                </div>
                <div className='links'>
                    <a href={'https://www.youtube.com/channel/UCf5XxC_7PcJx_t5vU9Es2pA'} target={"_blank"} className='yt'>
                        <img src={youtube} alt='YouTube'/>
                    </a>
                    <a href={'https://m.facebook.com/profile.php?id=100063703680476&_rdr'} target={"_blank"}>
                        <img src={facebook} alt='Facebook'/>
                    </a>
                </div>
            </div>
          <Grass/>
        </div>
    )
}

export default About;