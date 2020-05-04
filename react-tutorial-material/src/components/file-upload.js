import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';


export default function FileUpload(){

    // states
    const [fileName, setFileName] = React.useState([]);
    
    // refs
    const fileInputRef = React.createRef();

    const handleFileBrowse = () => {
        fileInputRef.current.click();
    }

    const handleOnChange = (event) => {

        const fileNames = Array.from(event.target.files);
        setFileName(fileNames);

        console.log("Files array.from: ", Array.from(event.target.files));
        console.log("Files state: ", fileName);
        console.log("Files upload: ", event.target.files[0]);
    }

    return (
        <div>
            <input type="file" style={{display: "none"}} ref={fileInputRef} onChange={handleOnChange} multiple></input>
            <div style={{margin: "0 auto", width: "100%", display: "inline-block"}}>
                <Button onClick={handleFileBrowse} style={{backgroundColor: "#3f51b5", color: "white", width: "100%"}}>Browse</Button>
            </div>
            
        </div>
    )
} 