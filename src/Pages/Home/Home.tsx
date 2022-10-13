import './Home.scss';
import homePhoto from '../../Assets/henry-gets-moving-home.jpg'
import {Link} from "react-router-dom";
import recipeImage from '../../Assets/recipeStock.jpg';
import exerciseImage from '../../Assets/exerciseStock.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className='book-container'>
                <img src={homePhoto} alt="Henry Gets Moving"/>
            </div>
            <div className='home-content'>
                <div className='of-the-day'>
                    <p>Exercise of the Day</p>
                    <Link to={'/exercise'}><img src={exerciseImage} alt="Exercise Photo"/></Link>
                    <Link to={'/exercise'}>Title</Link>
                </div>
                <div className='of-the-day'>
                    <p>Recipe of the Day</p>
                    <Link to={'/recipes'}><img src={recipeImage} alt="Recipe Photo"/></Link>
                    <Link to={'/recipes'}>Title</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;