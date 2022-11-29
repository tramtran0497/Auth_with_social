import logo from '../assets/logo.png';
import avatar from '../assets/IMG_3071.jpg';
import './navbar.css';

const Navbar = () => {
    return(
        <div className='navBar' >
            <div className='logoImgWrapper'>
                <img src={logo} alt="Logo" className='logoImg'/>
            </div>
            <ul className='navList'>
                <li className='navItem'>Home</li>
                <li className='navItem'>Log out</li>
                <li className='navItem'>
                    <div className='avatarWapper'>
                        <img src={avatar} alt="Avatar" className='avatar'/>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;