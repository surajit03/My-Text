import React, {useState} from 'react'

export default function Box(props) {
    
    const handleOnChange =(event)=>{
        newText(event.target.value)

    }

    const Upercase=()=>{
        let text1= text.toUpperCase()
        newText(text1)
    }

    const Lowercase=()=>{
        let text2= text.toLocaleLowerCase()
        newText(text2)
    }

    const clear=()=>{
        let text3=""
        newText(text3)
    }

    // const copyText=()=>{
    //     var text=document.getElementById("box5")
    //     text.selet();
    //     navigator.clipboard.writeText(text.value);
    // }

    const [text, newText] = useState("Write Anything");
  return (
    <div className="form-group">
      <h1 style={{color:props.mode==='light'?'black':'white'}}>Write a paragraph</h1>
      <textarea className="form-control" id="box5" rows="8" style={{background:props.mode==='light'?'white':'grey' ,color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange}></textarea>
      <button className="btn1 m-2" onClick={Upercase}>Upercase</button>
      <button className="btn2 m-2" onClick={Lowercase}>Lowercase</button>
      <button className="btn3 m-2" onClick={clear}>Clear Text</button>
      {/* <button className="btn4 m-2" onClick={copyText}>Copy Text</button> */}
    </div>
  )
}
