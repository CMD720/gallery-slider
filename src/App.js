import React, {useState} from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home/Home";
import Gallery from "./Gallery/Gallery";
import Slider from "./Slider/Slider";
import Navigation from "./Nvagation/Navigation";

const App = () => {
    const [data , setData] = useState([])

    const createData=(fileList) =>{
        setData(fileList)
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Navigation/>
                <div className="container-app">
                    <Routes>
                        <Route index  element={<Home data={createData}/>}/>
                        <Route path='/slider' element={<Slider data={data}/>}/>
                        <Route path='/gallery' element={<Gallery data={data}/>}/>
                        {/*<Route path='/example' element={<EventExample/>}/>*/}
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
export default App;