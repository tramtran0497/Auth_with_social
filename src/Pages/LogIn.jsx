import './login.css';
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";

const LogIn = () => {
  return (
    <div className='wapper'>
        <h3 className='titleLogIn'>LOG IN</h3>
        <div className='logInWapper'>
            <div className='logInLeft'>
                <div className='socialIcon'><BsFacebook className='icon'/> <span className='textIcon'>Facebook</span></div>
                <div className='socialIcon'><BsGoogle className='icon'/> <span className='textIcon'>Google</span></div>
                <div className='socialIcon'><BsGithub className='icon'/> <span className='textIcon'>GitHub</span></div>
            </div>
            <div className='logInRight'>
                <input type="text" placeholder='Username...' className='textInput'/>
                <input type="password" placeholder='Password...' className='textInput'/>
                <button className='btnLogIn'>Log In</button>
            </div>
        </div>
    </div>
  );
};

export default LogIn;