import {NavLink} from "react-router-dom";
import "../css/Header.css"

export const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img className="header_img" src="../../public/kimetsu-no-yaiba_logo.svg" alt="logo"/>
            </div>
            <div className="header_link">
                <NavLink className="header_navLink" to="/">Home</NavLink>
                <NavLink className="header_navLink" to="/episodes">Episodes</NavLink>
                <NavLink className="header_navLink" to="/about">About</NavLink>
                <NavLink className="header_navLink" to="/contact">Contact</NavLink>
            </div>
        </div>



    )
}