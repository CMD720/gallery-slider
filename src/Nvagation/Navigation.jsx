import React from 'react';
import {Link} from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="navi">
            <nav>
                <h1>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="slider">Slider</Link> |{" "}
                    <Link to="gallery">Gallery</Link> |{" "}
                    {/*<Link >Список дел</Link> |{" "}*/}
                </h1>
            </nav>
        </div>
    );
};

export default Navigation;