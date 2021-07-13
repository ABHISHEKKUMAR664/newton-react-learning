import logo from '../../../../src/logo.svg';
import { useHistory } from 'react-router-dom';
import SearchBar from '../../searchBar/SearchBar';
import {HiSearch} from 'react-icons/hi';

const Header = ({selected}) => {
     const history=useHistory();
     const redirect = (path) => {
       history.push(path)
     }

    return (   
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={logo}></img>
            </div>
            <nav className="nav-bar">
                <p className={`link ${selected === "HOME" ? "selected" : ""}` } onClick={() => redirect("/")}>Home</p>
                <p className={`link ${selected === "CONTACT" ? "selected" : ""}` } onClick={() => redirect("/contactus")}>Contact</p>
                <p className={`link ${selected === "RESUME" ? "selected" : ""}` } onClick={() => redirect("/resume")}>Resume</p>
                <p className={`link ${selected === "WORK" ? "selected" : ""}` } onClick={() => redirect("/work/:work")}>Work</p>
               <SearchBar icon={ <HiSearch/> }/>
             
            </nav>
        </header > 

    )
}
export default Header;