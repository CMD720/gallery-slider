import React from 'react';
import "./Home.css"
import InputFiles from "../InputFiles/InputFiles";

const Home = ({data}) => {

    return (
        <div className={'input__wrapper'}>
            <InputFiles data={data}/>
            <div className="welcome">
                <div>
                    <h1>Welcome</h1>
                </div>
                <div>SLIDER : click on picture, slide bigger and show description</div>
                <div>GALLERY : use DragAndDrop for sort gallery</div>
            </div>
        </div>
    );
};

export default Home;