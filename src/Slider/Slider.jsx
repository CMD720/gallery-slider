import React from 'react';
import "./Slider.css"
import DrawFrame from "../DrawFrame/DrawFrame";

const Slider = ({data}) => {

    return (
        <div>
            <div className="container-wrapper">
                <DrawFrame data={data}/>
            </div>
        </div>
    );
};

export default Slider;