import './Home.scss';
import homePhoto from '../../Assets/henry-gets-moving-home.jpg'
import {Link} from "react-router-dom";
import recipeImage from '../../Assets/recipeStock.jpg';
import exerciseImage from '../../Assets/exerciseStock.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className='book-container'>
                <img src={homePhoto}/>
            </div>
            <div className='home-content'>
                <div className='of-the-day'>
                    <p>Title</p>
                    <Link to={'/exercise'}><img src={exerciseImage}/></Link>
                    <Link to={'/exercise'}>Title</Link>
                </div>
                <div className='of-the-day'>
                    <p>Title</p>
                    <Link to={'/recipes'}><img src={recipeImage}/></Link>
                    <Link to={'/recipes'}>Title</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;