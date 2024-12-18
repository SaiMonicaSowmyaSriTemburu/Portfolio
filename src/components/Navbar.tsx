import { Link } from 'react-router-dom';
import '../Navbar.css';
import { MDBIcon } from 'mdb-react-ui-kit';

const Navbar = () => {
    return (
        <div className='customNavbar'>
            <ul className='unorderedList'>
                <li><Link className='list' to='/'><MDBIcon size='2x' fas icon="home" /></Link></li>
                <li><Link className='list' to='/skills'><MDBIcon size='2x' fas icon="tools" /></Link></li>
                <li><Link className='list' to='/projects'><MDBIcon size='2x' fas icon="project-diagram" /></Link></li>
                <li><Link className='list' to='/services'><MDBIcon size='2x' fas icon="briefcase" /></Link></li>
                <li><Link className='list' to='/contact'><MDBIcon size='2x' fas icon="phone" /></Link></li>
            </ul>
        </div>
    )
}

export default Navbar;