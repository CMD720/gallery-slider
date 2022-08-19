import React, {useEffect, useRef, useState} from 'react';
import './InputFile.css'

const InputFiles = ({data}) => {
    const [files, setFiles] = useState(null)
    const selectInput = useRef()
///useEffect ставит ref на input после отрисовки
    useEffect(()=>{
        setFiles(selectInput)
    },[])

    let fileList = [{
        id:'',
        count:'',
        order: '',
        name: '',
        path: ''
    }]

    // console.log('REF input',selectInput.current)
    // console.log('USE state',files)

    const start = ()=>{
        for(let i=0; i<files.current.files.length; i++){

            fileList[i] = {
                id: i,
                count:0,
                order: i+1,
                name:files.current.files[i].name.slice(0,-4),
                path:'img/'+ files.current.files[i].name
            }
        }
        data(fileList)
    }
    return (
        <div style={{paddingTop:"35px", color:"white", background:"black"}}>
            <label>
                <input type="file" multiple ref={selectInput} onChange={start}></input>
            <div className={'choice__file'}><span>Select files</span></div></label>
        </div>
    );
};

export default InputFiles;