import React, {useRef, useState} from 'react';
import Frame from "../Frame/Frame";
import "./DrawFrame.css"

const DrawFrame =({data}) => {
    const [slideElement , setSlideElement] = useState([])
    //sorting array of repeating elements use Set() method
    const makeUniq = (arr) => [...new Set(arr)];

    const setActive = (e) => {
        setSlideElement([...makeUniq(slideElement),e.target])
        for( let i=0; i<slideElement.length; i++){
            slideElement[i].classList.remove('active')
        }
        e.target.classList.add('active')
    }

/*---массив длиинной data.length со значениями объектов useRef прикреплённых к div компонента <Frame>---{херня какая то - пока пусть будет}*/
    const self = new Array(data.length).fill(useRef({}).current)
    const saveRef = (key) => (r) => { self[key] = r }


    return (
        <div className="frame-container">
            {data.map(slide => (
                <Frame key={slide.name} h3={slide.name} path={slide.path} saveRef={saveRef} setActive={setActive}/>
            ))}
        </div>
    );
};

export default DrawFrame;