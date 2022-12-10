import './login.css';
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { GoogleLogin} from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';

const LogIn = ({clientId, appId}) => {
  const [user, setUser] = useState({});

  const onSuccess = (response) => {
    // console.log(response.profileObj);
    setUser(response.profileObj);
  };

  const onFailure = (error) => {
    console.log(error)
  };

  const logOut = () => {
    setUser(null);

  }
  useEffect(() => {
    // debug user info
    console.log("------------Local")
  });

  const fbClicked = (data) => {
    console.log("DATA", data)
  };

  const responseFacebook = (response) => {
    console.log("FB",response.name, response.picture.data.url);
    setUser({name: response.name, imageUrl: response.picture.data.url})
  };

  return (
    <div>
      {
        Object.keys(user).length ? (
          <>
          <Navbar img={user.imageUrl} name={user.name}/>
          <button onClick={logOut}><a href={"/"}>Log Out</a></button> 
          </>
          
          ) : (
          <div className='wapper'>
          <h3 className='titleLogIn'>LOG IN</h3>
          <div className='logInWapper'>
              <div className='logInLeft'>
                  <FacebookLogin
                    appId={appId}
                    fields="name,picture"
                    onClick={fbClicked}
                    callback={responseFacebook} />

                    {/*
                    <div className='socialIcon'><BsFacebook className='icon'/> <span className='textIcon'>Facebook</span></div>
                    <div className='socialIcon'><BsGoogle className='icon'/> <span className='textIcon'>Google</span></div>
                    */}

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
        )
      }
    </div>
    
  );
};

export default LogIn;