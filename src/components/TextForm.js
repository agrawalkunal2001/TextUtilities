import React, { useState } from 'react' // {useState} is a hook which allows to use class features without creating a class

export default function TextForm(props) {
    const [text, setText] = useState(""); // When text variable is used, the default value in brackets will be used. When text is updated, it will be performed through setText function. This is array de-structuring syntax

    const handleUpClick = () => {
        let newText = text.toUpperCase(); // Converts text to uppercase
        setText(newText);
        props.showAlert("Converted to upper-case!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase(); // Converts text to uppercase
        setText(newText);
        props.showAlert("Converted to lower-case!", "success");
    }

    const handleClearClick = () => {
        let newText = ""; // Clears text
        setText(newText);
        props.showAlert("Cleared text!", "success");
    }

    const handleCopyClick = () => {
        let text = document.getElementById("myBox"); // Copies text
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text to clipboard!", "success");
    }

    const handleSpaceClick = () => {
        let newText = text.split(/[ ]+/); // Removes extra spaces
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value); // Adds text to default text
    }

    return (
        <>
            <div className="container" style={{ color: props.themeMode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{ backgroundColor: props.themeMode === "dark" ? "white" : "black", color: props.themeMode === "dark" ? "black" : "white" }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleSpaceClick}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.themeMode === "dark" ? "white" : "black" }}>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }). /* Earlier text utilities showed words even if there were only spaces and no actual words because we indicated to increase words when a space occurred. This issue was fixed using a filter which takes in a function and adds the element/word in the array only if it returned true. Here if an element/word is empty string, false is returned, it is not added in array and not counted as a word */ length} words, {text.length} characters</p>
                <p>Can be read within {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes</p>
            </div>
        </>
    )
}
