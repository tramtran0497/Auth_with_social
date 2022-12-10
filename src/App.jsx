import Navbar from "./Components/Navbar";
import './app.css';
import LogIn from "./Pages/LogIn";
import { useEffect } from "react";
import { gapi } from 'gapi-script';

const App = () => {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const app_id = process.env.REACT_APP_APP_ID;

    useEffect(() => {
        // initialize the client
        const initClient = () => {
            gapi.client.init({
            clientId: client_id,
            scope: ''
          });
       };
       gapi.load('client:auth2', initClient);
    });

    return (
        <div>
            {/* <Navbar/> Pages*/}
            <LogIn clientId={client_id} appId={app_id}/>
        </div>
    );
};

export default App;