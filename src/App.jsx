import Navbar from "./Components/Navbar";
import './app.css';
import LogIn from "./Pages/LogIn";

const App = () => {
    return (
        <div>
            <Navbar/>
            {/* Pages*/}
            <LogIn/>
        </div>
    );
};

export default App;