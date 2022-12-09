import './login.css';
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { GoogleLogin } from 'react-google-login';

const LogIn = ({clientId}) => {

  function onSuccess (response) {
    console.log(response);
  };

  function onFailure (response) {
    console.log(response);
  };

  return (
    <div className='wapper'>
        <h3 className='titleLogIn'>LOG IN</h3>
        <div className='logInWapper'>
            <div className='logInLeft'>
                <div className='socialIcon'><BsFacebook className='icon'/> <span className='textIcon'>Facebook</span></div>
                {/* <div className='socialIcon'><BsGoogle className='icon'/> <span className='textIcon'>Google</span></div>*/}
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
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