import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    };
    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    };
    const handleClear = () => {
        const newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div className="container my-3">
            <div className="container my-3" style={{color:props.mode==="dark"?"white":"#212529"}}>
                <h1 className='mb-3'>{props.heading}</h1> 
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor : props.mode === "dark"? "#212529":"white",color : props.mode==="dark"?"white":"#212529"}} ></textarea>
                </div>
                <button className="btn btn-dark mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
                <button className="btn btn-dark mx-1 my-1" onClick={handleLoClick} disabled={text.length===0}>Convert to Lowercase</button>
                <button className="btn btn-dark mx-1 my-1" onClick={handleClear} disabled={text.length===0}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==="dark"?"white":"#212529"}}>
                <h2>Your Text Summary</h2>
                <p>{text.trim().split(" ").filter((element) => {return element!==""}).length} words and {text.trim().length} characters</p>
                <p>{0.008 * (text.trim().split(" ").filter((element) => {return element!==""}).length + text.trim().split("\n").filter((element) => {return element!==""}).length )} minutes read</p>
                <h2>Preview</h2>
                <p>{text===""?"Nothing to Preview!":text}</p>
            </div>
        </div>
    )
}
