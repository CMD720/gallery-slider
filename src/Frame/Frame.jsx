import React from 'react';
import './Frame.css'


const Frame = React.forwardRef(({h3, path, saveRef, setActive}, ref) => {

    return (
        <div className="slide" ref={saveRef(h3)} onClick={(e)=>setActive(e)}
             style={{backgroundImage: "url(" + path + ")"}}>
            <h3>{h3}</h3>
        </div>
    );
});

export default Frame;