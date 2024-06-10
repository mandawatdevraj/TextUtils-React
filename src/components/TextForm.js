import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        // console.log("Button was clicked");
        let newText = ' ';
        setText(newText);
        props.showAlert("text cleared", "success");
    }
    const handleCopy = () => {
        // console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "New Text" ; // Wrong way to change state
    // setText("New Text") ; // Correct way to change state
  return (
    <>
    <div className='container' style = {{color: props.mode === 'dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
            <div className="mb-3">
              <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}}rows="3"></textarea>
            </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Conver to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Conver to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-2"  style = {{color: props.mode === 'dark'?'white':'#042743'}}> 
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}