import { Link } from 'react-router-dom';

import myImage from '../assets/my_image.png';
import '../styles/About.css';

const About = () => {

    return (
        <div className='about'>
            <img className='profileImage' src={myImage}></img>
            <h5 className='myName'>Hello, I'm Sai Monica Sowmya Sri Temburu</h5>
            <div className='intro'>
                <p className='text'>Passionate Node JS Backend Developer with a proven track record in designing scalable microservices architectures. I thrive on transforming complex challenges into streamlined solutions, delivering backend systems that drive efficiency and innovation</p>
            </div>
            <Link to='/skills'>
                <button className='button'>Interested to know more about me ?</button>
            </Link>
        </div>

    )
};

export default About;