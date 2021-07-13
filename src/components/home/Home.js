import Header from "../common/header/Header";
// import logo from "../../../src/logo.svg";
import {useHistory} from 'react-router-dom';

const Home = (props) => {
    
    
    return (
        <div>
            <Header selected ="HOME" history={props.history} />
            This is Home Page
            <div className="logo-container">
        
                
            </div>
        </div>
    )
}
export default Home;