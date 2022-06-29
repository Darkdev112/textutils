import React from 'react';
import Proptypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link> */}
                            <a className="nav-link active" aria-current="page" href="#">{props.title}</a>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="about">{props.aboutUs}</Link> */}
                            <a className="nav-link active" aria-current="page" href="#">{props.aboutUs}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check text-${props.mode === "light" ? "dark" : "light"} mx-2`}>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" Htmlfor="flexRadioDefault1">
                            Green
                        </label>
                    </div>
                    <div className={`form-check text-${props.mode === "light" ? "dark" : "light"} mx-2`}>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" Htmlfor="flexRadioDefault2">
                            Yellow
                        </label>
                    </div>
                    <div className={`form-check text-${props.mode === "light" ? "dark" : "light"} mx-2`}>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label" Htmlfor="flexRadioDefault3">
                            Red
                        </label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} mx-3`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" Htmlfor="flexSwitchCheckDefault">Enable dark mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: Proptypes.string,
    aboutUs: Proptypes.string
};

Navbar.defaultProps = {
    title: "Set Title Here",
    aboutUs: "Set About Here"
};
