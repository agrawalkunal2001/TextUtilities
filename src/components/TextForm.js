import React, { useState } from 'react' // {useState} is a hook which allows to use class features without creating a class

export default function TextForm(props) {
    const [text, setText] = useState(""); // When text variable is used, the default value in brackets will be used. When text is updated, it will be performed through setText function. This is array de-structuring syntax

    const handleUpClick = () => {
        let newText = text.toUpperCase(); // Converts text to uppercase
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase(); // Converts text to uppercase
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = ""; // Clears text
        setText(newText);
    }

    const handleCopyClick = () => {
        let text = document.getElementById("myBox"); // Copies text
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleSpaceClick = () => {
        let newText = text.split(/[ ]+/); // Removes extra spaces
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        setText(event.target.value); // Adds text to default text
    }

    return (
        <>
            <div className="container" style={{color: props.themeMode === "dark" ? "white" : "black"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor: props.themeMode === "dark" ? "white" : "black", color: props.themeMode === "dark" ? "black" : "white"}}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-3" onClick={handleSpaceClick}>Remove Extra Spaces</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.themeMode === "dark" ? "white" : "black"}}>
                <h2>Preview</h2>
                <p>{text}</p>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>Can be read within {0.008 * text.split(" ").length} minutes</p>
            </div>
        </>
    )
}
