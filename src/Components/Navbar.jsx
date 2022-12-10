import logo from '../assets/logo.png';
import './navbar.css';

const Navbar = ({img, name}) => {
    return(
        <div className='navBar' >
            <div className='logoImgWrapper'>
                <img src={logo} alt="Logo" className='logoImg'/>
            </div>
            <ul className='navList'>
                <li className='navItem'>Home</li>
                <li className='navItem'>{name}</li>
                <li className='navItem'>
                    <div className='avatarWapper'>
                        <img src={img} alt="Avatar" className='avatar'/>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;